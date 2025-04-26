import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Table from '../components/table';

interface AssetsData {
  name: string;
  assetType: string;
  location: string;
  valuationChange: number;
  condition: string;
}

const AssetsTable = () => {
  const assetsData: AssetsData[] = [
    {
      name: 'Asset 1',
      assetType: 'Real Estate',
      location: 'AA,Ethiopia, W 04',
      valuationChange: 0.022,
      condition: 'Good',
    },
    {
      name: 'Asset 2',
      assetType: 'Real Estate',
      location: 'AA,Ethiopia, W 17',
      valuationChange: 0.022,
      condition: 'Good',
    },
    {
      name: 'Asset 3',
      assetType: 'IT Equipment',
      location: '----',
      valuationChange: -0.0556,
      condition: 'Bad',
    },
  ];

  const columns: any = [
    { key: 'name', header: 'Name' },
    { key: 'assetType', header: 'Asset Type' },
    { key: 'location', header: 'Location' },
    {
      key: 'valuationChange',
      header: 'Valuation Change',
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
    {
      key: 'condition',
      header: 'Condition',
      render: (value: any) => (
        <span
          className={`px-10 py-1 inline-flex text-xs leading-5 font-semibold rounded-md ${
            value === 'Good'
              ? 'bg-blue-100 text-blue-800'
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
          <Link to="/investmentAsset/form?field=lease">
            <Button
              sx={{
                color: 'white',
                backgroundColor: '#008000',
                borderRadius: '7px',
                fontWeight: '550',
                fontSize: 11,
                padding: '5px 40px',
              }}
            >
              Lease
            </Button>
          </Link>
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
        <Link to="/investmentAsset/form?field=Asset">
          <Button
            sx={{
              backgroundColor: '#DFF0FF',
              color: 'black',
              padding: '5px 15px',
              fontWeight: 'bold',
              borderRadius: 2,
            }}
          >
            Add new Asset
          </Button>
        </Link>
      </div>

      <h1 className="text-xl font-bold mb-4">Assets</h1>
      <Table data={assetsData} columns={columns} />
    </div>
  );
};

export default AssetsTable;
