import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function BudgetForm() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('field');

  const [budgetBranch, setBudgetBranch] = useState('1');
  const [budgetRegion, setBudgetRegion] = useState('1');

  function budgetBranchChange(event: any) {
    setBudgetBranch(event.target.value);
  }

  function budgetRegionChange(event: any) {
    setBudgetRegion(event.target.value);
  }

  const fields = {
    budget: [
      {
        name: 'Region',
        field: (
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
            fullWidth
          >
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={budgetRegion}
              onChange={budgetRegionChange}
            >
              <MenuItem value={'1'}>Amhara</MenuItem>
              <MenuItem value={'2'}>Oromia</MenuItem>
              <MenuItem value={'3'}>Afar</MenuItem>
            </Select>
          </FormControl>
        ),
      },
      {
        name: 'Branch',
        field: (
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
            fullWidth
          >
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={budgetBranch}
              onChange={budgetBranchChange}
            >
              <MenuItem value={'1'}>Branch 1</MenuItem>
              <MenuItem value={'2'}>Branch 2</MenuItem>
              <MenuItem value={'3'}>Branch 3</MenuItem>
            </Select>
          </FormControl>
        ),
      },
      { name: 'Budget', field: <TextField variant="standard" fullWidth /> },
    ],
  };

  // Get the fields for the current page or default to empty array
  const currentFields = (page && fields[page as keyof typeof fields]) || [];

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="justify-center flex w-full h-full py-10">
      <div className="border p-10 w-2/6 h-fit border-[#D7DEDD]">
        <div className="flex justify-between items-center border-gray-300 text-2xl font-bold border-b">
          <div className="align-middle">new {page} Form</div>
          <Button
            sx={{
              color: 'Black',
              '&:hover': {
                color: 'red',
              },
            }}
            onClick={goBack}
          >
            <CloseRoundedIcon fontSize="large" />
          </Button>
        </div>
        {Array.isArray(currentFields) &&
          currentFields.map((item, index) => (
            <div
              className="pt-10 flex items-center gap-8 justify-between"
              key={index}
            >
              <div className="text-grey text-sm">{item.name}</div>
              <div className="w-2/3">{item.field}</div>
            </div>
          ))}

        {!currentFields.length && (
          <div className="py-5">No fields found for form page: {page}</div>
        )}
        <div className="flex flex-col w-full gap-5 pt-10 ">
          <Button
            sx={{ color: 'white', backgroundColor: '#034B64', borderRadius: 2 }}
          >
            Submit
          </Button>
          <Button
            sx={{ color: 'white', backgroundColor: '#FAA86D', borderRadius: 2 }}
            onClick={goBack}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
}

const CalendarDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        value={selectedDate}
        onChange={(newValue) => setSelectedDate(newValue)}
        slotProps={{ textField: { fullWidth: true, variant: 'standard' } }}
        format="dd/MM/yyyy"
      />
    </LocalizationProvider>
  );
};
