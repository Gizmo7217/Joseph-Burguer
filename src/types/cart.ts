import { MenuItem } from '../data/menuData';

export interface CartItemAddition {
  id: string;
  name: string;
  price: number;
}

export interface CartItem {
  cartItemId: string;
  item: MenuItem;
  quantity: number;
  selectedSauces: string[];
  selectedAdditions: CartItemAddition[];
  specialInstructions: string;
  unitPrice: number;
  totalPrice: number;
}

export interface OrderCustomerInfo {
  fullName: string;
  phone: string;
  deliveryType: 'domicilio' | 'recoger';
  address: string;
  neighborhood: string;
  paymentMethod: 'Nequi' | 'Daviplata' | 'Efectivo' | 'Datáfono';
  cashAmountNeeded?: string;
  notes?: string;
}
