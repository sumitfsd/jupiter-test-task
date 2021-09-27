export interface productDetails {
  productId: {
    value: string;
  };
  name: string;
  upcCode?: string;
  price: number;
  description?: string;
  imageUrl?: string;
  stepSize?: number;
  unitType: string;
  category: string;
  subcategory?: string;
}
export interface cartProduct {
  productId: {
    value: string;
  };
  qnt: number;
  name: string;
  upcCode?: string;
  price: number;
  description?: string;
  imageUrl?: string;
  stepSize?: number;
  unitType: string;
  category: string;
  subcategory?: string;
}
