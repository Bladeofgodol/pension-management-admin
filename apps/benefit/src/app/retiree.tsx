import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Table from '../components/table';

interface RetireeData {
  name: string;
  salary: string;
  applicationDate: string;
  eligibilityDate: string;
  status: string;
}

const RetireeTable = () => {
  const retireeData: RetireeData[] = [
    {
      name: 'Abebe Yelma',
      salary:"13,000",
      applicationDate: 'January 20, 2022',
      eligibilityDate: 'January 20, 2022',
      status: 'Retired',
    },
    {
      name: 'Abiy Assefa',
      salary:"18,000",
      applicationDate: 'January 20, 2022',
      eligibilityDate: 'January 20, 2022',
      status: 'Retired',
    },
    {
      name: 'Abel Alem',
      salary:"15,000",
      applicationDate: 'January 20, 2022',
      eligibilityDate: 'January 20, 2022',
      status: 'Retired',
    },
  ];

  const columns: any = [
    { key: 'name', header: 'Name' },
    { key: 'salary', header: 'Salary' },
    { key: 'applicationDate', header: 'Application Date' },
    { key: 'eligibilityDate', header: 'Eligibility Date' },
    {
      key: 'status',
      header: 'Status',
      render: (value: string) => (
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
            value === 'Retired'
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
          <Button
            sx={{
              color: 'white',
              backgroundColor: '#008000',
              borderRadius: '7px',
              fontWeight: '550',
              fontSize: 11,
              padding:"5px 40px"
            }}
          >
            Reassign benefit
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 ">
      <div className="w-full flex justify-end">
        <Link to="/benefit/form?field=retiree">
          <Button
            sx={{
              backgroundColor: '#DFF0FF',
              color: 'black',
              padding: '5px 15px',
              fontWeight: 'bold',
              borderRadius: 2,
            }}
          >
            Add new retirees
          </Button>
        </Link>
      </div>

      <h1 className="text-xl font-bold mb-4">
        Beneficiaries application for retirement
      </h1>
      <Table data={retireeData} columns={columns} />
    </div>
  );
};

export default RetireeTable;
