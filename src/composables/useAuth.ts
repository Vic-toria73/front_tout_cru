import { computed, ref } from 'vue'

const token = ref<string | null>(localStorage.getItem('token'));

export const useAuth = () => {
  const isAuthenticated = computed(() => !!token.value)

  const login = (newToken: string) => {
    token.value = newToken;
    localStorage.setItem('token', newToken)
  };

  const logout = () => {
    token.value = null
    localStorage.removeItem('token')
  };

  return {
    isAuthenticated,
    login,
    logout,
  };
};
