import { client } from './client';

export const authApi = {
    register: (email: string, password: string) =>
        client.post('/register', { email, password }),

    login: (email: string, password: string) =>
        client.post('/login?useCookies=true', { email, password }),

    logout: () =>
        client.post('/logout', {}),
};