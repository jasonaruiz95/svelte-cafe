import { client } from './client';
import type { Order } from '$lib/types';

export const ordersApi = {
    getAll: () =>
        client.get<Order[]>('/api/orders'),

    getById: (id: number) =>
        client.get<Order>(`/api/orders/${id}`),

    create: (cartId: number, tableNumber?: number, notes?: string) =>
        client.post<Order>('/api/orders', { cartId, tableNumber, notes }),

    updateStatus: (id: number, status: string) =>
        client.patch<Order>(`/api/orders/${id}/status`, { status }),
};