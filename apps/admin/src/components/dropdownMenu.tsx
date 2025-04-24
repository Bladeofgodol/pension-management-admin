import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import { Button, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import benefitLogo from '../assets/imgs/icons/benefit.png';
import contributionLogo from '../assets/imgs/icons/contribution.png';
import customerServiceLogo from '../assets/imgs/icons/customer service.png';
import fundFinanceLogo from '../assets/imgs/icons/fund finance.png';
import investmentAssetLogo from '../assets/imgs/icons/investment asset.png';
import registrationLogo from '../assets/imgs/icons/registration.png';

const GridDropdownMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const items = [
    {
      id: 1,
      label: 'Pension Registration',
      icon: registrationLogo,
      link: '/registration',
    },
    {
      id: 2,
      label: 'Pension Benefits',
      icon: benefitLogo,
      link: '/benefit',
    },
    {
      id: 3,
      label: 'Pension Contribution',
      icon: contributionLogo,
      link: '/contribution',
    },
    {
      id: 4,
      label: 'Fund and Finance',
      icon: fundFinanceLogo,
      link: '/fundFinance',
    },
    {
      id: 5,
      label: 'Investment and Asset',
      icon: investmentAssetLogo,
      link: '/investmentAsset',
    },
    {
      id: 6,
      label: 'Customer Service',
      icon: customerServiceLogo,
      link: '/customerService',
    },
  ];

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button onClick={handleClick}>
        <AppsRoundedIcon fontSize="large" sx={{ color: '#5F6368' }} />
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            minWidth: 300,
            padding: 1,
            border: 'black',
            mt: 2,
            boxShadow: 'none',
          },
        }}
      >
        <div className="grid grid-cols-3 gap-1">
          {items.map((item) => (
            <Link to={item.link ? item.link : '#'}>
              <MenuItem
                key={item.id}
                sx={{
                  justifyContent: 'center',
                  py: 1,
                  width: '100%',
                }}
              >
                <div className="flex flex-col items-center text-center w-full gap-2">
                  <div>
                    {item.icon ? (
                      <img src={item.icon} alt="benefit Logo" width={60} />
                    ) : null}
                  </div>
                  <div className="text-sm font-semibold text-wrap px-1 w-20">
                    {item.label}
                  </div>
                </div>
              </MenuItem>
            </Link>
          ))}
        </div>
      </Menu>
    </div>
  );
};

export default GridDropdownMenu;
