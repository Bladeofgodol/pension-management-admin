import { Lock } from '@mui/icons-material';
import { Button, Checkbox } from '@mui/material';
import { useState } from 'react';

const employeesData = [
  { id: 1, name: 'employee 1', phone: '0911209351', salary: 5045 },
  { id: 2, name: 'employee 2', phone: '0911209352', salary: 7800 },
  { id: 5, name: 'employee 5', phone: '0911209353', salary: 13000 },
  { id: 6, name: 'employee 6', phone: '0911209354', salary: 9000 },
  { id: 8, name: 'employee 8', phone: '0911209356', salary: 20000 },
  { id: 7, name: 'employee 7', phone: '0911209355', salary: 9355 },
  { id: 3, name: 'employee 3', phone: '0911209358', salary: 12000 },
  { id: 4, name: 'employee 4', phone: '0911209359', salary: 19000 },
];

export default function EmployeeContribution() {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const handleSelect = (id: any) => {
    setSelectedIds((prev: any) =>
      prev.includes(id) ? prev.filter((sid: any) => sid !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedIds.length === employeesData.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(employeesData.map((emp) => emp.id));
    }
  };

  const selectedEmployees = employeesData.filter((emp) =>
    selectedIds.includes(emp.id)
  );
  const totalSalary = selectedEmployees.reduce(
    (sum, emp) => sum + emp.salary,
    0
  );
  const contribution = (totalSalary * 0.11).toFixed(2);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-8">
      <div className="flex flex-col items-center">
        <img src="/logo.png" alt="Logo" className="h-16 mb-6" />
      </div>
      <div className="flex w-full max-w-6xl gap-8">
        <div className="w-2/3">
          <h1 className="text-2xl font-semibold mb-4">Employees</h1>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search"
              className="border rounded w-full px-3 py-2"
            />
          </div>
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2">Name</th>
                <th className="p-2">Phone number</th>
                <th className="p-2">Salary</th>
                <th className="p-2">Select</th>
              </tr>
            </thead>
            <tbody>
              {employeesData.map((emp) => (
                <tr key={emp.id} className="border-t">
                  <td className="p-2">{emp.name}</td>
                  <td className="p-2">{emp.phone}</td>
                  <td className="p-2">{emp.salary.toLocaleString()}</td>
                  <td className="p-2">
                    <Checkbox
                      checked={selectedIds.includes(emp.id)}
                      onChange={() => handleSelect(emp.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end items-center mt-4">
            <span className="text-sm">Select all</span>
            <Checkbox
              checked={selectedIds.length === employeesData.length}
              onChange={handleSelectAll}
            />
          </div>
        </div>

        <div className="w-1/3 flex flex-col gap-6">
          <div className="bg-gray-100 p-6 rounded shadow">
            <h2 className="text-center text-gray-600">Expected amount</h2>
            <div className="text-3xl font-bold text-center my-4">
              {selectedEmployees.length > 0
                ? `${contribution} Birr`
                : '-------'}
            </div>
            <div className="text-center text-sm">
              {selectedEmployees.length > 0 ? (
                <>
                  You have selected {selectedEmployees.length} employees with a
                  total salary of {totalSalary.toLocaleString()} birr.
                  <br />
                  Your contribution is 11%: {contribution} Birr.
                </>
              ) : (
                'Select the employees you are contributing to'
              )}
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded shadow flex flex-col items-center text-center">
            <Lock fontSize="large" className="text-gray-600 mb-2" />
            <p className="text-sm">
              Your payment is 100% safe and secure. We use encryption to protect
              your data and only work with verified payment gateways.
            </p>
          </div>

          <Button
            variant="contained"
            color="secondary"
            fullWidth
            style={{ backgroundColor: '#4B0049', color: '#FDD159' }}
          >
            Continue with Commercial Bank of Ethiopia
          </Button>
          <Button
            variant="outlined"
            fullWidth
            style={{ borderColor: 'black', color: '#2F7FBF' }}
          >
            Continue with Telebirr
          </Button>
        </div>
      </div>
    </div>
  );
}
