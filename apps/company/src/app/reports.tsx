'use client';

import { useState } from 'react';
import EmployeeDetailModal from '../components/employee-detail-modal';

export default function ReportPage() {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<any>(null);

  const employeesData = [
    {
      name: 'Abebe Yelma',
      contribution: '13,000',
      date: 'January 20, 2025',
      status: 'Completed',
    },
    {
      name: 'Abiy Assefa',
      contribution: '18,000',
      date: 'January 20, 2025',
      status: 'Incomplete',
    },
    {
      name: 'Abel Alem',
      contribution: '15,000',
      date: 'January 20, 2025',
      status: 'Retired',
    },
  ];

  const handleViewDetail = (employee: any) => {
    setSelectedEmployee(employee);
    setIsDetailModalOpen(true);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-medium mb-6">Report</h1>

      <div className="bg-white rounded-lg overflow-hidden shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Employee
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Contribution
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {employeesData.map((employee, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {employee.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {employee.contribution}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {employee.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`status-${employee.status.toLowerCase()}`}>
                    {employee.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    className="text-blue-600 hover:text-blue-900"
                    onClick={() => handleViewDetail(employee)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isDetailModalOpen && selectedEmployee && (
        <EmployeeDetailModal
          employee={selectedEmployee}
          onClose={() => setIsDetailModalOpen(false)}
        />
      )}
    </div>
  );
}
