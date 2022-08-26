import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const lazy1 = lazy(() => import(/* webpackChunkName: "LazyHomePage" */'../app/pages/Home/Home'));
const lazy2 = lazy(() => import(/* webpackChunkName: "LazyProductsPage" */'../app/pages/Products/Products'));
const lazy3 = lazy(() => import(/* webpackChunkName: "LazyOrderPage" */'../app/pages/Order/Order'));
const lazy4 = lazy(() => import(/* webpackChunkName: "LazyOrderPage" */'../app/pages/Checkout/Checkout'));

export const routes: Route[] = [
    {
        to: '/',
        path: '/',
        Component: lazy1,
        name: 'Home'
    },
    {
        to: '/products',
        path: '/products',
        Component: lazy2,
        name: 'Products'
    },
    {
        to: '/order',
        path: '/order',
        Component: lazy3,
        name: 'Order'
    },
    {
        to: '/cart',
        path: '/cart',
        Component: lazy4,
        name: 'Shopping Cart'
    }
];