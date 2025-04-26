// pages/regions.tsx
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Table from '../components/table';

interface BranchData {
  name: string;
  region: string;
  openingDate: string;
  yearlyIncome: string;
  status: string;
}

const BranchesTable = () => {
  const BranchData: BranchData[] = [
    {
      name: 'Branch 1',
      region: 'Afar',
      openingDate: 'January 20, 2022',
      yearlyIncome: '1 million',
      status: 'Operating',
    },
    {
      name: 'Branch 2',
      region: 'Amhara',
      openingDate: 'January 20, 2022',
      yearlyIncome: '2 million',
      status: 'Operating',
    },
    {
      name: 'Branch 3',
      region: 'Oromia',
      openingDate: 'January 20, 2024',
      yearlyIncome: '1 million',
      status: 'operation',
    },
  ];

  const columns: any = [
    { key: 'name', header: 'Name' },
    { key: 'region', header: 'Region' },
    { key: 'openingDate', header: 'Opening Date' },
    {
      key: 'yearlyIncome',
      header: 'Yearly Income',
      render: (value: any) => <span className="font-semibold">{value}</span>,
    },
    {
      key: 'status',
      header: 'Status',
      render: (value: any) => (
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
            value === 'Operating'
              ? 'bg-blue-100 text-blue-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {value}
        </span>
      ),
    },
    {
      key: 'status', // Reusing key for actions
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
          <Link to="./delete?id=1">
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
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6">
      <div className="w-full flex justify-end">
        <Link to="/registration/form?field=branch">
          <Button
            sx={{
              backgroundColor: '#DFF0FF',
              color: 'black',
              padding: '5px 15px',
              fontWeight: 'bold',
              borderRadius: 2,
            }}
          >
            Add new branch
          </Button>
        </Link>
      </div>
      <h1 className="text-xl font-bold mb-4">Branches</h1>
      <Table data={BranchData} columns={columns} />
    </div>
  );
};

export default BranchesTable;
