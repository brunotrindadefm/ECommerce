import axios from "axios";

import { ProductType } from "@/types/ProductType";
import Product from "./components/Product";

const getProducts = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="max-w-7xl mx-auto py-7 px-8 xl:px-0 sm:w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 xl:gap-6">
        {products &&
          products.map((product: ProductType) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}
