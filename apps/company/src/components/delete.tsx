import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Delete({ children }: any) {
  const navigator = useNavigate();
  const goBack = () => {
    navigator(-1);
  };
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      {children}
      <div className="flex gap-5 pt-10">
        <Button
          sx={{
            backgroundColor: '#034B64',
            color: 'white',
            width: '100%',
            borderRadius: '20px',
            padding: '15px 80px',
          }}
          onClick={goBack}
        >
          No
        </Button>
        <Button
          sx={{
            backgroundColor: 'red',
            color: 'white',
            width: '100%',
            borderRadius: '20px',
            padding: '15px 80px',
          }}
        >
          Yes
        </Button>
      </div>
    </div>
  );
}
