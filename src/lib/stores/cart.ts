import { writable, derived } from 'svelte/store';
import { cartApi } from '$lib/api/cart';
import type { CartItem } from '$lib/types';

export const cartItems = writable<CartItem[]>([]);

export const cartCount = derived(cartItems, $items =>
    $items.reduce((sum, item) => sum + item.quantity, 0)
);

export const cartTotal = derived(cartItems, $items =>
    $items.reduce((sum, item) => sum + (item.menuItem.price * item.quantity), 0)
);

export async function fetchCart() {
    const items = (await cartApi.getCart()).cartItems;
    cartItems.set(items);
}

export async function removeFromCart(cartItemId: number) {
    // cartItems.update(items => items.filter(i => i.id !== cartItemId));
    await cartApi.removeItem(cartItemId);
    await fetchCart();
}

export async function updateQuantity(cartItemId: number, quantity: number) {
    cartItems.update(items =>
        items.map(i => i.id === cartItemId ? { ...i, quantity } : i)
    );
    await cartApi.updateItem(cartItemId, quantity);
    await fetchCart();

}

export async function clearCart(cartId: number) {
    // cartItems.set([]);
    await cartApi.clearCart(cartId);
    await fetchCart();
}

export async function addItemToCart(menuItemId: number, quantity: number, cartId: number, notes?: string)
{
    // cartItems;
    await cartApi.addItem(menuItemId, quantity,cartId, notes);
    await fetchCart();
}