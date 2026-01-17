import api from './api'

export const getCurrentUser = () => {
  return api.get('/users/me')
}

export const updateMyAccount = (data: { email: string; firstName: string }) => {
  return api.put('/users/me', data)
}

export const updateMyPassword = (data: {
  oldPassword: string
  confirmPassword: string
  newPassword: string
}) => {
  return api.put('/users/me/password', data)
};
