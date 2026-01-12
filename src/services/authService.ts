import api from "./api";

export interface RegisterData {
    email: string;
    firstName: string;
    password: string;
    confirmPassword: string;
}

export const register = async (data: RegisterData) => {
    const response = await api.post("/users", data);
    return response.data
} 