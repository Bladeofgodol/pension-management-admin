import { BarChart } from '@mui/x-charts/BarChart';

export default function BarCharts() {
  return (
    <BarChart
      xAxis={[
        {
          scaleType: 'band',
          data: [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            10,
            11,
            12,
            13,
            14,
            15,
          ],
          categoryGapRatio: 0.6,
        },
      ]}
      series={[{ data: [4, 9, 5, 7, 3, 9, 2, 10, 12, 12, 20, 15, 25, 50, 55] }]}
      height={210}
      borderRadius={10}
    />
  );
}
