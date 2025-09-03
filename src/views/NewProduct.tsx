import { Form, Link, useActionData } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import ProductForm from "../components/ProductForm";

export default function NewProduct() {
    const error = useActionData() as string;

    return (
        <>
            <div className="flex justify-between">
                <h1 className="text-4xl font-black text-slate-600">Registrar Producto</h1>
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

                <ProductForm />
                
                <input
                    type="submit"
                    className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
                    value="Registrar Producto"
                />
            </Form>
        </>
    )
}
