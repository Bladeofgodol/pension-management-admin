import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import BarCharts from '../components/barCharts';

export default function Report() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="h-full flex flex-col gap-5">
      {/* Header section remains the same */}
      <div className="bg-primary text-white rounded-md pl-10">
        <div className="w-full flex justify-end">
          <Button
            sx={{
              color: 'white',
              '&:hover': {
                color: 'red',
              },
            }}
          >
            <CloseRoundedIcon
              sx={{
                fontWeight: 'bold',
              }}
            />
          </Button>
        </div>
        <div className="w-full text-3xl">Abebe Yelema Assefa</div>
        <div className="py-5 grid grid-cols-3 gap-5 text-xl">
          <div>TIN : 12345678</div>
          <div>Organization : Org 1</div>
          <div>DOB : 24/05/1999</div>
          <div>Phone : +251987654321</div>
          <div>Email : example@test.com</div>
          <div>Gender : Male</div>
        </div>
      </div>

      <div className="flex w-full h-full gap-5">
        {/* Left column remains the same */}
        <div className="w-1/2 flex flex-col justify-between h-full">
          <div className="px-5 w-full bg-white rounded-lg">
            <div className="p-5 font-bold text-2xl text-[#545559]">
              Pension Contribution
            </div>
            <div>
              <BarCharts />
            </div>
          </div>
          <div>
            <div className="px-5 w-full bg-white rounded-md">
              <div className="p-5 font-bold text-2xl text-[#545559]">
                Contribution Per Company
              </div>
              <div>
                <BarCharts />
              </div>
            </div>
          </div>
        </div>

        {/* Right column with fixed scrolling area */}
        <div className="bg-white rounded-lg p-5 flex flex-col gap-5 h-full w-1/2 max-h-[calc(100vh-400px)]">
          <div className="text-2xl font-light">Contribution Breakdown</div>

          {/* Header row */}
          <div className="bg-secondary grid grid-cols-3 px-10 py-3 rounded-lg text-lg">
            <div>Contribution</div>
            <div className="flex justify-center">Date</div>
            <div className="flex justify-end">Transaction ID</div>
          </div>

          {/* Scrollable content */}
          <div className="overflow-y-auto pr-2">
            {[...Array(20)].map((_, index) => (
              <div
                key={index}
                className="bg-secondary grid grid-cols-3 px-10 py-3 rounded-lg mt-2 text-gray-700"
              >
                <div>Contribution {index + 1}</div>
                <div className="flex justify-center font-semibold">
                  01/{String(index + 1).padStart(2, '0')}/2023
                </div>
                <div className="flex justify-end text-xs items-center text-gray-700">
                  TX-{String(index + 1).padStart(4, '0')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-around">
        <Button
          sx={{ backgroundColor: 'red', color: 'white', padding: '5px 80px' }}
        >
          Reject
        </Button>
        <Button
          sx={{
            backgroundColor: '#034B64',
            color: 'white',
            padding: '5px 80px',
          }}
        >
          Accept
        </Button>
        <Button
          sx={{
            backgroundColor: '#FAA86D',
            color: 'white',
            padding: '5px 80px',
          }}
          onClick={goBack}
        >
          Back
        </Button>
      </div>
    </div>
  );
}
