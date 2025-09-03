import type { ActionFunctionArgs } from "react-router-dom";
import { updateProductAvailability } from "../service/ProductService";

export async function action({ request }: ActionFunctionArgs) {
    const data = Object.fromEntries(await request.formData());
    await updateProductAvailability(+data.id);
}