import prisma from "../../lib/prisma";
import { RegisterUserInput } from "./auth.types";

export async function createUser(input: RegisterUserInput) {
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

export async function findUserByEmail(email: string) {
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