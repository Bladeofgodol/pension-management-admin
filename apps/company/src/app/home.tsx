import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ShowChartIcon from '@mui/icons-material/ShowChart';

import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import HandCoin from '../assets/imgs/icons/handCoin.png';
import Card from '../components/cards';
import Chart from '../components/chart';

export function Index() {
  const analytics = [
    {
      title: 'Total Contribution',
      value: '952.6k',
      icon: <ShowChartIcon fontSize="large" />,
    },
    {
      title: 'Last Contribution',
      value: '75524',
      icon: <CalendarMonthIcon fontSize="large" />,
    },
    {
      title: 'Late Payment',
      value: '23602',
      icon: <img src={HandCoin} width={50} alt="Late payment" />,
      button: (
        <Link to="/paynow">
          <Button
            sx={{
              backgroundColor: 'red',
              color: 'white',
              fontSize: '10px',
              padding: '10px 20px',
            }}
          >
            Pay now
          </Button>
        </Link>
      ),
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
        <div className="font-bold p-2 flex w-full justify-between">
          <div>Analytics</div>
          <Button
            sx={{
              backgroundColor: '#0080001A',
              color: 'black',
              padding: '10px 30px',
              fontWeight: 'bold',
            }}
          >
            Make Contribution
          </Button>
        </div>
        <div className="flex w-3/4 gap-2">
          {analytics.map((item) => (
            <div key={item.title} className="w-full p-2">
              <Card
                title={item.title}
                value={item.value}
                icon={item.icon}
                button={item.button}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full">
        <Chart data={data} />
      </div>
      <div className="w-full flex p-10 gap-10">
        <div className="border-green-500 text-center border px-10 py-2 rounded-md shadow-md">
          The upcoming contribution is due in 25 days (4/28/2025) . We encourage
          you to complete your contributions in a timely manner.
        </div>
        <div className="border-red-500 text-center border px-10 py-2 rounded-md shadow-md">
          You have previous over due contributions you have not completed .
          There will a 3% penalty per month
        </div>
      </div>
    </div>
  );
}

export default Index;
