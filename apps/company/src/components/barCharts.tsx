import { BarChart } from '@mui/x-charts/BarChart';

export default function BarCharts() {
  return (
    <BarChart
      xAxis={[
        {
          scaleType: 'band',
          data: ['org 1', 'org 2', 'org 3'],
        },
      ]}
      series={[{ data: [4, 9, 5, 7, 3, 9, 2] }]}
      height={300}
      borderRadius={10}
      sx={{ padding: 0, alignItems: 'end' }}
    />
  );
}
