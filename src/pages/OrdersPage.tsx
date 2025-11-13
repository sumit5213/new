import React, { useState } from "react";
import ordersData from "../data/orders.json";
import { ordersConfig } from "../data/orders.config";
import { Switcher } from "../components/Switchers/Switcher";
import MoredotIcon from "../icons/moredot.svg?react";

// Function to get Tailwind classes for status (Unchanged)
const getStatusClasses = (status: string): string => {
  const baseClasses = "px-2.5 py-0.5 rounded-full text-xs font-medium";
  switch (status) {
    case "Completed":
      return `${baseClasses} bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200`;
    case "Processing":
      return `${baseClasses} bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200`;
    case "Pending":
      return `${baseClasses} bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200`;
    case "Shipped":
      return `${baseClasses} bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200`;
    case "Cancelled":
      return `${baseClasses} bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200`;
    default:
      return baseClasses;
  }
};

export const OrdersPage: React.FC = () => {
  const [orders, setOrders] = useState(ordersData);
  const [visibleColumns, setVisibleColumns] = useState<string[]>(() =>
    ordersConfig.map((col) => col.key)
  );
  const [draggedRowId, setDraggedRowId] = useState<string | null>(null);
  const [dropTargetId, setDropTargetId] = useState<string | null>(null);

  const handleCheckboxChange = (key: string, isChecked: boolean) => {
    setVisibleColumns((prev) => {
      if (!isChecked) {
        return prev.filter((k) => k !== key);
      } else {
        if (!prev.includes(key)) {
          return [...prev, key];
        }
        return prev;
      }
    });
  };

  const visibleConfig = ordersConfig.filter((col) =>
    visibleColumns.includes(col.key)
  );

  const renderCell = (
    order: (typeof ordersData)[0],
    columnKey: string
  ) => {
    const value = order[columnKey as keyof typeof order];
    if (columnKey === "status") {
      return <span className={getStatusClasses(value as string)}>{value}</span>;
    }
    return value;
  };

  const handleDragStart = (
    e: React.DragEvent<HTMLTableRowElement>,
    id: string
  ) => {
    setDraggedRowId(id);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (
    e: React.DragEvent<HTMLTableRowElement>,
    id: string
  ) => {
    e.preventDefault();
    if (id !== dropTargetId) {
      setDropTargetId(id);
    }
  };

  const handleDragEnd = () => {
    if (!draggedRowId || !dropTargetId || draggedRowId === dropTargetId) {
      setDraggedRowId(null);
      setDropTargetId(null);
      return;
    }
    const draggedIndex = orders.findIndex(
      (order) => order.orderId === draggedRowId
    );
    const targetIndex = orders.findIndex(
      (order) => order.orderId === dropTargetId
    );
    const newOrders = [...orders];
    const [draggedItem] = newOrders.splice(draggedIndex, 1);
    newOrders.splice(targetIndex, 0, draggedItem);
    setOrders(newOrders);
    setDraggedRowId(null);
    setDropTargetId(null);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        Order Management
      </h1>

      {/* === Checkbox Control Area === */}
      <div className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Show/Hide Columns:
        </h3>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {ordersConfig.map((col) => (
            <div key={col.key} className="flex items-center space-x-2">
              <Switcher
                id={`switch-${col.key}`}
                checked={visibleColumns.includes(col.key)}
                onChange={(isChecked) =>
                  handleCheckboxChange(col.key, isChecked)
                }
              />
              <label
                htmlFor={`switch-${col.key}`}
                className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer"
              >
                {col.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* === Scrollable Table Container === */}
      <div className="w-full overflow-auto bg-white rounded-lg shadow border border-gray-200 dark:bg-gray-800 dark:border-gray-700 max-h-[600px]">
        <table className="min-w-full w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="sticky top-0 px-2 py-3 bg-gray-50 dark:bg-gray-700 z-10 w-12"></th>
              {visibleConfig.map((col) => (
                <th
                  key={col.key}
                  className="sticky top-0 px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider bg-gray-50 dark:bg-gray-700 z-10"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
            {orders.map((order) => {
              const isDragging = draggedRowId === order.orderId;
              const isDropTarget = dropTargetId === order.orderId;
              return (
                <tr
                  key={order.orderId}
                  draggable={true}
                  onDragStart={(e) => handleDragStart(e, order.orderId)}
                  onDragOver={(e) => handleDragOver(e, order.orderId)}
                  onDragEnd={handleDragEnd}
                  className={`
                    ${isDragging ? "opacity-30" : "opacity-100"}
                    ${isDropTarget ? "bg-blue-100 dark:bg-blue-900" : ""}
                    hover:bg-gray-50 dark:hover:bg-gray-700
                  `}
                >
                  <td className="px-3 py-4 whitespace-nowrap text-center cursor-move">
                    <div className="inline-block">
                      <MoredotIcon className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                    </div>
                  </td>
                  {visibleConfig.map((col) => (
                    <td
                      key={col.key}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300"
                    >
                      {renderCell(order, col.key)}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};