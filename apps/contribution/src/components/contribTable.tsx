import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import {
  Button,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useState } from 'react';

const employees = [
  { id: 1, name: 'John Doe', phone: '(+251) 98-765-4321', salary: 5000 },
  { id: 2, name: 'Jane Smith', phone: '(+251) 91-234-5678', salary: 6500 },
  { id: 3, name: 'Bob Johnson', phone: '(+251) 92-345-6789', salary: 7200 },
  // Add more sample data to test scrolling
  ...Array.from({ length: 15 }, (_, i) => ({
    id: i + 4,
    name: `Employee ${i + 4}`,
    phone: `(+251) 90-000-000${i}`,
    salary: 4000 + i * 100,
  })),
];

export default function ContribTable() {
  const [selected, setSelected] = useState<number[]>([]);
  const [allSelected, setAllSelected] = useState(false);

  const handleSelect = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (allSelected) {
      setSelected([]);
    } else {
      setSelected(employees.map((e: any) => e.id));
    }
    setAllSelected(!allSelected);
  };

  return (
    <div className="flex w-full h-full gap-6 p-6">
      {/* Left Section */}
      <div className="bg-white rounded-md flex-1 p-6 flex flex-col">
        <TableContainer className="flex-1 overflow-auto max-h-[60vh]">
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell className="font-semibold bg-[#034B64] text-white">
                  <div className="text-lg font-light">Name</div>
                </TableCell>
                <TableCell className="font-semibold bg-[#034B64] text-white text-2xl">
                  <div className="text-lg font-light">Phone</div>
                </TableCell>
                <TableCell className="font-semibold bg-[#034B64] text-white">
                  <div className="text-lg font-light">Salary</div>
                </TableCell>
                <TableCell className="font-semibold bg-[#034B64] text-white">
                  <div className="text-lg font-light">Select</div>
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {employees.map((employee: any) => (
                <TableRow key={employee.id} hover>
                  <TableCell>
                    <div className="text-[16px] font-medium text-gray-700">
                      {employee.name}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-[16px] font-medium">
                      {employee.phone}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-[16px] font-medium">
                      ${employee.salary.toLocaleString()}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Checkbox
                      checked={selected.includes(employee.id)}
                      onChange={() => handleSelect(employee.id)}
                      color="primary"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <div className="mt-4 flex justify-end">
          <Button
            variant="contained"
            onClick={handleSelectAll}
            sx={{
              bgcolor: '#034B64',
              '&:hover': { bgcolor: '#023449' },
              textTransform: 'none',
              px: 3,
              py: 1,
            }}
          >
            {allSelected ? 'Deselect All' : 'Select All'}
          </Button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col w-[400px] gap-6">
        <div className="bg-[#EEEEEE] rounded-md p-6 text-center">
          <div className="font-semibold mb-4 text-[#034B64]">
            Expected amount for selected employees
          </div>
          <div className="text-4xl font-semibold text-[#034B64]">
            ${selected.length * 1000} {/* Replace with actual calculation */}
          </div>
        </div>

        <div className="bg-[#EEEEEE] rounded-md p-6 text-center">
          <PaidOutlinedIcon className="!text-[#034B64] !text-4xl mb-4" />
          <div className="font-semibold mb-4 text-[#034B64]">
            Expected amount for all employees:
          </div>
          <div className="text-4xl font-semibold text-[#034B64]">
            ${employees.length * 1000} {/* Replace with actual calculation */}
          </div>
        </div>

        <Button
          fullWidth
          variant="contained"
          endIcon={<ArrowForwardIosIcon />}
          sx={{
            bgcolor: '#034B64',
            '&:hover': { bgcolor: '#023449' },
            py: 2.5,
            borderRadius: 2,
            textTransform: 'none',
            fontSize: '1rem',
          }}
        >
          Settle Pension
        </Button>
      </div>
    </div>
  );
}
