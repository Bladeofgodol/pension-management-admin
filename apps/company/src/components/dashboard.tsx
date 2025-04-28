import AnalyticsIcon from '@mui/icons-material/Analytics';
import ElderlyIcon from '@mui/icons-material/Elderly';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import { Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import dashIcon from '../assets/imgs/icons/contribution.png';
import OrgLogo from '../assets/imgs/logos/company Logo.png';

export default function Dashboard() {
  const location = useLocation();

  const dashItem = [
    {
      name: 'Dashboard',
      icon: <HomeRoundedIcon fontSize="large" />,
      link: '/',
    },
    {
      name: 'Report',
      icon: <PieChartOutlineIcon fontSize="large" />,
      link: '/report',
    },
    {
      name: 'Employee',
      icon: <PeopleAltIcon fontSize="large" />,
      link: '/employeesPage',
    },
    {
      name: 'Projects',
      icon: <AnalyticsIcon fontSize="large" />,
      link: '/projects',
    },
    {
      name: 'Eligible retirees',
      icon: <ElderlyIcon fontSize="large" />,
      link: '/retirees',
    },
  ];

  return (
    <div className="h-full bg-white w-full items-center flex flex-col py-5">
      <div className="flex gap-5 p-5">
        <div className="flex items-center">
          <img src={dashIcon} width={60} alt="Dashboard icon" />
        </div>
        <div className="text-lg font-bold">Pension Contribution</div>
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
                <div className="px-5">{item.name}</div>
              </Button>
            </Link>
          );
        })}
      </div>

      <div className="flex flex-col justify-end items-center h-full mt-auto">
        <div className="gap-5 flex items-center font-bold text-lg">
          <div className="w-20 h-20">
            <img
              src={OrgLogo}
              alt="Org logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div>Org 1</div>
        </div>
      </div>
    </div>
  );
}
