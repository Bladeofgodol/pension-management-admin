import SearchIcon from '@mui/icons-material/Search';
import { alpha, InputBase, styled } from '@mui/material';
import React from 'react';
import AccountMenu from './accountMenu';
import GridDropdownMenu from './dropdownMenu';


export default function AppBar() {
  const [query, setQuery] = React.useState('');

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.02),

    marginRight: theme.spacing(2),
    marginLeft: 0,
    padding: '5px',
    display: 'flex',
    alignItems: 'center',
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    color: '#BCC4C8',
    padding: theme.spacing(0, 2),
    height: '100%',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      width: '500px',
    },
  }));

  return (
    <div className="flex items-center justify-between px-10 w-full">
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
      <div className="flex gap-5 items-center">
        <div>
          <GridDropdownMenu/>
        </div>
        <div>
          <AccountMenu />
        </div>
      </div>
    </div>
  );
}
