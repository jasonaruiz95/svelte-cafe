<script lang="ts">
import type { CartItem } from '$lib/types';
import { addItemToCart } from '$lib/stores/cart';
    
let { data } = $props();
let cartOpen = $state(false);
let cart = $state<CartItem[]>([]);

</script>


    <div class="gridContainer">
        {#each data.menuItems as item (item.id)}

        <div class="gridItem">
			<img src={item.image} alt={item.description} class="h-48 w-full object-cover" />
			<div class="p-4">
				<p class="mb-2 overflow-hidden truncate text-lg font-medium text-gray-800">
					{item.name}
				</p>
				<div class="flex items-center justify-between">
					<p class="text-xl font-bold text-cyan-700">${item.price}</p>
					<button
						class="rounded-full bg-sky-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-sky-700"
                        onclick={() => {
                            addItemToCart(item.id, 1, 1)
                        }}>
						Add to cart
					</button>
				</div>
			</div>
		</div>
        {/each}
    </div>
