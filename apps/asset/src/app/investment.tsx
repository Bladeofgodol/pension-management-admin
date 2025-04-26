import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Table from '../components/table';

interface InvestmentData {
  name: string;
  amount: number;
  rateOfReturn: number;
  investmentDate: string;
  maturityDate: string;
}

const InvestmentTable = () => {
  const investmentData: InvestmentData[] = [
    {
      name: 'Inv 1',
      amount: 500000,
      rateOfReturn: 0.05,
      investmentDate: 'January 20, 2022',
      maturityDate: 'January 20, 2022',
    },
    {
      name: 'Inv 2',
      amount: 500000,
      rateOfReturn: 0.012,
      investmentDate: 'January 20, 2022',
      maturityDate: 'January 20, 2022',
    },
    {
      name: 'Inv 3',
      amount: 300000,
      rateOfReturn: -0.03,
      investmentDate: 'January 20, 2022',
      maturityDate: 'January 20, 2022',
    },
  ];

  const columns: any = [
    { key: 'name', header: 'Name' },
    { key: 'amount', header: 'Amount' },
    {
      key: 'rateOfReturn',
      header: 'Rate of Return',
      render: (value: number) => (
        <span
          className={`px-2 inline-flex text-sm leading-5 font-semibold rounded-full ${
            value < 0 ? ' text-red-400' : ' text-green-400'
          }`}
        >
          {value}
        </span>
      ),
    },
    { key: 'investmentDate', header: 'Investment Date' },
    { key: 'maturityDate', header: 'Maturity Date' },

    {
      key: 'actions',
      render: () => (
        <div className="space-x-5 ">
          <Link to="/#">
            <Button
              sx={{
                color: 'white',
                backgroundColor: '#034B64',
                borderRadius: '7px',
                fontWeight: '550',
                fontSize: 11,
                padding: '5px 40px',
              }}
            >
              Edit
            </Button>
          </Link>
          <Link to="./delete?id=1">
            <Button
              sx={{
                color: 'white',
                backgroundColor: 'red',
                borderRadius: '7px',
                fontWeight: '550',
                fontSize: 11,
                padding: '5px 20px',
              }}
            >
              Remove
            </Button>
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 ">
      <div className="w-full flex justify-end">
        <Link to="/investmentAsset/form?field=Investment">
          <Button
            sx={{
              backgroundColor: '#DFF0FF',
              color: 'black',
              padding: '5px 15px',
              fontWeight: 'bold',
              borderRadius: 2,
            }}
          >
            Add new Investment
          </Button>
        </Link>
      </div>

      <h1 className="text-xl font-bold mb-4">Investments</h1>
      <Table data={investmentData} columns={columns} />
    </div>
  );
};

export default InvestmentTable;
