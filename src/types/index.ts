export interface ProductThumbnail {
  url: string;
}

export interface ProductCollection {
  name: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  minPrice: string;
  maxPrice: string;
  currency: string;
  category: string[];
  thumbnail: ProductThumbnail;
  collections: ProductCollection[];
  isAvailable: boolean;
}

export type RootStackParamList = {
  ProductList: undefined;
  ProductDetail: { productId: string };
  WebView: { url: string };
};

