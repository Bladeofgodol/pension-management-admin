import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import { Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import CashContrib from '../assets/imgs/icons/cash contribution.png';
import dashIcon from '../assets/imgs/icons/contribution.png';
import POESSA from '../assets/imgs/logos/POESSA.png';

export default function Dashboard() {
  const location = useLocation();

  const dashItem = [
    {
      name: 'Dashboard',
      icon: <HomeRoundedIcon fontSize="large" />,
      link: '/contribution',
    },
    {
      name: 'Contribution',
      icon: <PaidOutlinedIcon fontSize="large" />,
      link: '/contribution/contribution',
    },
    {
      name: 'Outstanding Contribution',
      icon: <img src={CashContrib} alt="cash contrib" width={40} />,
      link: '/contribution/outstanding',
    },
  ];

  return (
    <div className="h-full bg-white w-full items-center flex flex-col py-10">
      <div className="flex gap-5 px-10 w-full">
        <div className="flex items-center">
          <img src={dashIcon} width={60} alt="Dashboard icon" />
        </div>
        <span className="text-lg font-bold align-middle">
          Pension
          <br />
          Contribution
        </span>
      </div>

      <div className="font-semibold py-10 gap-1 flex flex-col w-full">
        {dashItem.map((item, index) => {
          const isActive = location.pathname === item.link;

          return (
            <Link key={index} to={item.link}>
              <Button
                sx={{
                  color: isActive ? 'black' : '#AEB9BE',
                  backgroundColor: isActive ? '#EDF4FF' : 'inherit',
                  '&:hover': {
                    color: 'black',
                    backgroundColor: '#EDF4FF',
                  },
                  padding: '15px 40px',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  textTransform: 'none',
                  borderRadius: 0,
                }}
              >
                {item.icon}
                <div className="px-5 w-fit text-left">{item.name}</div>
              </Button>
            </Link>
          );
        })}
      </div>

      <div className="flex flex-col justify-end items-center h-full mt-auto">
        <div className="gap-5 flex items-center font-bold text-lg">
          <div className="w-20 h-20">
            <img
              src={POESSA}
              alt="POESSA logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div>POESSA</div>
        </div>
      </div>
    </div>
  );
}
