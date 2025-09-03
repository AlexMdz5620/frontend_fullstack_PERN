import { Form, useFetcher, useNavigate } from "react-router-dom";
import type { Product } from "../types"
import { formatCurrency } from "../utils"

type ProductDetailsProps = {
    product: Product
}

export default function ProductDetails({ product }: ProductDetailsProps) {
    const fetcher = useFetcher();
    const navigate = useNavigate();
    const isAvailability = product.availability;

    return (
        <tr className="border-b ">
            <td className="p-3 text-lg text-gray-800">
                {product.name}
            </td>
            <td className="p-3 text-lg text-gray-800">
                {formatCurrency(product.price)}
            </td>
            <td className="p-3 text-lg text-gray-800">
                <fetcher.Form method="POST">
                    <button
                        type="submit"
                        name="id"
                        value={product.id}
                        className={`${isAvailability ? 'text-black': 'text-red-600'} rounded-lg p-2 text-sm uppercase font-bold w-full border hover:cursor-pointer`}
                    >
                        {isAvailability ? 'Disponible' : 'No Disponible'}
                    </button>
                </fetcher.Form>
            </td>
            <td className="p-3 text-lg text-gray-800 ">
                <div className="flex gap-2 items-center">
                    <button
                        onClick={() => navigate(`/productos/${product.id}/editar`)}
                        className="bg-indigo-600 text-white rounded-lg w-full p-2 font-bold text-xs text-center"
                    >
                        Editar
                    </button>

                    <Form
                        className="w-full"
                        method="POST"
                        action={`productos/${product.id}/eliminar`}
                        onClick={e => {
                            if (!confirm('Elimnar')) {
                                e.preventDefault();
                            }
                        }}
                    >
                        <input
                            type="submit"
                            value="Eliminar"
                            className="bg-red-600 text-white rounded-lg w-full p-2 font-bold text-xs text-center"
                        />
                    </Form>
                </div>
            </td>
        </tr>
    )
}
