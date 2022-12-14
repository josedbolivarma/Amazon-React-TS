import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "../reducers/loginReducer";
import { productsReducer } from "../reducers/productsReducer";
import { registerReducer } from "../reducers/registerReducer";
import { shoppingCartReducer } from "../reducers/shoppingCartReducer";

// Local Storage
import { guardarLocalStorage, obtenerLocalStorage } from "../../utils/LocalStorage";
import { modalReducer } from "../reducers/modalReducer";
import { commentsReducer } from "../reducers/commentsReducer";

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storageState = obtenerLocalStorage();

const reducersEnviar = combineReducers({
    login: loginReducer,
    register: registerReducer,
    products: productsReducer,
    cart: shoppingCartReducer,
    modal: modalReducer,
    comments: commentsReducer
})

export const store = createStore(
    reducersEnviar,
    storageState,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

store.subscribe(() => {
    guardarLocalStorage(
        {
           modal: store.getState().modal
        }
   )
})