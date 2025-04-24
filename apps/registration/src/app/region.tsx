import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Table from '../components/table';

interface RegionData {
  name: string;
  branches: number;
  openingDate: string;
  yearlyIncome: string;
  status: string;
}

const RegionsTable = () => {
  const regionsData: RegionData[] = [
    {
      name: 'Amhara',
      branches: 1,
      openingDate: 'January 20, 2022',
      yearlyIncome: '7.9 million',
      status: 'Opening',
    },
    {
      name: 'Tigray',
      branches: 3,
      openingDate: 'January 20, 2022',
      yearlyIncome: '9 million',
      status: 'Opening',
    },
    {
      name: 'Oromia',
      branches: 0,
      openingDate: 'January 20, 2024',
      yearlyIncome: '0',
      status: 'Non-Operational',
    },
  ];

  const columns: any = [
    { key: 'name', header: 'Name' },
    { key: 'branches', header: 'Branches' },
    { key: 'openingDate', header: 'Opening Date' },
    {
      key: 'yearlyIncome',
      header: 'Yearly Income',
      render: (value: string) => <span className="font-semibold">{value}</span>,
    },
    {
      key: 'status',
      header: 'Status',
      render: (value: string) => (
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
            value === 'Opening'
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
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
          <Button
            sx={{
              color: 'white',
              backgroundColor: '#034B64',
              borderRadius: '7px',
              fontWeight: '550',
              fontSize: 11,
            }}
          >
            Edit
          </Button>
          <Button
            sx={{
              color: 'white',
              backgroundColor: 'red',
              borderRadius: '7px',
              fontWeight: '550',
              fontSize: 11,
            }}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 ">
      <div className="w-full flex justify-end">
        <Link to="/registration/form?field=region">
          <Button
            sx={{
              backgroundColor: '#DFF0FF',
              color: 'black',
              padding: '5px 15px',
              fontWeight: 'bold',
              borderRadius: 2,
            }}
          >
            Add new region
          </Button>
        </Link>
      </div>

      <h1 className="text-xl font-bold mb-4">Regions</h1>
      <Table data={regionsData} columns={columns} />
    </div>
  );
};

export default RegionsTable;
