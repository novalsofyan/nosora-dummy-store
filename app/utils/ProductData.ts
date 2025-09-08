import type { ProductPreview, ProductsResponse } from "../types/ProductTypes";

export async function getProduct() {
  let products: ProductPreview[] = [];
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL_API}/products?limit=50`);
    const data: ProductsResponse = await response.json();
    products = data.products;
    return products;
  } catch (error) {
    console.log("Error fetching products", error);
  }
}
