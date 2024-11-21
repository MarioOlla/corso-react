export interface User {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role?: string;
}

export interface Category{
    id: number;
    name: string;
}

export interface Course {
    id: number;
    title: string;
    description: string;
    duration: number;
    category: Category;
}