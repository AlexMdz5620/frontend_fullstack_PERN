import { createBrowserRouter } from 'react-router-dom';;
import Layout from './layouts/Layout';
import Products from './views/Products';
import NewProduct from './views/NewProduct';
import EditProduct from './views/EditProduct';
import { action as newProductAction } from './actions/newProductAction'
import { action as editProductAction } from './actions/editProductAction';
import { action as deleteProductAction } from './actions/deleteProductAction';
import { action as updateAvailabilityAction } from './actions/updateAvailabilityAction';
import { loader as productsLoader } from './loaders/productsLoader';
import { loader as editProductLoader} from './loaders/editProductLoader';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Products />,
                loader: productsLoader,
                action: updateAvailabilityAction,
                hydrateFallbackElement: <p>Cargando...</p>,
            },
            {
                path: 'productos/nuevo',
                element: <NewProduct />,
                action: newProductAction,
            },
            {
                path: 'productos/:id/editar', // ROA Pattern - Resource-oriented desing
                element: <EditProduct />,
                loader: editProductLoader,
                action: editProductAction,
            },
            {
                path: 'productos/:id/eliminar',
                action: deleteProductAction
            },
        ]
    }
])