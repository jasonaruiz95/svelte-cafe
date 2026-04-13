

export interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
}

export interface CartItem {
    id: number;
    menuItem: MenuItem;
    notes?: string;
    name?: string;
    quantity: number;
}

export interface Cart {
    id: number;
    cartItems: CartItem[];
    readonly subTotal: number;
    readonly itemCount: number;
}

export interface LineItem {
    id: number;
    menuItem: MenuItem;
    name: string;
    quantity: string;
    unitPrice: number;
    selectedOptions: Record<string, string>
    readonly total: number;

}

export interface Bill {
    id: number;
    lineItems: LineItem[];
    total: number;
    tax: number;
    tip?: number;
    subTotal: number;
}

export type OrderStatus =
    | 'pending'
    | 'confirmed'
    | 'preparing'
    | 'ready'
    | 'completed'
    | 'cancelled';

export interface Order {
id: string;
status: OrderStatus;
lineItems: LineItem[];
bill: Bill;
createdAt: string;
updatedAt: string;
notes?: string;
tableNumber?: number;
}