import { Config } from '@shared/config';

export type ProductDTO = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
};

export type ProductListDTO = {
  products: ProductDTO[];
  total: number;
  skip: number;
  limit: number;
};

export const getProductList = async (skip = 0, limit = 10): Promise<ProductListDTO> => {
  const response = await fetch(
    `${Config.api.baseURL}/products?select=id,title,description,thumbnail,images&limit=${limit}&skip=${skip}`,
    {},
  );
  return await response.json();
};

export const getProduct = async (id: number): Promise<ProductDTO> => {
  const response = await fetch(`${Config.api.baseURL}/products/${id}`);
  return await response.json();
};
