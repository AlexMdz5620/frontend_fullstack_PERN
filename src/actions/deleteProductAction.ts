import { redirect, type ActionFunctionArgs } from "react-router-dom";
import { deleteProduct } from "../service/ProductService";

export async function action({ params }: ActionFunctionArgs) {
    if (params.id !== undefined) {
        await deleteProduct(+params.id);

        return redirect('/');
    }
}