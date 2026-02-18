export interface User {
    id: string, 
    email: string,
    username: string
}

export interface LoginCredentials {
    username: string,
    password: string
}

export interface AuthResponse {
    access: string,
    refresh: string
}

export interface AuthContextType {
    user: User | null, 
    login: (credentials: LoginCredentials) => Promise<void>;
    logout: () => void;
}

export interface Post {
    id: string,
    title: string,
    content: string,
    image: File | null,
    createdAt: string
}

export interface NewPost {
    title: string,
    content: string,
    image: File | null
}

export interface ErrorData {
    title?: string,
    description?: string
}

