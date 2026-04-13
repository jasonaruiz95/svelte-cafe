<script lang="ts">
    import { cartItems, cartTotal, cartCount, removeFromCart, updateQuantity, clearCart, fetchCart } from '$lib/stores/cart';
    import { onMount } from 'svelte';

    onMount(() => {
        fetchCart();
    });
</script>

<div>
    <h2>Shopping Cart ({$cartCount})</h2>
    <div class="cartContainer">
        {#each $cartItems as cartItem (cartItem.id)}
            <div class="cartItemLayout">
                <h4>{cartItem.menuItem.name}</h4>
                <p>${cartItem.menuItem.price.toFixed(2)}</p>
                <button onclick={() => updateQuantity(cartItem.id, cartItem.quantity - 1)}>-</button>
                <span>{cartItem.quantity}</span>
                <button onclick={() => updateQuantity(cartItem.id, cartItem.quantity + 1)}>+</button>
                <button onclick={() => removeFromCart(cartItem.id)}>🗑</button>
            </div>
        {/each}

        {#if $cartItems.length > 0}
            <p>Total: ${$cartTotal.toFixed(2)}</p>
            <button onclick={clearCart}>Clear Cart</button>
        {:else}
            <p>Your cart is empty</p>
        {/if}
    </div>
</div>