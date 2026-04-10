import { createMenuApi } from '$lib/api/menu';

export const load = async ({ fetch }) => {
    const menuApi = createMenuApi(fetch);
    const menuItems = await menuApi.getAll();
    return { menuItems };
};