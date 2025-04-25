import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Table from '../components/table';

interface OrganizationsData {
  name: string;
  branch: string;
  openingDate: string;
  sector: string;
  status: string;
}

const OrganizationsTable = () => {
  const organizationsData: OrganizationsData[] = [
    {
      name: 'Org 1',
      branch: 'Branch 1',
      openingDate: 'January 20, 2022',
      sector: 'Education',
      status: 'Operating',
    },
    {
      name: 'Org 2',
      branch: 'Branch 2',
      openingDate: 'January 20, 2022',
      sector: 'Manufacturing',
      status: 'Operating',
    },
    {
      name: 'Org 3',
      branch: 'Branch 1',
      openingDate: 'January 20, 2024',
      sector: 'Banking',
      status: 'Non operational',
    },
  ];

  const columns: any = [
    { key: 'name', header: 'Name' },
    { key: 'branch', header: 'Branch' },
    { key: 'openingDate', header: 'Opening Date' },
    {
      key: 'sector',
      header: 'Sector',
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
              : 'bg-orange-100 text-orange-800'
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
    <div className="p-6">
      <div className="w-full flex justify-end">
        <Link to="/registration/form?field=organization">
          <Button
            sx={{
              backgroundColor: '#DFF0FF',
              color: 'black',
              padding: '5px 15px',
              fontWeight: 'bold',
              borderRadius: 2,
            }}
          >
            Add new Organization
          </Button>
        </Link>
      </div>
      <h1 className="text-xl font-bold mb-4">Organizations</h1>
      <Table data={organizationsData} columns={columns} />
    </div>
  );
};

export default OrganizationsTable;
