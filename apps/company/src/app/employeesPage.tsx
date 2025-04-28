'use client';

import { AddCircle as PlusCircle } from '@mui/icons-material';
import { useState } from 'react';
import AddEmployeeModal from '../components/add-employee-modal';
import DeleteConfirmationModal from '../components/delete-confirmation-modal';
import EditEmployeeModal from '../components/edit-employee-modal';

export default function EmployeesPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<any>(null);

  const employeesData = [
    {
      name: 'Abebe Yelma',
      salary: '13,000',
      eligibilityDate: 'January 20, 2025',
      status: 'in action',
    },
    {
      name: 'Abiy Assefa',
      salary: '18,000',
      eligibilityDate: 'January 20, 2025',
      status: 'in action',
    },
    {
      name: 'Abel Alem',
      salary: '15,000',
      eligibilityDate: 'January 20, 2022',
      status: 'retired',
    },
  ];

  const getStatusClass = (status: string) => {
    switch (status.toLowerCase()) {
      case 'in action':
        return 'status-in-action';
      case 'retired':
        return 'status-retired';
      default:
        return 'status-in-action';
    }
  };

  const handleEdit = (employee: any) => {
    setSelectedEmployee(employee);
    setIsEditModalOpen(true);
  };

  const handleDelete = (employee: any) => {
    setSelectedEmployee(employee);
    setIsDeleteModalOpen(true);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-medium">Employees</h1>
        <button
          className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md flex items-center gap-2 text-sm"
          onClick={() => setIsAddModalOpen(true)}
        >
          <PlusCircle />
          Add new Employee
        </button>
      </div>

      <div className="bg-white rounded-lg overflow-hidden shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Salary
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Eligibility Date
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
                  {employee.salary}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {employee.eligibilityDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={getStatusClass(employee.status)}>
                    {employee.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                  <button className="btn-generate">Generate Report</button>
                  <button
                    className="btn-edit"
                    onClick={() => handleEdit(employee)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(employee)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isAddModalOpen && (
        <AddEmployeeModal onClose={() => setIsAddModalOpen(false)} />
      )}

      {isEditModalOpen && selectedEmployee && (
        <EditEmployeeModal
          employee={selectedEmployee}
          onClose={() => setIsEditModalOpen(false)}
        />
      )}

      {isDeleteModalOpen && selectedEmployee && (
        <DeleteConfirmationModal
          type="employee"
          name={selectedEmployee.name}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={() => {
            // Handle delete logic here
            setIsDeleteModalOpen(false);
          }}
        />
      )}
    </div>
  );
}
