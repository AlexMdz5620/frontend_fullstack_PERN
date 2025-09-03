import { Form, Link, useActionData, useLoaderData } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import type { Product } from "../types";
import ProductForm from "../components/ProductForm";

const availabilityOptions = [
    { name: 'Disponible', value: true },
    { name: 'No Disponible', value: false }
]

export default function EditProduct() {
    const product = useLoaderData() as Product;
    const error = useActionData() as string;

    return (
        <>
            <div className="flex justify-between">
                <h1 className="text-4xl font-black text-slate-600">Editar Producto</h1>
                <Link
                    to="/"
                    className="rounded-md bg-indigo-600 p-3 text-sm text-white shadow-sm hover:bg-indigo-500"
                >
                    Volver a productos
                </Link>
            </div>

            {error &&
                <ErrorMessage>
                    {error}
                </ErrorMessage>
            }

            <Form
                className="mt-10"
                method="POST"
            >

                <ProductForm
                    product={product}
                />

                <div className="mb-4">
                    <label
                        className="text-gray-800"
                        htmlFor="availability"
                    >Disponibilidad:</label>
                    <select
                        id="availability"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        name="availability"
                        defaultValue={product?.availability.toString()}
                    >
                        {availabilityOptions.map(option => (
                            <option key={option.name} value={option.value.toString()}>{option.name}</option>
                        ))}
                    </select>
                </div>

                <input
                    type="submit"
                    className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
                    value="Guardar Cambios"
                />
            </Form>
        </>
    )
}
