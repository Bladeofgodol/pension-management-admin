import LocationPinIcon from '@mui/icons-material/LocationPin';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import TableViewIcon from '@mui/icons-material/TableView';
import Card from '../components/cards';
import Chart from '../components/chart';

export function Index() {
  const analytics = [
    {
      title: 'Employees',
      value: '52600',
      icon: <PersonIcon fontSize="large" />,
    },
    {
      title: 'Organizations',
      value: '1024',
      icon: <StorefrontIcon fontSize="large" />,
    },
    {
      title: 'Regions',
      value: '9',
      icon: <LocationPinIcon fontSize="large" />,
    },
    {
      title: 'Branches',
      value: '28',
      icon: <TableViewIcon fontSize="large" />,
    },
  ];

  const data = [
    { x: 1, y: 2 },
    { x: 2, y: 5 },
    { x: 3, y: 2 },
    { x: 5, y: 8 },
    { x: 8, y: 1 },
    { x: 10, y: 5 },
  ];
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex flex-col w-full p-2">
        <div className="font-bold p-2">Analytics</div>
        <div className="flex w-full gap-2">
          {analytics.map((item) => (
            <div key={item.title} className="w-full p-2">
              <Card title={item.title} value={item.value} icon={item.icon} />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full">
        <Chart data={data} />
      </div>
    </div>
  );
}

export default Index;
