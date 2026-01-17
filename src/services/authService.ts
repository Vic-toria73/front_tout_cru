import api from './api'

export interface RegisterData {
  email: string
  firstName: string
  password: string
  confirmPassword: string
}

export const register = async (data: RegisterData) => {
  const response = await api.post('/users', data)
  return response.data
}

export interface LoginData {
  email: string
  password: string
}

export const login = async (data: LoginData) => {
  const response = await api.post('/auth/login', data)

  if (response.status !== 200) throw new Error(`Erreur HTTP ${response.status}`);

  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
  }
  console.log(response);
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
};