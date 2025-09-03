import { redirect, type ActionFunctionArgs } from "react-router-dom";
import { updateProduct } from "../service/ProductService";

export async function action({ request, params }: ActionFunctionArgs) {
    const data = Object.fromEntries(await request.formData())
    let error = '';

    if (Object.values(data).includes('')) {
        error = 'Todos los campos son obligatorios'
    }
    if (error.length) return error;

    if (params.id !== undefined) {
        await updateProduct(data, +params.id);
    }

    return redirect('/');
}