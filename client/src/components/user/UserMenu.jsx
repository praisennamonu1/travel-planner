import { useValue } from '../../context/ContextProvider';
import { MenuItem, Menu, ListItemIcon } from '@mui/material';
import { Logout, Settings } from '@mui/icons-material';

function UserMenu({ anchorUserMenu, setAnchorUserMenu }) {
  const { dispatch } = useValue();
  return (
    <Menu
      anchorEl={anchorUserMenu}
      open={Boolean(anchorUserMenu)}
      onClose={() => setAnchorUserMenu(null)}
      onClick={() => setAnchorUserMenu(null)}
    >
      <MenuItem>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Profile
      </MenuItem>
      <MenuItem
        onClick={() => dispatch({ type: 'UPDATE_USER', payload: null })}
      >
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
}

export default UserMenu;
