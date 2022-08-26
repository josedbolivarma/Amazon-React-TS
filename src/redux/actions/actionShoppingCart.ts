import { typesShoppingCart } from "../types/types"

//Add To Cart
export const addSyncToCart = ( product:any ) => {
    return {
        type: typesShoppingCart.add,
        payload: product
    }
}

//List Sync
export const listSync = () => {
    return {
        type: typesShoppingCart.list,
    }
}

// Delete From Cart
export const deleteSyncFromCart = ( codigo: string ) => {
    console.log('DELETESYNCFROMCART  ', codigo);
    return {
        type: typesShoppingCart.remove,
        payload: codigo
    }
}