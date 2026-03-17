export interface RegisterUserInput {
    email: string;
    name: string;
    password: string;
}

export interface LoginUserInput {
    email: string;
    password: string;
}

export type SafeUser = {
    id: number;
    email: string;
    name: string;
    createdAt: Date;
}