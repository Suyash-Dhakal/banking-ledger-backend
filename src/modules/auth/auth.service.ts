import { AppError } from "../../shared/errors/appError";
import { createUser, findUserByEmail } from "./auth.repository";
import { RegisterUserInput } from "./auth.types";
import { hashPassword } from "../../shared/utils/hash";

export async function registerUser(input: RegisterUserInput) {
    const existingUser = await findUserByEmail(input.email);

    if(existingUser) {
        throw new AppError("Email is already in use", 409);
    }

    const hashedPassword = await hashPassword(input.password);

    return createUser({
        ...input,
        password: hashedPassword
    })
}