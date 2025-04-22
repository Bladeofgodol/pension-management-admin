import EditNoteIcon from '@mui/icons-material/EditNote';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import TableViewIcon from '@mui/icons-material/TableView';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

// Update the image import path according to your project structure
import POESSA from '../assets/imgs/logos/POESSA.png';

export default function Dashboard() {
  const dashItem = [
    {
      name: 'Dashboard',
      icon: <HomeRoundedIcon fontSize="large" />,
      link: './',
    },
    {
      name: 'Regions',
      icon: <PlaceOutlinedIcon fontSize="large" />,
      link: './region',
    },
    {
      name: 'Branches',
      icon: <TableViewIcon fontSize="large" />,
      link: './branch',
    },
    {
      name: 'Organizations',
      icon: <StorefrontOutlinedIcon fontSize="large" />,
      link: './organizations',
    },
    {
      name: 'Employees',
      icon: <GroupOutlinedIcon fontSize="large" />,
      link: './employees',
    },
    {
      name: 'Project',
      icon: <InsertChartOutlinedIcon fontSize="large" />,
      link: './project',
    },
  ];

  return (
    <div className="h-full bg-white w-full items-center flex flex-col">
      <div className="flex gap-5 p-5">
        <div>
          <EditNoteIcon sx={{ fontSize: 60 }} />
        </div>
        <div className="text-2xl font-bold">Pension Registration</div>
      </div>
      <div className="font-semibold py-10 gap-1 flex flex-col w-full">
        {dashItem.map((items, index) => (
          <Link key={index} to={items.link}>
            <Button
              sx={{
                color: '#AEB9BE',
                '&:hover': { color: 'black', backgroundColor: '#EDF4FF' },
                padding: '15px 40px',
                width: '100%',
              }}
            >
              {items.icon}
              <div className="px-5">{items.name}</div>
            </Button>
          </Link>
        ))}
      </div>
      <div className="flex flex-col justify-end items-center h-full py-10">
        <div className="gap-5 flex items-center font-bold text-lg ">
          <div className="w-20 h-20">
            <img
              src={POESSA}
              alt="poessa"
              className="w-full h-full object-contain"
            />
          </div>
          <div>POESSA</div>
        </div>
      </div>
    </div>
  );
}
