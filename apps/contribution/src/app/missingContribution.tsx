import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import MissingTable from '../components/missedTable';
export default function ResolveContribution() {
  const navigator = useNavigate();
  const goBack = () => {
    navigator(-1);
  };
  const employees = [
    {
      id: 1,
      name: 'Employee 1',
      owedAmount: 102222,
      missedDate: '2024-02-01',
    },
    {
      id: 2,
      name: 'Employee 2',
      owedAmount: 102222,
      missedDate: '2024-02-01',
    },
    {
      id: 3,
      name: 'Employee 3',
      owedAmount: 102222,
      missedDate: '2024-02-01',
    },
    {
      id: 4,
      name: 'Employee 4',
      owedAmount: 102222,
      missedDate: '2024-02-01',
    },
    {
      id: 5,
      name: 'Employee 5',
      owedAmount: 102222,
      missedDate: '2024-02-01',
    },
  ];

  return (
    <div className="w-full h-full flex flex-col">
      <div className="px-2 py-10 text-4xl font-light flex gap-5 items-center">
        <Button sx={{ color: 'black' }} onClick={goBack}>
          <KeyboardBackspaceIcon fontSize="large" />
        </Button>
        <div>Missing Contribution</div>
      </div>
      <div className="flex w-full">
        <MissingTable employees={employees} />
      </div>
    </div>
  );
}
