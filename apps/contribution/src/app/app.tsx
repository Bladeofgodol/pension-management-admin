import CalendarCoin from '../assets/imgs/icons/calander coin.png';
import CashContrib from '../assets/imgs/icons/cash contribution.png';
import Expected from '../assets/imgs/icons/expected.png';
import Payout from '../assets/imgs/icons/payout.png';
import Card from '../components/cards';
import Chart from '../components/chart';
export function Index() {
  const analytics = [
    {
      title: 'Unfulfilled Contribution',
      value: '4.5 million',
      icon: <img src={CashContrib} width={40} alt="cash contrib" />,
    },
    {
      title: 'Expected Yearly payout',
      value: '64.5 million',
      icon: <img src={Payout} width={40} alt="cash contrib" />,
    },
    {
      title: 'Expected Yearly Contribution',
      value: '78.9 million',
      icon: <img src={Expected} width={40} alt="cash contrib" />,
    },
    {
      title: 'Missed Contribution',
      value: '2.8 million',
      icon: <img src={CalendarCoin} width={40} alt="cash contrib" />,
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
