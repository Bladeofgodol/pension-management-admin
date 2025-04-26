import { Button, styled } from '@mui/material';
import { LineChart } from '@mui/x-charts';
import { useState } from 'react';

interface DataPoint {
  x: number;
  y: number;
}

interface ChartProps {
  data: DataPoint[];
  name: string;
  color: string;
}

export default function Chart({ data, name, color }: ChartProps) {
  const [category, setCategory] = useState('employee');

  function handleCategory(event: any) {
    setCategory(event.target.value);
  }

  const CustomButton = styled(Button)(({ theme }) => ({
    color: '#C4CCD0',
    backgroundColor: 'white',
    '&:hover': {
      color: color,
    },
    padding: '10px 24px',
    fontWeight: 550,
  }));
  return (
    <div className="w-full bg-white rounded-lg">
      <div className="flex items-center justify-between px-20 py-5">
        <div>
          <div className="font-bold text-sm px-10">{name}</div>
        </div>
      </div>
      <div className="px-5">
        <LineChart
          xAxis={[{ data: data.map((item: any) => item.x) }]}
          series={[
            {
              data: data.map((item: any) => item.y),
              area: true,
              color: color,
            },
          ]}
          grid={{ vertical: true, horizontal: true }}
          height={270}
        />
      </div>
    </div>
  );
}
