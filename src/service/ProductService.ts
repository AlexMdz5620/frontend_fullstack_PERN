import { number, parse, pipe, safeParse, string, transform } from "valibot";
import { DraftProductSchema, ProductSchema, ProductsSchema, type Product } from "../types";
import axios from "axios";
import { toBoolean } from "../utils";

type ProductData = {
    [k: string]: FormDataEntryValue;
}

export async function addProduct(data: ProductData) {
    try {
        const result = safeParse(DraftProductSchema, {
            name: data.name,
            price: +data.price,
        });

        if (result.success) {
            const url = `${import.meta.env.VITE_APU_URL}/api/products`;
            await axios.post(url, {
                name: result.output.name,
                price: result.output.price,
            });
        } else {
            throw new Error('Datos no válidos');
        }
    } catch (error) {
        console.error(error);
    }
}

export async function getProducts() {
    try {
        const url = `${import.meta.env.VITE_APU_URL}/api/products`;
        const { data } = await axios(url);

        const res = safeParse(ProductsSchema, data.data);
        if (res.success) {
            return res.output;
        } else {
            throw new Error('Hubo un error...')
        }

    } catch (error) {
        console.error(error);
    }
}

export async function getProductsById(id: Product['id']) {
    try {
        const url = `${import.meta.env.VITE_APU_URL}/api/products/${id}`;
        const { data } = await axios(url);

        const res = safeParse(ProductSchema, data.data);
        if (res.success) {
            return res.output;
        } else {
            throw new Error('Hubo un error...')
        }

    } catch (error) {
        console.error(error);
    }
}

export async function updateProduct(data: ProductData, id: Product['id']) {
    try {
        const NumberSchema = pipe(string(), transform(Number), number());
        const res = safeParse(ProductSchema, {
            id,
            name: data.name,
            price: parse(NumberSchema, data.price),
            availability: toBoolean(data.availability.toString()),
        });

        if (res.success) {
            const url = `${import.meta.env.VITE_APU_URL}/api/products/${id}`;
            await axios.put(url, res.output);
        }
    } catch (error) {
        console.error(error);
    }
}

export async function deleteProduct(id: Product['id']) {
    try {
        const url = `${import.meta.env.VITE_APU_URL}/api/products/${id}`;
        await axios.delete(url);
    } catch (error) {
        console.error(error);
    }
}

export async function updateProductAvailability(id: Product['id']) {
    try {
        const url = `${import.meta.env.VITE_APU_URL}/api/products/${id}`;
        await axios.patch(url);
    } catch (error) {
        console.error(error);
    }
}
