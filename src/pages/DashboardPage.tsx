import React from "react";

export const DashboardPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        Dashboard Overview
      </h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* Card 1: Total Sales */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
          <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
            Total Sales
          </h2>
          <p className="text-3xl font-bold text-gray-800 dark:text-white">
            $12,450
          </p>
          <p className="text-sm text-green-600 mt-1">+10% from last month</p>
        </div>

        {/* Card 2: New Orders */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
          <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
            New Orders
          </h2>
          <p className="text-3xl font-bold text-gray-800 dark:text-white">158</p>
          <p className="text-sm text-green-600 mt-1">+5% from yesterday</p>
        </div>

        {/* Card 3: Customers */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
          <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
            Total Customers
          </h2>
          <p className="text-3xl font-bold text-gray-800 dark:text-white">
            2,301
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            New 25 this week
          </p>
        </div>

        {/* Card 4: Revenue */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
          <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
            Revenue
          </h2>
          <p className="text-3xl font-bold text-gray-800 dark:text-white">
            $45,123
          </p>
          <p className="text-sm text-green-600 mt-1">+12% from last quarter</p>
        </div>
      </div>

      {/* Latest Activities Section */}
      <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          Latest Activities
        </h2>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 flex justify-between items-center">
            <span className="text-gray-700 dark:text-gray-300">
              New user registered: John Doe
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              2 hours ago
            </span>
          </li>
          <li className="py-3 flex justify-between items-center">
            <span className="text-gray-700 dark:text-gray-300">
              Order #1001 placed by Jane Smith
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              5 hours ago
            </span>
          </li>
          <li className="py-3 flex justify-between items-center">
            <span className="text-gray-700 dark:text-gray-300">
              Product "Super Gadget" updated
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Yesterday
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};