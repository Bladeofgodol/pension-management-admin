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
import Box from '@mui/material/Box';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useState } from 'react';

interface Employee {
  id: number;
  name: string;
  owedAmount: number;
  missedDate: string;
}

export default function MissingTable({ employees }: { employees: Employee[] }) {
  const [selected, setSelected] = useState<number[]>([]);
  const [allSelected, setAllSelected] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const calculatePenalty = (owed: number, date: string) => {
    const missedDate = new Date(date);
    const now = new Date();
    const monthsPast =
      (now.getFullYear() - missedDate.getFullYear()) * 12 +
      (now.getMonth() - missedDate.getMonth());
    return owed * 0.03 * monthsPast;
  };

  const totalForSelected = selected.reduce((acc, id) => {
    const emp = employees.find((e) => e.id === id);
    if (!emp) return acc;
    return (
      acc + emp.owedAmount + calculatePenalty(emp.owedAmount, emp.missedDate)
    );
  }, 0);

  const totalForAll = employees.reduce(
    (acc, emp) =>
      acc + emp.owedAmount + calculatePenalty(emp.owedAmount, emp.missedDate),
    0
  );

  const handleSelect = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const filteredEmployees = employees.filter((employee) => {
    const missed = new Date(employee.missedDate);
    const startTime = startDate ? startDate.getTime() : -Infinity;
    const endTime = endDate ? endDate.getTime() : Infinity;
    return missed.getTime() >= startTime && missed.getTime() <= endTime;
  });

  // Update select all to use filtered employees
  const allFilteredSelected =
    filteredEmployees.length > 0 &&
    filteredEmployees.every((emp) => selected.includes(emp.id));

  const handleSelectAll = () => {
    if (allFilteredSelected) {
      setSelected((prev) =>
        prev.filter((id) => !filteredEmployees.some((e) => e.id === id))
      );
    } else {
      const newSelected = new Set([
        ...selected,
        ...filteredEmployees.map((e) => e.id),
      ]);
      setSelected(Array.from(newSelected));
    }
  };

  return (
    <div className="flex w-full h-full gap-6 p-6">
      {/* Left Section */}
      <div className="bg-white rounded-md flex-1 p-6 flex flex-col">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Box sx={{ mb: 2, display: 'flex', justifyContent:"space-between", flexWrap: 'wrap' }}>
            <div className='gap-2 flex'>
            <DatePicker
              label="Start Date"
              value={startDate}
              onChange={(newValue) => setStartDate(newValue)}
              slotProps={{ textField: { size: 'small' } }}
            />
            <DatePicker
              label="End Date"
              value={endDate}
              onChange={(newValue) => setEndDate(newValue)}
              slotProps={{ textField: { size: 'small' } }}
            />
            </div>
            <Button
              variant="outlined"
              onClick={() => {
                setStartDate(null);
                setEndDate(null);
              }}
              sx={{ textTransform: 'none', color:"red", borderColor:"red" }}
            >
              Clear
            </Button>
          </Box>
        </LocalizationProvider>
        <TableContainer className="flex-1 overflow-auto max-h-[60vh]">
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {['Name', 'Owed Amount', 'Missed Date', 'Select'].map(
                  (header) => (
                    <TableCell
                      key={header}
                      className="font-semibold bg-[#034B64] text-white"
                    >
                      <div className="text-lg font-light">{header}</div>
                    </TableCell>
                  )
                )}
              </TableRow>
            </TableHead>

            <TableBody>
              {filteredEmployees.map((employee) => (
                <TableRow key={employee.id} hover>
                  <TableCell>
                    <div className="text-[16px] font-medium text-gray-700">
                      {employee.name}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-[16px] font-medium">
                      ${employee.owedAmount.toLocaleString()}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-[16px] font-medium">
                      {new Date(employee.missedDate).toLocaleDateString()}
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
            {allFilteredSelected ? 'Deselect All' : 'Select All'}
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
            ${totalForSelected.toLocaleString()}
          </div>
        </div>

        <div className="bg-[#EEEEEE] rounded-md p-6 text-center">
          <PaidOutlinedIcon className="!text-[#034B64] !text-4xl mb-4" />
          <div className="font-semibold text-[#034B64]">
            Expected amount for all missed contributions comes up to be $
            {totalForAll.toLocaleString()} BIR
          </div>
          <div className="text-sm mt-2 text-gray-600">
            (Includes 3% monthly penalty calculation)
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
