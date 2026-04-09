<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="layoutContainer">

<header class="layoutItem" style="grid-area: header">
	<h1> Svelte Cafe</h1>
</header>

<aside class="layoutItem" style="grid-area: left-sidebar">

</aside>
<section class="layoutItem" style="grid-area: main">
{@render children()}
</section>
<aside class="layoutItem" style="grid-area: right-sidebar">

</aside>
<footer class="layoutItem" style="grid-area: footer">
	Published by Jason Ruiz 2026
</footer>
</div>

