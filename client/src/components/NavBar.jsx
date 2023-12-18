import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Lock, Menu } from '@mui/icons-material';
import photoURL from '../assets/profile.jpg';
import { useValue } from '../context/ContextProvider';
import UserIcons from './user/UserIcons';

const user = { name: 'Praise', photoURL };

function NavBar() {
  const {
    state: { currentUser },
    dispatch,
  } = useValue();

  return (
    <AppBar position="fixed" color="secondary" sx={{ top: 'auto', bottom: 0 }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ mr: 1 }}>
            <IconButton size="large" color="inherit">
              <Menu />
            </IconButton>
          </Box>
          <Typography
            variant="h6"
            component="h1"
            noWrap
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
          >
            Irrashai!
          </Typography>
          <Typography
            variant="h6"
            component="h1"
            noWrap
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Irrashai!
          </Typography>
          {!currentUser ? (
            <Button
              color="inherit"
              startIcon={<Lock />}
              onClick={() => dispatch({ type: 'OPEN_LOGIN' })}
            >
              Login
            </Button>
          ) : (
            <UserIcons />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
