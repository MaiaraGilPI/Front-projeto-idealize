/* eslint-disable @typescript-eslint/no-unused-vars */
import api from './api';
import { jwtDecode } from 'jwt-decode';

interface TokenPayload {
  sub: number;
  email: string;
  role: 'USER' | 'ADMIN';
  iat: number;
  exp: number;
}

const TOKEN_KEY = 'token';

const AuthService = {
  login: async (email: string, password: string): Promise<void> => {
    const response = await api.post('/auth/login', { email, password });
    const token = response.data.access_token;
    localStorage.setItem(TOKEN_KEY, token);
  },

  logout: (): void => {
    localStorage.removeItem(TOKEN_KEY);
  },

  getToken: (): string | null => {
    return localStorage.getItem(TOKEN_KEY);
  },

  getUser: (): TokenPayload | null => {
    const token = AuthService.getToken();
    if (!token) return null;

    try {
      return jwtDecode<TokenPayload>(token);
    } catch (err) {
      return null;
    }
  },

  isAuthenticated: (): boolean => {
    const token = AuthService.getToken();
    if (!token) return false;

    try {
      const { exp } = jwtDecode<TokenPayload>(token);
      return exp * 1000 > Date.now(); // não expirado
    } catch (err) {
      return false;
    }
  },

  isAdmin: (): boolean => {
    const user = AuthService.getUser();
    return user?.role === 'ADMIN';
  },
};

export default AuthService;
