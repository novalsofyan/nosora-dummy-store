type ProductPreview = {
  id?: number;
  title: string;
  description: string;
  price: number;
  stock: number;
  rating: number;
  thumbnail: string;
};

type ProductsResponse = {
  products: ProductPreview[];
  total: number;
  skip: number;
  limit: number;
};

export type { ProductPreview, ProductsResponse };
