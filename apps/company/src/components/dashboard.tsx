import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import TableViewIcon from '@mui/icons-material/TableView';
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
      link: '/registration',
    },
    {
      name: 'Regions',
      icon: <PlaceOutlinedIcon fontSize="large" />,
      link: '/registration/region',
    },
    {
      name: 'Branches',
      icon: <TableViewIcon fontSize="large" />,
      link: '/registration/branch',
    },
    {
      name: 'Organizations',
      icon: <StorefrontOutlinedIcon fontSize="large" />,
      link: '/registration/organization',
    },
    {
      name: 'Employees',
      icon: <GroupOutlinedIcon fontSize="large" />,
      link: '/registration/employee',
    },
    {
      name: 'Project',
      icon: <InsertChartOutlinedIcon fontSize="large" />,
      link: '/registration/project',
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
