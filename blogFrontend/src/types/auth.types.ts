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
    id: number,
    title: string,
    content: string,
    excerpt: string,
    image: string,
    createdAt: string
}

export interface NewPost {
    title: string,
    content: string,
    excerpt: string,
    image: string
}

export interface ErrorData {
    title?: string,
    content?: string,
    excerpt?: string
}

