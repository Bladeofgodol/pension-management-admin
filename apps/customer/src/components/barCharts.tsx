import { BarChart, BarChartProps } from '@mui/x-charts/BarChart';
import React from 'react';

export default function BarCharts() {
  const [layout, setLayout] = React.useState<'horizontal' | 'vertical'>(
    'vertical'
  );
  return (
    <BarChart
      series={[
        {
          dataKey: 'high',
          label: 'Success',
          layout,
          stack: 'stack',
          color: '#0561FC',
        },
        {
          dataKey: 'low',
          label: 'Faliure',
          layout,
          stack: 'stack',
          color: 'red',
        },
      ]}
      {...chartSettingsV}
      borderRadius={10}
    />
  );
}

const dataset = [
  [3, -7, 'First'],
  [0, -5, 'Second'],
  [10, 0, 'Third'],
  [9, -6, 'Fourth'],
  [20, -6, 'Fifth'],
  [10, -16, 'Sixth'],
  [17, -26, 'Seventh'],
  [22, -2, 'Eighth'],
].map(([high, low, order]) => ({
  high,
  low,
  order,
}));

const chartSettingsH: Partial<BarChartProps> = {
  dataset,
  height: 300,

  yAxis: [{ scaleType: 'band', dataKey: 'order' }],
  slotProps: {
    legend: {
      direction: 'horizontal',
      position: { vertical: 'bottom', horizontal: 'center' },
    },
  },
};
const chartSettingsV: Partial<BarChartProps> = {
  ...chartSettingsH,
  xAxis: [{ scaleType: 'band', dataKey: 'order' }],
  yAxis: undefined,
};
