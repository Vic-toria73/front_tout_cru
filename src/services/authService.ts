import api from './api';
import { useAuth } from '../composables/useAuth';

export interface RegisterData {
  email: string
  firstName: string
  password: string
  confirmPassword: string
};

export const register = async (data: RegisterData) => {
  const response = await api.post('/users', data)
  return response.data
};

export interface LoginData {
  email: string
  password: string
};

export const login = async (data: LoginData) => {
  const response = await api.post('/auth/login', data)
  const { login: setAuth } = useAuth();

  if (response.data.token) {
    setAuth(response.data.token);
  }

  return response.data;
};

export const logout = () => {
  const { logout: clearAuth } = useAuth();
  clearAuth();
};