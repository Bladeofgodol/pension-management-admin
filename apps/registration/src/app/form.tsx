import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Form() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('field');

  const [regionStatus, setRegionStatus] = useState('open');
  const [branchRegion, setBranchRegion] = useState('1');

  function regionStatusChange(event: any) {
    setRegionStatus(event.target.value);
  }

  function branchRegionChange(event: any) {
    setBranchRegion(event.target.value);
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
    // Add other page configurations here
    // example:
    // user: [
    //   { name: "Username", field: <TextField... /> },
    //   { name: "Email", field: <TextField... /> },
    // ]
  };

  // Get the fields for the current page or default to empty array
  const currentFields = (page && fields[page as keyof typeof fields]) || [];

  return (
    <div className="justify-center items-center flex w-full h-full py-5">
      <div className="border p-10 border-[#D7DEDD]">
        <div className="flex justify-between items-center border-gray-300 text-2xl font-bold border-b">
          <div className="align-middle">new {page} Form</div>
          <Button
            sx={{
              color: 'Black',
              '&:hover': {
                color: 'red',
              },
            }}
          >
            <CloseRoundedIcon fontSize="large" />
          </Button>
        </div>
        {Array.isArray(currentFields) &&
          currentFields.map((item, index) => (
            <div className="py-5 flex items-center gap-8" key={index}>
              <div className="text-grey text-sm">{item.name}</div>
              {item.field}
            </div>
          ))}

        {!currentFields.length && (
          <div className="py-5">No fields found for form page: {page}</div>
        )}
        <div className="flex flex-col w-full gap-5 py- ">
          <Button
            sx={{ color: 'white', backgroundColor: '#034B64', borderRadius: 2 }}
          >
            Submit
          </Button>
          <Button
            sx={{ color: 'white', backgroundColor: '#FAA86D', borderRadius: 2 }}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
}
