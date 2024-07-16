import { Product } from "../../type/Product";

export const getFilteredProducts = (
  products: Product[],
  filter: string,
  query: string
): Product[] => {
  return products.filter((product) => {
    const matchesCategory = filter === "all" || product.category === filter;
    const matchesQuery =
      query === "" || product.name.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });
};
