import { AppError } from "../../shared/errors/appError.js";
import { createUser, findUserByEmail } from "./auth.repository.js";
import { RegisterUserInput, LoginUserInput } from "./auth.types.js";
import { hashPassword, comparePassword } from "../../shared/utils/hash.js";
import jwt from "jsonwebtoken";

export async function registerUser(input: RegisterUserInput) {
    const existingUser = await findUserByEmail(input.email);

    if(existingUser) {
        throw new AppError("Email is already in use", 409);
    }

    const hashedPassword = await hashPassword(input.password);
    const user = await createUser({
        ...input,
        password: hashedPassword
    })
    const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET!, { expiresIn: "3d" });

    return { user, token };
}

export async function loginUser(input: LoginUserInput) {
    const user = await findUserByEmail(input.email);

    if(!user) {
        throw new AppError("Invalid email or password", 401);
    }

    const isPasswordValid = await comparePassword(input.password, user.password);

    if(!isPasswordValid) {
        throw new AppError("Invalid email or password", 401);
    }

    const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET!, { expiresIn: "3d" });
    const { password, ...userWithoutPassword } = user;

    return { user: userWithoutPassword, token };
}