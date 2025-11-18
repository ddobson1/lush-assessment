import { useMemo } from 'react';
import { Product } from '../types';
import productData from '../data/task_mock_data.json';

const getAllProducts = (): Product[] => {
  return productData.data;
};

export const useProducts = (selectedCategory: string | null = null) => {
  const allProducts = useMemo(() => getAllProducts(), []);

  const categories = useMemo(() => {
    const allCategories = allProducts.flatMap((product) => product.category);
    return Array.from(new Set(allCategories)).sort();
  }, [allProducts]);

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) {
      return allProducts;
    }
    return allProducts.filter((product) =>
      product.category.includes(selectedCategory)
    );
  }, [allProducts, selectedCategory]);

  return {
    products: filteredProducts,
    allProducts,
    categories,
  };
};

export const useProduct = (productId: string): Product | undefined => {
  return useMemo(() => {
    const products = getAllProducts();
    return products.find((product) => product.id === productId);
  }, [productId]);
};

