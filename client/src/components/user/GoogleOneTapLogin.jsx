import { Google } from '@mui/icons-material';
import { Button } from '@mui/material';

function GoogleOneTapLogin() {
  return (
    <Button variant="outlined" startIcon={<Google />}>
      Login with Google
    </Button>
  );
}

export default GoogleOneTapLogin;
