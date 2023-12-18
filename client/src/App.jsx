import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Loading from './components/Loading';
import NavBar from './components/NavBar';
import Notification from './components/Notification';
import Login from './components/user/Login';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Loading />
      <Notification />
      <Login />
      <NavBar />
    </ThemeProvider>
  );
}

export default App;
