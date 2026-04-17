import { client } from './client';
import type { Cart, CartItem } from '$lib/types';

export const cartApi = {
    getCart: () => client.get<Cart>('/api/Cart'),
    addItem: (menuItemId: number, quantity: number, cartId: number, notes?: string) =>
        client.post<Cart>('/api/cart/items', { menuItemId, quantity, cartId, notes }),
    updateItem: (cartItemId: number, quantity: number) =>
        client.patch<Cart>(`/api/cart/items/${cartItemId}`, { quantity }),
    removeItem: (cartItemId: number) =>
        client.delete<Cart>(`/api/cart/items/${cartItemId}`),
    clearCart: (cartId: number) => client.delete<void>(`/api/cart/${cartId}`),
};