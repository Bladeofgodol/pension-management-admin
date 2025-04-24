import { Button, FormControl, MenuItem, Select, styled } from '@mui/material';
import { LineChart } from '@mui/x-charts';
import { useState } from 'react';

interface DataPoint {
  x: number;
  y: number;
}

interface ChartProps {
  data: DataPoint[];
}

export default function Chart({ data }: ChartProps) {
  const [category, setCategory] = useState('employee');

  function handleCategory(event: any) {
    setCategory(event.target.value);
  }

  const CustomButton = styled(Button)(({ theme }) => ({
    color: '#C4CCD0',
    backgroundColor: 'white',
    '&:hover': {
      color: '#0561FC',
    },
    padding: '10px 24px',
    fontWeight: 550,
  }));
  return (
    <div className="w-full bg-white rounded-lg">
      <div className="flex items-center justify-between px-20 py-5">
        <div>
          <div className="font-bold text-sm px-10">Report</div>
        </div>
        <div>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={category}
              onChange={handleCategory}
              sx={{
                borderRadius: 40,
                height: 30,
                fontSize: 12,
                color: '#9AA0A4',
              }}
            >
              <MenuItem value={'employee'}>Employees</MenuItem>
              <MenuItem value={'org'}>Organizations</MenuItem>
              <MenuItem value={'region'}>Regions</MenuItem>
              <MenuItem value={'branch'}>Branches</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="w-full flex justify-around px-80">
          <CustomButton>
            <div>Day</div>
          </CustomButton>
          <CustomButton>
            <div>week</div>
          </CustomButton>
          <CustomButton>
            <div>Month</div>
          </CustomButton>
          <CustomButton>
            <div>Year</div>
          </CustomButton>
        </div>
      </div>
      <div className="p-5">
        <LineChart
          xAxis={[{ data: data.map((item: any) => item.x) }]}
          series={[
            {
              data: data.map((item: any) => item.y),
              area: true,
              color: '#0561FC2B',
            },
          ]}
          grid={{ vertical: true, horizontal: true }}
          height={300}
        />
      </div>
    </div>
  );
}
