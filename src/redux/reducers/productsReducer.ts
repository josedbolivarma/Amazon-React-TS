import { typesProductos } from "../types/types";

const initialState = {
    products: []
}

export const productsReducer = ( state = initialState, action:any ) => {
    switch (action.type) {
        case typesProductos.add:
            return {
                products: [action.payload]
            }
            case typesProductos.addFormik: 
                return {
                    products: [action.payload]
                }

            case typesProductos.list: 
                return {
                    products: [...action.payload]
                }
                case typesProductos.edit:
                    return {
                        ...state
                    }
            case typesProductos.delete:
                return {
                    products: state.products.filter( ( p: any ) => p.nombre !== action.payload)
                }
                
            default:
                return state;
    }
}