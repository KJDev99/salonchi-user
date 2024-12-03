export interface IProduct {
  category: number;
  count: number;
  created_at: string;
  desc: string;
  id: number;
  is_active: boolean;
  is_sale: boolean;
  photo: IMedia[] | string | undefined;
  name: string;
  name_uz: string;
  name_ru: string;
  name_en: string;
  price: number;
  sale_price: number;
  sale_time: string;
  updated_at: string;
  productQuantity: number;
  slug: string;
  colors?: any;
  color?: any;
  box?: any;
  flow?: string;
  is_cheap?: boolean;
  attributes?: [];
  amount?: number;
  old_price?: number;
}

interface IMedia {
  file?: string;
}
