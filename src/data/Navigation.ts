import React from "react";
// Import all icons from the new central file
import {
  DashboardIcon,
  OrdersIcon,
  ProfileIcon,
  PaymentsIcon,
} from "../components/common/Icons";

// --- Navigation Interface ---
export interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType; // Icon field is unchanged
  subItems?: NavItem[];
}


export const navigationItems: NavItem[] = [
  { name: "Dashboard", href: "#dashboard", icon: DashboardIcon },
  { name: "Orders", href: "#orders", icon: <OrdersIcon /> },
  { name: "Profile", href: "#profile", icon: <ProfileIcon /> },
  {
    name: "Payments",
    href: "#",
    icon: <PaymentsIcon />,
    subItems: [
      {
        name: "History",
        href: "#payments-history",
        icon: <span className="w-5 h-5"></span>,
      },
      {
        name: "Methods",
        href: "#payments-methods",
        icon: <span className="w-5 h-5"></span>,
      },
      {
        name: "Invoices",
        href: "#payments-invoices",
        icon: <span className="w-5 h-5"></span>,
      },
    ],
  },
];