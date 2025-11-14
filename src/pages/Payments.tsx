import React from 'react';

const Payments: React.FC = () => {
  const transactions = [
    { id: '#TXN001', type: 'Payment Received', amount: '+$1,250.00', method: 'Credit Card', status: 'Success', date: '2024-01-15', time: '10:30 AM' },
    { id: '#TXN002', type: 'Refund Processed', amount: '-$85.00', method: 'PayPal', status: 'Success', date: '2024-01-14', time: '03:45 PM' },
    { id: '#TXN003', type: 'Payment Received', amount: '+$450.00', method: 'Bank Transfer', status: 'Pending', date: '2024-01-14', time: '11:20 AM' },
    { id: '#TXN004', type: 'Payment Received', amount: '+$920.00', method: 'Credit Card', status: 'Success', date: '2024-01-13', time: '02:15 PM' },
    { id: '#TXN005', type: 'Subscription', amount: '+$49.99', method: 'Credit Card', status: 'Success', date: '2024-01-13', time: '09:00 AM' },
    { id: '#TXN006', type: 'Payment Received', amount: '+$275.00', method: 'PayPal', status: 'Failed', date: '2024-01-12', time: '04:30 PM' },
  ];

  const stats = [
    { label: 'Total Revenue', value: '$45,231.00', change: '+12.5%', positive: true },
    { label: 'This Month', value: '$8,450.00', change: '+8.2%', positive: true },
    { label: 'Pending', value: '$1,240.00', change: '+3.1%', positive: true },
    { label: 'Refunded', value: '$320.00', change: '-2.3%', positive: false },
  ];

  const paymentMethods = [
    { type: 'Credit Card', last4: '4242', brand: 'Visa', expiry: '12/25', isDefault: true },
    { type: 'PayPal', email: 'john.doe@example.com', isDefault: false },
    { type: 'Bank Account', last4: '9876', bank: 'Chase', isDefault: false },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Payments</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Manage your payments and transactions</p>
        </div>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-colors duration-200">
          Add Payment Method
        </button>
      </div>

      {/* Revenue Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</p>
              <span
                className={`text-xs font-medium ${
                  stat.positive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                }`}
              >
                {stat.change}
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Payment Methods */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Payment Methods</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {paymentMethods.map((method, i) => (
            <div
              key={i}
              className={`relative p-6 rounded-xl border-2 transition-all duration-200 hover:shadow-md ${
                method.isDefault
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              {method.isDefault && (
                <span className="absolute top-3 right-3 px-2 py-1 text-xs font-semibold bg-blue-600 text-white rounded-full">
                  Default
                </span>
              )}
              <div className="mb-4">
                {method.type === 'Credit Card' ? (
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                  </div>
                ) : method.type === 'PayPal' ? (
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    PP
                  </div>
                ) : (
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{method.type}</h4>
              {method.type === 'Credit Card' && (
                <>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {method.brand} ending in {method.last4}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Expires {method.expiry}</p>
                </>
              )}
              {method.type === 'PayPal' && (
                <p className="text-sm text-gray-600 dark:text-gray-400">{method.email}</p>
              )}
              {method.type === 'Bank Account' && (
                <>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {method.bank} ****{method.last4}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Transactions</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700/50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Transaction
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Method
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Date & Time
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {transactions.map((txn, i) => (
                <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{txn.id}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{txn.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`text-sm font-bold ${
                        txn.amount.startsWith('+')
                          ? 'text-green-600 dark:text-green-400'
                          : 'text-red-600 dark:text-red-400'
                      }`}
                    >
                      {txn.amount}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">{txn.method}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        txn.status === 'Success'
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400'
                          : txn.status === 'Pending'
                          ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400'
                          : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400'
                      }`}
                    >
                      {txn.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">{txn.date}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{txn.time}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Payments;
