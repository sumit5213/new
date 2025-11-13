export interface OrderColumnConfig {
  key: string; 
  label: string; 
}
export const ordersConfig: OrderColumnConfig[] = [
  { key: "orderId", label: "Order ID" },
  { key: "customerName", label: "Customer Name" },
  { key: "orderDate", label: "Order Date" },
  { key: "status", label: "Status" },
  { key: "budget", label: "Budget" },
  { key: "bookingAmount", label: "Booking Amount" },
  { key: "paymentMethod", label: "Payment Method" },
  
  
  // { key: "shippingAddress", label: "Shipping Address" },
];