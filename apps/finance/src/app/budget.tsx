// pages/Employees.tsx
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Table from '../components/table';

interface BudgetData {
  branch: string;
  region: string;
  yearlyBudget: string;
  yearlyExpenditure: string;
  status: string;
}

const BudgetTable = () => {
  const budgetData: BudgetData[] = [
    {
      branch: 'Branch 1',
      region: 'Afar',
      yearlyBudget: '500,000',
      yearlyExpenditure: '----------',
      status: 'Closed',
    },
    {
      branch: 'Branch 2',
      region: 'Amhara',
      yearlyBudget: '500,000',
      yearlyExpenditure: '450,000',
      status: 'Operating',
    },
    {
      branch: 'Branch 3',
      region: 'Oromia',
      yearlyBudget: '500,000',
      yearlyExpenditure: '800,000',
      status: 'Operating',
    },
  ];

  const columns: any = [
    { key: 'branch', header: 'Branch' },
    { key: 'region', header: 'Region' },
    { key: 'yearlyBudget', header: 'Yearly Budget' },
    { key: 'yearlyExpenditure', header: 'Yearly Expenditure' },

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
        <Link to="/fundFinance/form?field=budget">
          <Button
            sx={{
              backgroundColor: '#DFF0FF',
              color: 'black',
              padding: '5px 15px',
              fontWeight: 'bold',
              borderRadius: 2,
            }}
          >
            Add new Budget
          </Button>
        </Link>
      </div>
      <h1 className="text-xl font-bold mb-4">Budgets</h1>
      <Table data={budgetData} columns={columns} />
    </div>
  );
};

export default BudgetTable;
