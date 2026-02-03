interface Product {
  id: string;
  title: string;
  slug: string;
  imagesUrl: ImageSourcePropType[];
  price: number;
  heroImage: ImageSourcePropType;
  category: Omit<Category, 'products'>;
  maxQuantity: number;
};

// AvijitJU2003
interface Category {
  name: string;
  imageUrl: string;
  slug: string;
  products: Product[];
};

export type OrderStatus = 'Pending' | 'Completed' | 'Shipped' | 'InTransit';

interface Order {
  id: string;
  slug: string;
  item: string;
  details: string;
  status: OrderStatus;
  date: string;
  items: Product[];
};