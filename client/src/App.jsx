import NavBar from './components/NavBar';
import Login from './components/user/Login';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
      <Login />
      <NavBar />
    </ThemeProvider>
  );
}

export default App;
