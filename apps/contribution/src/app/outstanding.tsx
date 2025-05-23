import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Table from '../components/table';

interface OutstandingData {
  name: string;
  branch: string;
  openingDate: string;
  sector: string;
  status: string;
}

const OutstandingTable = () => {
  const outstandingData: OutstandingData[] = [
    {
      name: 'Org 1',
      branch: 'Branch 1',
      openingDate: 'January 20, 2022',
      sector: 'Education',
      status: 'Operating',
    },
    {
      name: 'Org 2',
      branch: 'Branch 1',
      openingDate: 'January 20, 2022',
      sector: 'Manufacturing',
      status: 'Operating',
    },
    {
      name: 'Org 3',
      branch: 'Branch 1',
      openingDate: 'January 20, 2022',
      sector: 'Banking',
      status: 'Non-Operational',
    },
  ];

  const columns: any = [
    { key: 'name', header: 'Name' },
    { key: 'branch', header: 'Branch' },
    { key: 'openingDate', header: 'Opening Date' },
    { key: 'sector', header: 'Sector' },
    {
      key: 'status',
      header: 'Status',
      render: (value: string) => (
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
            value === 'Operating'
              ? 'bg-blue-100 text-blue-800'
              : 'bg-orange-100 text-orange-800'
          }`}
        >
          {value}
        </span>
      ),
    },

    {
      key: 'actions',
      render: () => (
        <div className="space-x-5 ">
          <Link to="/contribution/missingContrib">
            <Button
              sx={{
                color: 'white',
                backgroundColor: '#034B64',
                borderRadius: '7px',
                fontWeight: '550',
                fontSize: 11,
                padding: '5px 20px',
              }}
            >
              Settle
            </Button>
          </Link>
          <Link to="/benefit/report">
            <Button
              sx={{
                color: 'white',
                backgroundColor: '#008000',
                borderRadius: '7px',
                fontWeight: '550',
                fontSize: 11,
                padding: '5px 20px',
              }}
            >
              Resolve
            </Button>
          </Link>
        </div>
      ),
    },
  ];
  return (
    <div className="p-6 ">
      <div className="w-full flex justify-end"></div>

      <h1 className="text-xl font-bold mb-4">
        Organizations with outstanding and partially fulfilled contribution
      </h1>
      <Table data={outstandingData} columns={columns} />
    </div>
  );
};

export default OutstandingTable;
