'use client';

import { Person } from '@mui/icons-material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import {
  Button,
  Dialog,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Expected from '../assets/imgs/icons/revenue.png';
import BarCharts from '../components/barCharts';
import Cards from '../components/cards';
import Chart from '../components/chart';

import Table from '../components/table';

export default function Home() {
  const [retirementModalOpen, setRetirementModalOpen] = useState(false);
  const [retirementData, setRetirementData] = useState({
    type: 'Voluntary',
    bankAccount: '',
    description: '',
  });

  const navigate = useNavigate();

  function openContributions() {
    navigate('/contributions');
  }

  const lineChartData = [
    { x: 1, y: 1500 },
    { x: 2, y: 2100 },
    { x: 3, y: 1800 },
    { x: 4, y: 2400 },
    { x: 5, y: 1700 },
    { x: 6, y: 1900 },
    { x: 7, y: 2200 },
  ];

  const barChartData = [
    { org: 'Org 1', value: 1500 },
    { org: 'Org 2', value: 1200 },
    { org: 'Org 3', value: 1800 },
    { org: 'Org 4', value: 400 },
  ];

  const contributionsData = [
    {
      id: 1,
      organization: 'Org 1',
      date: 'March 6, 2025',
      expectedContribution: '1500 birr',
      contributionAmount: '1500 birr',
      status: 'Completed',
    },
    {
      id: 2,
      organization: 'Org 1',
      date: 'April 6, 2025',
      expectedContribution: '1500 birr',
      contributionAmount: '1000 birr',
      status: 'Incomplete',
    },
    {
      id: 3,
      organization: 'Org 1',
      date: 'May 10, 2025',
      expectedContribution: '1500 birr',
      contributionAmount: '1500 birr',
      status: 'Delayed',
    },
    {
      id: 4,
      organization: 'Org 1',
      date: 'June 6, 2025',
      expectedContribution: '1500 birr',
      contributionAmount: '1500 birr',
      status: 'Completed',
    },
  ];

  const contributionColumn: any = [
    { header: 'Organization', key: 'organization' },
    { header: 'Date', key: 'date' },
    { header: 'Expected Contribution', key: 'expectedContribution' },
    { header: 'Contribution Amount', key: 'contributionAmount' },
    {
      header: 'Status',
      key: 'status',
      render: (value: any) => (
        <span
          className={`px-2 py-1 text-xs rounded-full ${
            value === 'Completed'
              ? 'bg-blue-100 text-blue-800'
              : value === 'Incomplete'
              ? 'bg-red-100 text-red-800'
              : value === 'Delayed'
              ? 'bg-orange-100 text-orange-800'
              : value === 'Missing'
              ? 'bg-purple-100 text-purple-800'
              : 'bg-gray-100 text-gray-800'
          }`}
        >
          {value}
        </span>
      ),
    },
  ];
  type CardData = {
    title: string;
    value: string;
    icon: React.ReactNode;
    onClick?: () => void;
  };

  const cardData: CardData[] = [
    {
      title: 'Total Contributions',
      value: '85,000',
      icon: <ShowChartIcon fontSize="large" />,
    },
    {
      title: 'Last Contribution',
      value: '1,500',
      icon: <CalendarMonthIcon fontSize="large" />,
    },
    {
      title: 'Contributions',
      value: '3278',
      icon: <ReceiptIcon fontSize="large" />,
    },
    {
      title: 'Time before retirement',
      value: '11 yrs & 8 mos',
      icon: <Person fontSize="large" />,
      onClick: () => setRetirementModalOpen(true),
    },
    {
      title: 'Expected Revenue',
      value: '15,000',
      icon: <img src={Expected} alt="Expected REvenue" width={50} />,
    },
  ];

  return (
    <div className="w-full px-4 flex flex-col gap-6">
      {/* Cards Section */}
      <div className="flex flex-wrap gap-4 w-full">
        {cardData.map((item) => (
          <div key={item.title} className="flex-1 basis-[200px] min-w-[200px]">
            {item.onClick ? (
              <Button
                fullWidth
                onClick={item.onClick}
                sx={{
                  color: 'black',
                  p: 0,
                  textTransform: 'none',
                  '&:hover': { backgroundColor: 'transparent' },
                }}
              >
                <Cards {...item} />
              </Button>
            ) : (
              <Cards {...item} />
            )}
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <div className="flex-1 min-w-[60%]">
          <Chart data={lineChartData} />
        </div>
        <div className="flex-1 bg-white rounded-md p-4 flex flex-col">
          <Typography variant="h6" className="font-bold mb-4">
            Contribution of all your employers
          </Typography>
          <BarCharts />
        </div>
      </div>

      {/* Table Section */}
      <div className="w-full">
        <div className="flex justify-between items-center mb-4">
          <Typography variant="h6" className="font-bold">
            Contributions Made
          </Typography>
          <Button
            endIcon={<ArrowRightAltIcon />}
            onClick={openContributions}
            sx={{
              color: 'grey',
              '&:hover': { color: '#0561FC', backgroundColor: 'transparent' },
            }}
          >
            See all contributions
          </Button>
        </div>
        <Table data={contributionsData} columns={contributionColumn} />
      </div>

      {/* Retirement Dialog */}
      <div className="absolute">
        <Dialog
          open={retirementModalOpen}
          onClose={() => setRetirementModalOpen(false)}
        >
          <div className="justify-center flex w-full h-full">
            <div className="border p-10 w-full h-fit ">
              <div className="flex justify-between items-center border-gray-300 text-2xl font-bold border-b">
                <div className="align-middle">Retirement Form</div>
                <Button
                  sx={{
                    color: 'Black',
                    '&:hover': {
                      color: 'red',
                    },
                  }}
                  onClick={() => setRetirementModalOpen(false)}
                >
                  <CloseRoundedIcon fontSize="large" />
                </Button>
              </div>

              <div className="pt-10 flex items-center gap-8 justify-between">
                <div className="text-grey text-sm">Retirement Type</div>
                <FormControl variant="standard" fullWidth>
                  <Select
                    value={retirementData.type}
                    onChange={(e) =>
                      setRetirementData((prev) => ({
                        ...prev,
                        type: e.target.value,
                      }))
                    }
                  >
                    <MenuItem value="Voluntary">Voluntary</MenuItem>
                    <MenuItem value="Mandatory">Mandatory</MenuItem>
                    <MenuItem value="Early">Early</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="pt-10 flex items-center gap-8 justify-between">
                <div className="text-grey text-sm">Bank Account</div>
                <div className="w-2/3">
                  <TextField variant="standard" fullWidth />
                </div>
              </div>
              <div className="pt-10 flex items-center gap-8 justify-between">
                <div className="text-grey text-sm">Description</div>
                <div className="w-2/3">
                  <textarea
                    className="w-full p-3 border-b resize-none h-36 bg-inherit"
                    placeholder="Description. . ."
                  />
                </div>
              </div>

              <div className="flex flex-col w-full gap-5 pt-10 ">
                <Button
                  sx={{
                    color: 'white',
                    backgroundColor: '#034B64',
                    borderRadius: 2,
                  }}
                >
                  Submit
                </Button>
                <Button
                  sx={{
                    color: 'white',
                    backgroundColor: '#FAA86D',
                    borderRadius: 2,
                  }}
                  onClick={() => setRetirementModalOpen(false)}
                >
                  Back
                </Button>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
}
