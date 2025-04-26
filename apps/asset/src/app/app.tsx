import cashContribution from '../assets/imgs/icons/cash contribution.png';
import door from '../assets/imgs/icons/door.png';
import expected from '../assets/imgs/icons/expected.png';
import payout from '../assets/imgs/icons/payout.png';
import Card from '../components/cards';
import Chart from '../components/chart';
import BarCharts from '../components/barCharts';

export function Index() {
  const analytics = [
    {
      title: 'Assets',
      value: '2.6 million',
      icon: <img src={cashContribution} alt="payout" width={40} />,
    },
    {
      title: 'Fixed Assets',
      value: '1.2 million',
      icon: <img src={door} alt="payout" width={40} />,
    },
    {
      title: 'Total Liability',
      value: '835,432',
      icon: <img src={expected} alt="expected" width={40} />,
    },
    {
      title: 'Total ROI This Year',
      value: '4.5 million',
      icon: <img src={payout} alt="payout" width={40} />,
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
      <div className="w-full bg-white rounded-md flex flex-col">
        <div className='w-full p-10 text-3xl font-semibold'>Rental Income</div>
        <BarCharts />
      </div>
    </div>
  );
}

export default Index;
