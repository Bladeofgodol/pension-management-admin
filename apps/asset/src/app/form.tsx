import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Form() {
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  const [searchParams] = useSearchParams();
  const page = searchParams.get('field');

  const [investmentType, setInvestmentType] = useState('bond');
  const [assetType, setAssetType] = useState('1');

  function investmentTypeChange(event: any) {
    setInvestmentType(event.target.value);
  }
  function assetTypeChange(event: any) {
    setAssetType(event.target.value);
  }

  const fields = {
    Investment: [
      { name: 'Name', field: <TextField variant="standard" fullWidth /> },
      {
        name: 'Description',
        field: (
          <textarea
            className="w-full p-3 border-b resize-none h-36 bg-inherit"
            placeholder="Investment Description. . ."
          />
        ),
      },
      {
        name: 'Type',
        field: (
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
            fullWidth
          >
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={investmentType}
              onChange={investmentTypeChange}
            >
              <MenuItem value={'bond'}>Bonds</MenuItem>
              <MenuItem value={'stock'}>Stocks</MenuItem>
            </Select>
          </FormControl>
        ),
      },
      { name: 'Amount', field: <TextField variant="standard" fullWidth /> },
      {
        name: 'Expected Rate',
        field: <TextField variant="standard" fullWidth />,
      },
      { name: 'Maturity Date', field: <CalendarDatePicker /> },
    ],
    Asset: [
      { name: 'Name', field: <TextField variant="standard" fullWidth /> },
      {
        name: 'Description',
        field: (
          <textarea
            className="w-full p-3 border-b resize-none h-36 bg-inherit"
            placeholder="Investment Description. . ."
          />
        ),
      },
      {
        name: 'Type',
        field: (
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
            fullWidth
          >
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={assetType}
              onChange={assetTypeChange}
            >
              <MenuItem value={'1'}>Real Estate</MenuItem>
              <MenuItem value={'2'}>Car</MenuItem>
            </Select>
          </FormControl>
        ),
      },
      { name: 'Location', field: <TextField variant="standard" fullWidth /> },
      {
        name: 'Value',
        field: <TextField variant="standard" fullWidth />,
      },
      { name: 'Date Acquired', field: <CalendarDatePicker /> },
    ],
    lease: [
      {
        name: 'Total Income',
        field: <TextField variant="standard" fullWidth />,
      },
      {
        name: 'Agreement',
        field: (
          <div className="w-full">
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
              sx={{
                backgroundColor: '#034B64',
                '&:hover': {
                  backgroundColor: '#023548',
                },
              }}
            >
              Upload Agreement
              <VisuallyHiddenInput
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    // Handle file upload logic here
                    console.log('Selected file:', file);
                  }
                }}
              />
            </Button>
            <Typography variant="caption" display="block" sx={{ mt: 1 }}>
              PDF or Word documents only
            </Typography>
          </div>
        ),
      },
      { name: 'Start Date', field: <CalendarDatePicker /> },
      { name: 'End Date', field: <CalendarDatePicker /> },
    ],

    // Add other page configurations here
    // example:
    // user: [
    //   { name: "Username", field: <TextField... /> },
    //   { name: "Email", field: <TextField... /> },
    // ]
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
          <div className="align-middle">Register {page}</div>
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
