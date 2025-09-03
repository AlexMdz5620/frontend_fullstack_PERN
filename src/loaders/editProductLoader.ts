import { redirect, type LoaderFunctionArgs } from "react-router-dom";
import { getProductsById } from "../service/ProductService";

export async function loader({ params }: LoaderFunctionArgs) {
    if (params.id !== undefined) {
        const product = await getProductsById(+params.id);
        if (!product) {
            return redirect('/');
        }
        return product;
    }
}