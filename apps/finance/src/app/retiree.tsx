import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import { Button } from '@mui/material';
import Expected from '../assets/imgs/icons/expected.png';
import Payout from '../assets/imgs/icons/payout.png';
import Card from '../components/cards';

export function RetireePage() {
  const analytics = [
    {
      title: 'Unfulfilled Payouts',
      value: '4.5 million',
      icon: <img src={Payout} width={40} alt="cash contrib" />,
    },
    {
      title: 'Contribution This Month',
      value: '8.9 million',
      icon: <img src={Expected} width={40} alt="cash contrib" />,
    },
  ];

  const data = [
    { x: 1, y: 2 },
    { x: 2, y: 5 },
    { x: 3, y: 2 },
    { x: 5, y: 8 },
    { x: 8, y: 1 },
    { x: 10, y: 5 },
  ];
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex flex-col w-full p-2">
        <div className="flex w-full gap-10 justify-center">
          {analytics.map((item) => (
            <div key={item.title} className="w-fit py-5">
              <Card title={item.title} value={item.value} icon={item.icon} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-[400px] gap-6 py-16x">
        <div className="bg-[#EEEEEE] rounded-md p-6 text-center">
          <div className="font-semibold mb-4 text-[#034B64]">
            Expected amount for selected employees
          </div>
          <div className="text-4xl font-semibold text-[#034B64]">
            4,520,300.20 {/* Replace with actual calculation */}
          </div>
        </div>

        <div className="bg-[#EEEEEE] rounded-md p-6 text-center">
          <PaidOutlinedIcon className="!text-[#034B64] !text-4xl mb-4" />
          <div className="font-semibold mb-4 text-[#034B64]">
            Expected amount to pay all beneficiaries is up to be 4,520,300.20.
            The payment will be sent to the registered bank account of the
            beneficiaries. If the expectation is not met a message will be sent
            to all concerned parties that this has happened.
          </div>
        </div>

        <Button
          fullWidth
          variant="contained"
          endIcon={<ArrowForwardIosIcon />}
          sx={{
            bgcolor: '#034B64',
            '&:hover': { bgcolor: '#023449' },
            py: 2.5,
            borderRadius: 2,
            textTransform: 'none',
            fontSize: '1rem',
          }}
        >
          Release
        </Button>
      </div>
    </div>
  );
}

export default RetireePage;
