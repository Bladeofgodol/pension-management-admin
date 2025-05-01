import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import LanguageIcon from '@mui/icons-material/Language';
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Assuming these images are in the public folder
import BeneficiaryBg from '../assets/imgs/front-view-senior-man-holding-cane.jpg';
import faydaLogo from '../assets/imgs/logos/fayda logo.png';
import users from '../data/admin-users.json';

export function LoginPage() {
  const [language, setLanguage] = useState('en');
  const [error, setError] = useState(false);
  const [national_id, setNational_id] = useState('');
  const navigate = useNavigate();
  const [OTP, setOTP] = useState(false);

  const handleLogin = () => {
    const isValidUser = (
      national_id: string
    ): national_id is keyof typeof users => {
      return Object.keys(users).includes(national_id);
    };

    if (isValidUser(national_id)) {
      setOTP(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleLanguageChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setLanguage(event.target.value);
  };

  return (
    <div>
      <div className="flex justify-center h-screen bg-gray-100">
        <div className="w-1/2 flex flex-col justify-between h-5/6 items-center">
          <div className="flex justify-end mb-4 items-center w-full">
            <LanguageIcon />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <Select
                value={language}
                onChange={handleLanguageChange}
                inputProps={{ 'aria-label': 'Select language' }}
              >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="am">Amharic</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="h-full w-full flex items-center justify-center">
            <div className="flex justify-around mb-4 h-fit flex-col px-20 p-10 shadow-lg w-3/5 rounded-3xl border">
              <h1 className="text-3xl font-bold text-primary mb-4 w-full text-center">
                Pension related services all in one place (Beneficiary Portal)
              </h1>
              <p className="text-lg text-grey mb-4">
                Please login to your account
              </p>

              <div className="flex flex-col w-full gap-5">
                <TextField
                  error={error}
                  label="National ID"
                  variant="standard"
                  fullWidth
                  value={national_id}
                  onChange={(e) => {
                    setNational_id(e.target.value);
                    setError(false);
                  }}
                />
              </div>

              <div className="flex justify-between my-4">
                <FormControlLabel
                  control={<Checkbox sx={{ color: '#00000080' }} />}
                  sx={{ color: '#00000080' }}
                  label="Remember Me"
                />
                {/* <button className="text-grey">Forgot Password</button> */}
              </div>

              <div className="w-full flex justify-center">
                <Button
                  variant="outlined"
                  sx={{
                    padding: '10px 50px',
                    borderRadius: '10px',
                    color: '#3751FE',
                    fontWeight: '550',
                    borderColor: '#00000033',
                  }}
                  onClick={handleLogin}
                >
                  <div className="flex items-center gap-5 text-lg text-black">
                    <img src={faydaLogo} alt="fayda logo" width={40} />
                    Login
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 h-full">
          <img
            src={BeneficiaryBg}
            alt="admin background"
            className="w-full h-full object-cover object-bottom"
          />
        </div>
      </div>
      {OTP && (
        <div className="fixed inset-0 bg-black/10 backdrop-blur-[1px] z-10 h-screen w-screen flex justify-center items-center">
          <Otp onClose={() => setOTP(false)} />
        </div>
      )}
    </div>
  );
}

export default LoginPage;

function Otp({ onClose }: { onClose: () => void }) {
  const navigate = useNavigate();
  const [otpValue, setOtpValue] = useState('');

  function login() {
    // Add OTP validation logic here
    navigate('/home');
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 w-96">
      <div className="flex justify-between border-b pb-4">
        <div className="font-bold text-lg">Enter OTP</div>
        <Button
          sx={{
            color: 'black',
            ':hover': { color: 'red' },
            minWidth: 'auto',
          }}
          onClick={onClose}
        >
          <CloseRoundedIcon fontSize="medium" />
        </Button>
      </div>

      <div className="pt-6">
        <TextField
          fullWidth
          label="OTP Code"
          variant="standard"
          value={otpValue}
          onChange={(e) => setOtpValue(e.target.value)}
          sx={{ marginBottom: '2rem' }}
        />
      </div>

      <Button
        fullWidth
        variant="contained"
        sx={{
          backgroundColor: '#034B64',
          color: 'white',
          borderRadius: '20px',
          padding: '12px 0',
          ':hover': { backgroundColor: '#023449' },
        }}
        onClick={login}
      >
        Submit
      </Button>
    </div>
  );
}
