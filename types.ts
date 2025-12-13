export type View = 'orders' | 'customers' | 'analytics';

export interface Order {
  id: string;
  customerName: string;
  date: string;
  amount: number;
  status: 'pending' | 'completed' | 'invoiced';
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  address: string;
  ordersCount: number;
}

export interface Metric {
  label: string;
  value: string | number;
  change?: number;
  icon?: any;
  color?: string;
}
