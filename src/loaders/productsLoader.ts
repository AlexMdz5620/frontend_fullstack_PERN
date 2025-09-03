import { getProducts } from "../service/ProductService";

export async function loader() {
  const products = await getProducts()
  return products;
}