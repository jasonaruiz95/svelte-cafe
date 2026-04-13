import { createClient } from './client';
import type { MenuItem } from '$lib/types';

export function createMenuApi(fetchFn = fetch) {
    const client = createClient(fetchFn);
    return {
        getAll: () => client.get<MenuItem[]>('/api/Menu'),
        getById: (id: number) => client.get<MenuItem>(`/api/menu/${id}`),
        getByCategory: (category: string) => client.get<MenuItem[]>(`/api/menu/category/${category}`),
    };
}

// default for use in components
export const menuApi = createMenuApi();