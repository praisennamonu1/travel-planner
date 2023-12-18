import React from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { Lock, Menu } from '@mui/icons-material';

import { useValue } from '../context/ContextProvider';
import UserIcons from './user/UserIcons';

const NavBar = () => {
  const {
    state: { currentUser },
    dispatch,
  } = useValue();

  return (
    <>
      <AppBar>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box sx={{ mr: 1 }}>
              <IconButton size="large" color="inherit">
                <Menu />
              </IconButton>
            </Box>
            {!currentUser ? (
              <Typography
                variant="h6"
                component="h1"
                noWrap
                sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
              >
                Login To View Personalized Dashboard
              </Typography>
            ) : (
              <Typography
                variant="h6"
                component="h1"
                noWrap
                sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
              >
                Konnichiwa! {currentUser.name.toUpperCase()}
              </Typography>
            )}

            <Typography
              variant="h6"
              component="h1"
              noWrap
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              YRW
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
      <Toolbar />
    </>
  );
};

export default NavBar;
