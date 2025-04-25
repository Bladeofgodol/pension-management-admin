import { BarChart } from '@mui/x-charts/BarChart';

export default function BarCharts() {
  return (
    <BarChart
      xAxis={[
        {
          scaleType: 'band',
          data: ['2001', '2002', '2003', '2004', '2005', '2006', '2007'],
        },
      ]}
      series={[{ data: [4, 9, 5, 7, 3, 9, 2] }]}
      height={210}
      borderRadius={10}
    />
  );
}
