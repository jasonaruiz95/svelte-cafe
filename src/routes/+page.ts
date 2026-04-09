// import type { PageLoad } from './$types';
import { menuItems } from '$lib/data/menuItems';

export const load = async () => {
    return {
        menuItems
    };
};