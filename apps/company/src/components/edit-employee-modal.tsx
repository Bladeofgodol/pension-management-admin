'use client';

import type React from 'react';

import Plus from '@mui/icons-material/AddCircle';
import Calendar from '@mui/icons-material/CalendarMonth';
import ChevronDown from '@mui/icons-material/KeyboardArrowDown';
import X from '@mui/icons-material/X';
import { useEffect, useState } from 'react';

interface EditEmployeeModalProps {
  employee: any;
  onClose: () => void;
}

export default function EditEmployeeModal({
  employee,
  onClose,
}: EditEmployeeModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    tin: '12345678',
    email: 'abebe@email.com',
    phone: '+251 911209352',
    dob: '8 - March - 2025',
    address: 'Addis Ababa, Wereda 12',
    gender: 'Male',
    status: 'in action',
    salary: '15,000',
    payda: '12345678',
    dependents: ['Alem Belay (Wife)'],
  });

  useEffect(() => {
    if (employee) {
      setFormData({
        name: employee.name || '',
        tin: '12345678',
        email: 'abebe@email.com',
        phone: '+251 911209352',
        dob: '8 - March - 2025',
        address: 'Addis Ababa, Wereda 12',
        gender: 'Male',
        status: employee.status || 'in action',
        salary: employee.salary || '',
        payda: '12345678',
        dependents: ['Alem Belay (Wife)'],
      });
    }
  }, [employee]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-medium">Edit Employee Form</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">TIN</label>
              <input
                type="text"
                name="tin"
                value={formData.tin}
                onChange={handleChange}
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Dependents
              </label>
              <div className="space-y-2">
                {formData.dependents.map((dependent, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded p-2 text-sm"
                  >
                    {dependent}
                  </div>
                ))}
                <button
                  type="button"
                  className="border border-gray-300 rounded px-3 py-2 flex items-center gap-2 text-sm w-full"
                >
                  <Plus />
                  Add Dependents
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">DOB</label>
              <div className="relative">
                <input
                  type="text"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="input-field pr-8"
                />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pr-2">
                  <Calendar className="text-gray-500" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Gender</label>
              <div className="relative">
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="select-field pr-8"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pr-2">
                  <ChevronDown className="text-gray-500" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Status</label>
              <div className="relative">
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="select-field pr-8"
                >
                  <option value="in action">in action</option>
                  <option value="retired">retired</option>
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pr-2">
                  <ChevronDown className="text-gray-500" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Salary</label>
              <input
                type="text"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Payda No.
              </label>
              <input
                type="text"
                name="payda"
                value={formData.payda}
                onChange={handleChange}
                className="input-field"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 pt-4">
            <button type="submit" className="btn-primary">
              Submit
            </button>
            <button type="button" onClick={onClose} className="btn-secondary">
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
