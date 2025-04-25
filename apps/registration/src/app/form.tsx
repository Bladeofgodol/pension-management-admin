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

export default function Form() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('field');

  const [regionStatus, setRegionStatus] = useState('open');
  const [branchRegion, setBranchRegion] = useState('1');
  const [employeeGender, setEmployeeGender] = useState('f');
  const [employeeStatus, setEmployeeStatus] = useState('in_action');
  const [projectStatus, setProjectStatus] = useState('live');

  function regionStatusChange(event: any) {
    setRegionStatus(event.target.value);
  }

  function branchRegionChange(event: any) {
    setBranchRegion(event.target.value);
  }
  function employeeGenderChange(event: any) {
    setEmployeeGender(event.target.value);
  }
  function employeeStatusChange(event: any) {
    setEmployeeStatus(event.target.value);
  }
  function projectStatusChange(event: any) {
    setProjectStatus(event.target.value);
  }

  const fields = {
    region: [
      { name: 'Name', field: <TextField variant="standard" fullWidth /> },
      { name: 'Code', field: <TextField variant="standard" fullWidth /> },
      {
        name: 'Capital City',
        field: <TextField variant="standard" fullWidth />,
      },
      {
        name: 'Status',
        field: (
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
            fullWidth
          >
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={regionStatus}
              onChange={regionStatusChange}
            >
              <MenuItem value={'open'}>Operational</MenuItem>
              <MenuItem value={'close'}>Non Operational</MenuItem>
            </Select>
          </FormControl>
        ),
      },
    ],
    branch: [
      { name: 'Name', field: <TextField variant="standard" fullWidth /> },
      { name: 'Code', field: <TextField variant="standard" fullWidth /> },
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
              value={branchRegion}
              onChange={branchRegionChange}
            >
              <MenuItem value={'1'}>Amhara</MenuItem>
              <MenuItem value={'2'}>Oromia</MenuItem>
              <MenuItem value={'3'}>Afar</MenuItem>
            </Select>
          </FormControl>
        ),
      },
      { name: 'City', field: <TextField variant="standard" fullWidth /> },
      { name: 'Woreda', field: <TextField variant="standard" fullWidth /> },

      {
        name: 'Status',
        field: (
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
            fullWidth
          >
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={regionStatus}
              onChange={regionStatusChange}
            >
              <MenuItem value={'open'}>Operational</MenuItem>
              <MenuItem value={'close'}>Non Operational</MenuItem>
            </Select>
          </FormControl>
        ),
      },
    ],
    organization: [
      { name: 'Name', field: <TextField variant="standard" fullWidth /> },
      { name: 'Tin', field: <TextField variant="standard" fullWidth /> },
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
              value={branchRegion}
              onChange={branchRegionChange}
            >
              <MenuItem value={'1'}>Branch 1</MenuItem>
              <MenuItem value={'2'}>Branch 2</MenuItem>
              <MenuItem value={'3'}>Branch 3</MenuItem>
            </Select>
          </FormControl>
        ),
      },
      { name: 'Address', field: <TextField variant="standard" fullWidth /> },
      { name: 'Email', field: <TextField variant="standard" fullWidth /> },
      {
        name: 'Phone',
        field: (
          <div className="flex gap-1">
            <TextField
              variant="standard"
              sx={{ width: '20%' }}
              value={'+251'}
            />
            <TextField variant="standard" fullWidth />
          </div>
        ),
      },

      {
        name: 'Status',
        field: (
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
            fullWidth
          >
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={regionStatus}
              onChange={regionStatusChange}
            >
              <MenuItem value={'open'}>Operational</MenuItem>
              <MenuItem value={'close'}>Non Operational</MenuItem>
            </Select>
          </FormControl>
        ),
      },
    ],
    employee: [
      { name: 'Name', field: <TextField variant="standard" fullWidth /> },
      { name: 'Tin', field: <TextField variant="standard" fullWidth /> },
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
              value={branchRegion}
              onChange={branchRegionChange}
            >
              <MenuItem value={'1'}>Branch 1</MenuItem>
              <MenuItem value={'2'}>Branch 2</MenuItem>
              <MenuItem value={'3'}>Branch 3</MenuItem>
            </Select>
          </FormControl>
        ),
      },
      { name: 'Email', field: <TextField variant="standard" fullWidth /> },
      {
        name: 'Phone',
        field: (
          <div className="flex gap-1">
            <TextField
              variant="standard"
              sx={{ width: '20%' }}
              value={'+251'}
            />
            <TextField variant="standard" fullWidth />
          </div>
        ),
      },
      { name: 'Date of Birth', field: <CalendarDatePicker /> },
      {
        name: 'Bank Account',
        field: <TextField variant="standard" fullWidth />,
      },
      { name: 'Address', field: <TextField variant="standard" fullWidth /> },

      {
        name: 'Gender',
        field: (
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
            fullWidth
          >
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={employeeGender}
              onChange={employeeGenderChange}
            >
              <MenuItem value={'f'}>Female</MenuItem>
              <MenuItem value={'m'}>Male</MenuItem>
            </Select>
          </FormControl>
        ),
      },
      {
        name: 'Status',
        field: (
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
            fullWidth
          >
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={employeeStatus}
              onChange={employeeStatusChange}
            >
              <MenuItem value={'in_action'}>In Action</MenuItem>
              <MenuItem value={'retiree'}>Retiree</MenuItem>
            </Select>
          </FormControl>
        ),
      },
      {
        name: 'Fayda No',
        field: <TextField variant="standard" fullWidth />,
      },
    ],
    project: [
      { name: 'Name', field: <TextField variant="standard" fullWidth /> },
      {
        name: 'Description',
        field: (
          <textarea
            className="w-full p-3 border-b resize-none h-36 bg-inherit"
            placeholder="Project Description. . ."
          />
        ),
      },
      {
        name: 'Organization',
        field: (
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
            fullWidth
          >
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={branchRegion}
              onChange={branchRegionChange}
            >
              <MenuItem value={'1'}>Org 1</MenuItem>
              <MenuItem value={'2'}>Org 2</MenuItem>
              <MenuItem value={'3'}>Org 3</MenuItem>
            </Select>
          </FormControl>
        ),
      },
      { name: 'Start Date', field: <CalendarDatePicker /> },
      { name: 'End Date', field: <CalendarDatePicker /> },

      {
        name: 'Status',
        field: (
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
            fullWidth
          >
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={projectStatus}
              onChange={projectStatusChange}
            >
              <MenuItem value={'live'}>Live</MenuItem>
              <MenuItem value={'complete'}>Complete</MenuItem>
              <MenuItem value={'canceled'}>Canceled</MenuItem>
            </Select>
          </FormControl>
        ),
      },
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
