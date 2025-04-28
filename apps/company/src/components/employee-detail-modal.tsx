'use client';

import { X } from '@mui/icons-material';

interface EmployeeDetailModalProps {
  employee: any;
  onClose: () => void;
}

export default function EmployeeDetailModal({
  employee,
  onClose,
}: EmployeeDetailModalProps) {
  const contributionData = [
    {
      contribution: '2000',
      date: '8 - March - 2024',
      transactionId: 'TXN-202403061001',
    },
    {
      contribution: '2000',
      date: '8 - April - 2024',
      transactionId: 'TXN-202403061001',
    },
    {
      contribution: '2000',
      date: '8 - May - 2024',
      transactionId: 'TXN-202403061001',
    },
    {
      contribution: '2000',
      date: '8 - June - 2024',
      transactionId: 'TXN-202403061001',
    },
    {
      contribution: '2000',
      date: '8 - March - 2024',
      transactionId: 'TXN-202403061001',
    },
    {
      contribution: '2000',
      date: '8 - March - 2024',
      transactionId: 'TXN-202403061001',
    },
    {
      contribution: '2000',
      date: '8 - March - 2024',
      transactionId: 'TXN-202403061001',
    },
    {
      contribution: '2000',
      date: '8 - March - 2024',
      transactionId: 'TXN-202403061001',
    },
    {
      contribution: '2000',
      date: '8 - March - 2024',
      transactionId: 'TXN-202403061001',
    },
    {
      contribution: '2000',
      date: '8 - March - 2024',
      transactionId: 'TXN-202403061001',
    },
    {
      contribution: '2000',
      date: '8 - March - 2024',
      transactionId: 'TXN-202403061001',
    },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="bg-[#005470] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200"
          >
            <X />
          </button>

          <h2 className="text-2xl font-bold mb-4">Abebe Yelema Assefa</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="mb-1">TIN : 12345678</p>
              <p>Phone : +251911209352</p>
            </div>
            <div>
              <p className="mb-1">Organization: Org 1</p>
              <p>Email : abebe@email.com</p>
            </div>
            <div>
              <p className="mb-1">DOB: 8 - March - 2000</p>
              <p>Gender: Male</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-medium text-gray-800">
              Contribution breakdown
            </h3>
            <button className="p-1 border border-gray-300 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 3h6v6"></path>
                <path d="M10 14 21 3"></path>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-medium text-gray-700 mb-4">
                Pension contribution
              </h4>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 h-64">
                {/* Chart would go here */}
                <div className="h-full flex items-center justify-center">
                  <div className="w-full h-48 bg-gray-200 rounded flex items-end justify-between px-4">
                    {[
                      3000, 3000, 2500, 8500, 5500, 5500, 2500, 2500, 7000,
                      4000,
                    ].map((value, index) => (
                      <div
                        key={index}
                        className="w-6 bg-blue-500 rounded-t"
                        style={{ height: `${value / 100}px` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium text-gray-700 mb-4">
                Contribution Per company
              </h4>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 h-64">
                {/* Chart would go here */}
                <div className="h-full flex items-center justify-center">
                  <div className="w-full h-48 bg-gray-200 rounded flex items-end justify-around px-4">
                    {[3500, 8500, 2500, 4500].map((value, index) => (
                      <div
                        key={index}
                        className="w-12 bg-blue-500 rounded-t flex items-center justify-center"
                        style={{ height: `${value / 100}px` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-blue-200">
              <thead className="bg-blue-100">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider"
                  >
                    Contribution
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider"
                  >
                    Transaction Id
                  </th>
                </tr>
              </thead>
              <tbody className="bg-blue-50 divide-y divide-blue-200">
                {contributionData.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {item.contribution}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {item.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {item.transactionId}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
