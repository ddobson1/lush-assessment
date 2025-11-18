import { Product } from '../types';

export const formatPrice = (product: Product, showRange: boolean = false): string => {
  const currencySymbol = product.currency === 'GBP' ? '£' : product.currency;
  const minPrice = parseFloat(product.minPrice).toFixed(2);
  
  if (!showRange) {
    return `${currencySymbol}${minPrice}`;
  }
  
  const maxPrice = parseFloat(product.maxPrice).toFixed(2);
  if (product.minPrice === product.maxPrice) {
    return `${currencySymbol}${minPrice}`;
  }
  
  return `${currencySymbol}${minPrice} - ${currencySymbol}${maxPrice}`;
};

