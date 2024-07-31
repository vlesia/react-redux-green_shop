import axios, { AxiosResponse } from "axios";
import { Product } from "../type/Product";

export const BASE_URL = "http://localhost:3000/";

const get = async <T>(url: string): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axios.get(`${BASE_URL}${url}`);
    return response.data;
  } catch (error) {
    throw new Error("GET request failed");
  }
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchData = async (): Promise<Product[]> => {
  await delay(2000);
  return get<Product[]>("data/products.json");
};
