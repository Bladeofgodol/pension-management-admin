import {
  AccessTime,
  Forum,
  HourglassBottom,
  Receipt,
} from '@mui/icons-material';
import BarCharts from '../components/barCharts';
import Cards from '../components/cards';

export function Index() {
  const analytics = [
    {
      title: 'Active Chats',
      value: '67',
      icon: <Forum fontSize="large" />,
    },
    {
      title: 'Unresolved Complaints',
      value: '81',
      icon: <Receipt fontSize="large" />,
    },
    {
      title: 'pending request',
      value: '835,432',
      icon: <HourglassBottom fontSize="large" />,
    },
    {
      title: 'Average Resolution time',
      value: '2 days',
      icon: <AccessTime fontSize="large" />,
    },
  ];
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex flex-col w-full p-2">
        <div className="font-bold p-2">Analytics</div>
        <div className="flex w-full gap-2">
          {analytics.map((item) => (
            <div key={item.title} className="w-full p-2">
              <Cards title={item.title} value={item.value} icon={item.icon} />
            </div>
          ))}
        </div>
        <div className="w-full bg-white rounded-md flex flex-col">
          <div className="w-full p-10 text-3xl font-semibold">
            Success and Failure
          </div>
          <BarCharts />
        </div>
      </div>
    </div>
  );
}

export default Index;
