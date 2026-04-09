
<script lang="ts">
import type { CartItem } from '$lib/types';

let { data } = $props();
let cartOpen = $state(false);
let cart = $state<CartItem[]>([]);

</script>


<div>


    <div class="grid grid-cols-1 gap-6 bg-gray-100 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {#each data.menuItems as item (item.id)}

        <div class="overflow-hidden rounded-xl bg-white shadow-lg">
			<!-- <img src={product.thumbnail} alt={product.title} class="h-48 w-full object-cover" /> -->
			<div class="p-4">
				<p class="mb-2 overflow-hidden truncate text-lg font-medium text-gray-800">
					{item.name}
				</p>
				<div class="flex items-center justify-between">
					<p class="text-xl font-bold">${item.price}</p>
					<button
						class="rounded-full bg-sky-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-sky-700"
                        onclick={() => {
                            cart.push({
                                id: item.id,
                                menuItem: item
                            })
                        }}>
						Add to cart
					</button>
				</div>
			</div>
		</div>
        {/each}
    </div>
    </div>