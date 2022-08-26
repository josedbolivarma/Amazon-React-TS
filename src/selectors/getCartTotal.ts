import { Product } from "../interfaces/products";

// Selector
export const getCartTotal = ( cart: any ) => cart?.reduce(( amount: number, item: Product ) => item.precio + amount, 0 );