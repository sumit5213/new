import React from "react";

// --- Navigation Interface ---
export interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
  subItems?: NavItem[];
}

// Import SVG icons as React components
import GridIcon from "../icons/grid.svg?react";
import ListIcon from "../icons/list.svg?react";
import UserCircleIcon from "../icons/user-circle.svg?react";
import DollarLineIcon from "../icons/dollar-line.svg?react";

export const navigationItems: NavItem[] = [
  { 
    name: "Dashboard", 
    href: "#dashboard", 
    icon: React.createElement(GridIcon, { className: "w-5 h-5" }) 
  },
  { 
    name: "Orders", 
    href: "#orders", 
    icon: React.createElement(ListIcon, { className: "w-5 h-5" }) 
  },
  { 
    name: "Profile", 
    href: "#profile", 
    icon: React.createElement(UserCircleIcon, { className: "w-5 h-5" }) 
  },
  {
    name: "Payments",
    href: "#",
    icon: React.createElement(DollarLineIcon, { className: "w-5 h-5" }),
    subItems: [
      {
        name: "History",
        href: "#payments-history",
        icon: React.createElement("span", { className: "w-5 h-5" }),
      },
      {
        name: "Methods",
        href: "#payments-methods",
        icon: React.createElement("span", { className: "w-5 h-5" }),
      },
      {
        name: "Invoices",
        href: "#payments-invoices",
        icon: React.createElement("span", { className: "w-5 h-5" }),
      },
    ],
  },
];