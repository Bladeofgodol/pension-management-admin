import LanguageIcon from '@mui/icons-material/Language';
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Assuming these images are in the public folder
import CompanyBg from '../assets/imgs/HR.png';
import POESSA from '../assets/imgs/logos/POESSA.png';
import PSSSA from '../assets/imgs/logos/PSSSA.png';
import users from '../data/admin-users.json';

export function LoginPage() {
  const [blurred, setBlurEffect] = useState(false);
  const [language, setLanguage] = useState('en');
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleFocus = (value: boolean) => {
    setBlurEffect(value);
  };

  const handleLogin = () => {
    const isValidUser = (email: string): email is keyof typeof users => {
      return Object.keys(users).includes(email);
    };

    if (isValidUser(email) && users[email].password === password) {
      navigate('/home');
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
    <div className="flex items-center justify-center h-screen bg-wite">
      <div className="w-1/2 flex flex-col justify-between h-full items-center">
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

        <div className="flex justify-around mb-4 h-full flex-col p-20 shadow-lg w-3/5 rounded-3xl border">
          <h1 className="text-3xl font-bold text-primary mb-4 text-center">
            Pension related services all in one place (Organization Portal)
          </h1>
          <p className="text-lg text-grey mb-4">Please login to your account</p>

          <div className="flex flex-col w-full gap-5">
            <TextField
              error={error}
              label="Email"
              variant="standard"
              fullWidth
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError(false);
              }}
            />
            <TextField
              error={error}
              label="Password"
              type="password"
              variant="standard"
              fullWidth
              helperText={error ? 'Incorrect Email or password.' : ''}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
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
            <button className="text-grey">Forgot Password</button>
          </div>

          <div className="w-full flex justify-center">
            <Button
              variant="outlined"
              sx={{
                padding: '15px 70px',
                borderRadius: '10px',
                color: '#3751FE',
                fontWeight: '550',
              }}
              onClick={handleLogin}
            >
              Login
            </Button>
          </div>
        </div>

        <div className="flex justify-around mb-10 h-1/3 gap-20 items-center">
          <img src={PSSSA} alt="psssa" className="h-48 w-48 object-contain" />
          <img src={POESSA} alt="poessa" className="h-52 w-52 object-contain" />
        </div>
      </div>

      <div className="w-1/2 h-full">
        {blurred ? (
          <img
            src={CompanyBg}
            alt="company background"
            className="w-full h-full object-cover object-top blur"
          />
        ) : (
          <img
            src={CompanyBg}
            alt="company background"
            className="w-full h-full object-cover object-top"
          />
        )}
      </div>
    </div>
  );
}

export default LoginPage;
