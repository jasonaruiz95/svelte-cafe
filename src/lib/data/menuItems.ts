import type { MenuItem } from "$lib/types";

export const menuItems: MenuItem[] = [

    // ── Coffee ──────────────────────────────────────
    {
        id: 1,
        name: 'Espresso',
        description: 'A rich and bold shot of espresso made from our house blend.',
        price: 3.50,
        category: 'coffee',
        image: '/images/espresso.jpg',
    },
    {
        id: 2,
        name: 'Latte',
        description: 'Smooth espresso with steamed milk and a light layer of foam.',
        price: 5.00,
        category: 'coffee',
        image: '/images/latte.jpg',
    },
    {
        id: 3,
        name: 'Cappuccino',
        description: 'Equal parts espresso, steamed milk, and thick foam.',
        price: 4.75,
        category: 'coffee',
        image: '/images/cappuccino.jpg',
    },
    {
        id: 4,
        name: 'Cold Brew',
        description: 'Slow-steeped for 24 hours for a smooth, low-acidity coffee.',
        price: 5.50,
        category: 'coffee',
        image: '/images/cold-brew.jpg',
    },

    // ── Tea ─────────────────────────────────────────
    {
        id: 5,
        name: 'Matcha Latte',
        description: 'Ceremonial grade matcha whisked with steamed milk.',
        price: 5.50,
        category: 'tea',
        image: '/images/matcha-latte.jpg',
    },
    {
        id: 6,
        name: 'Chai Latte',
        description: 'Spiced black tea concentrate with steamed milk.',
        price: 5.00,
        category: 'tea',
        image: '/images/chai-latte.jpg',
    },
    {
        id: 7,
        name: 'Earl Grey',
        description: 'Classic bergamot-scented black tea, served with lemon.',
        price: 3.75,
        category: 'tea',
        image: '/images/earl-grey.jpg',
    },

    // ── Cold Drinks ──────────────────────────────────
    {
        id: 8,
        name: 'Sparkling Lemonade',
        description: 'House-made lemonade topped with sparkling water.',
        price: 4.00,
        category: 'cold drinks',
        image: '/images/sparkling-lemonade.jpg',
    },
    {
        id: 9,
        name: 'Strawberry Smoothie',
        description: 'Blended fresh strawberries, banana, and yogurt.',
        price: 6.00,
        category: 'cold drinks',
        image: '/images/strawberry-smoothie.jpg',
    },

    // ── Food ─────────────────────────────────────────
    {
        id: 10,
        name: 'Avocado Toast',
        description: 'Sourdough toast topped with smashed avocado, chili flakes, and a poached egg.',
        price: 9.50,
        category: 'food',
        image: '/images/avocado-toast.jpg',
    },
    {
        id: 11,
        name: 'Breakfast Burrito',
        description: 'Scrambled eggs, cheddar, black beans, and salsa in a warm flour tortilla.',
        price: 10.00,
        category: 'food',
        image: '/images/breakfast-burrito.jpg',
    },
    {
        id: 12,
        name: 'Granola Bowl',
        description: 'House granola with Greek yogurt, honey, and seasonal fruit.',
        price: 8.00,
        category: 'food',
        image: '/images/granola-bowl.jpg',
    },

    // ── Pastry ───────────────────────────────────────
    {
        id: 13,
        name: 'Butter Croissant',
        description: 'Flaky, golden croissant baked fresh every morning.',
        price: 3.50,
        category: 'pastry',
        image: '/images/croissant.jpg',
    },
    {
        id: 14,
        name: 'Blueberry Muffin',
        description: 'Moist muffin packed with fresh blueberries and a crumbly sugar top.',
        price: 3.75,
        category: 'pastry',
        image: '/images/blueberry-muffin.jpg',
    },
    {
        id: 15,
        name: 'Cinnamon Roll',
        description: 'Soft roll with cinnamon sugar filling and cream cheese frosting.',
        price: 4.50,
        category: 'pastry',
        image: '/images/cinnamon-roll.jpg',
    },
];