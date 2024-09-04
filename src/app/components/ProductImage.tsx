'use client'

import { ProductType } from "@/types/ProductType"
import Image from "next/image";
import { useState } from "react";

type ProductImageProps = {
    product: ProductType,
    fill?: boolean 
};

const ProductImage = ({product, fill}: ProductImageProps) => {

    const [loading, setLoading] = useState<boolean>(true);

    // para dar um blur na imagem

    // image do next, melhora o desempenho, acessibilidade e experiência do usuário

  return fill ? (
    <Image
    src={product.image}
    fill
    alt={product.title}
    className={`object-cover transition-all duration-700 ease-in-out transform ${
        loading ? 'scale-105 blur-sm grayscale' : 'scale-100 blur-0 grayscale-0' 
    }`}
    onLoadingComplete={() => setLoading(false)}
    />
  ) : (
    <Image
    src={product.image}
    width={400}
    height={700}
    alt={product.title}
    className={`object-cover transition-all duration-700 ease-in-out transform ${
      loading ? 'scale-105 blur-sm grayscale' : 'scale-100 blur-0 grayscale-0' 
    }`}
    onLoadingComplete={() => setLoading(false)}
    />
  )
}

export default ProductImage
