import prisma from "../../lib/prisma.js";
import { RegisterUserInput } from "./auth.types.js";

export function createUser(input: RegisterUserInput) {
    return prisma.user.create({
        data: input,
        select: {
            id: true,
            email: true,
            name: true,
            createdAt: true,
        }
    })
}

export function findUserByEmail(email: string) {
    return prisma.user.findUnique({
        where: { email },
        select: {
            id: true,
            email: true,
            name: true,
            password: true,
            createdAt: true,
        }
    })
}

