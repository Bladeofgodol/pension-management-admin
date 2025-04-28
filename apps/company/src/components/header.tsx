import SearchIcon from '@mui/icons-material/Search';
import {
  alpha,
  AppBar,
  Avatar,
  Button,
  InputBase,
  styled,
  Toolbar,
} from '@mui/material';
import { Link } from 'react-router-dom';
export default function Header() {
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
    <div className="w-full">
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        className="border-b border-gray-200"
      >
        <Toolbar className="flex justify-between">
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <div className="flex items-center gap-4">
            <Button component={Link} to="/home" color="primary">
              Home
            </Button>
            <Button component={Link} to="/faq" color="inherit">
              FAQ
            </Button>
            <Button component={Link} to="/report-employer" color="inherit">
              Report Employer
            </Button>
            <Avatar src="/placeholder-user.jpg" />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
