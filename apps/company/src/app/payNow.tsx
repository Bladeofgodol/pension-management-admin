import { ArrowForward, Lock } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';

export default function PayNow() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col gap-5 items-center justify-center p-4">
      <div className="text-center space-y-4 bg-gray-300 rounded-xl shadow-md p-6 max-w-md ">
        <Typography variant="h5" className="font-bold text-xl text-gray-800">
          Expected Amount
        </Typography>

        <Typography variant="h3" className="font-bold text-3xl text-gray-800">
          23,602.6
        </Typography>

        <div className="bg-black p-5 rounded-md">
          <Typography variant="body1" className="text-white">
            You haven't met an expected contribution amount of 20,624 btrr.
          </Typography>
        </div>
        <div className="bg-black p-5 rounded-md">
          <Typography variant="body2" className="text-white">
            These unsettled contributions with a 3% interest every month comes
            out to 23,602.6 btrr.
          </Typography>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-md p-6 max-w-md w-full">
        <div className="text-center space-y-4">
          <div className="my-6 p-4 bg-blue-50 rounded-lg flex items-center gap-2 flex-col">
            <Lock className="text-blue-500" fontSize="large" />
            <Typography variant="body2" className="text-blue-800">
              Your payment is 100% safe and secure. We use encryption to protect
              your data and only work with verified payment gateways.
            </Typography>
          </div>

          <div className="space-y-3">
            <Button
              fullWidth
              variant="outlined"
              className="h-12 justify-between px-4  bg-purple-800 text-orange-400 border-gray-300 hover:border-blue-500 hover:bg-blue-50"
              endIcon={<ArrowForward />}
            >
              <div className="flex items-center gap-2">
                <img
                  src="/path-to-cbe-logo.png"
                  alt="CBE"
                  className="h-6 w-6"
                />
                Continue with Commercial Bank of Ethiopia
              </div>
            </Button>

            <Button
              fullWidth
              variant="outlined"
              sx={{ borderColor: 'black' }}
              className="h-12 justify-between px-4 text-gray-700 border-black border hover:border-blue-500 hover:bg-blue-50"
              endIcon={<ArrowForward />}
            >
              <div className="flex items-center gap-2">
                <img
                  src="/path-to-telebirr-logo.png"
                  alt="Telebirr"
                  className="h-6 w-6"
                />
                Continue with Telebirr
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
