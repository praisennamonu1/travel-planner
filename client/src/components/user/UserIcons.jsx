import { useState } from 'react';
import { Box, IconButton, Badge, Tooltip, Avatar } from '@mui/material';
import { Mail } from '@mui/icons-material';
import { useValue } from '../../context/ContextProvider';
import UserMenu from './UserMenu';

function UserIcons() {
  const {
    state: { currentUser },
  } = useValue();

  const [anchorUserMenu, setAnchorUserMenu] = useState(null);

  return (
    <Box>
      <IconButton size="large" color="inherit">
        <Badge color="error" badgeContent={5}>
          <Mail />
        </Badge>
      </IconButton>
      <IconButton size="large" color="inherit">
        <Badge color="error" badgeContent={20}>
          <Mail></Mail>
        </Badge>
      </IconButton>
      <Tooltip title="Open User Settings">
        <IconButton onClick={(e) => setAnchorUserMenu(e.currentTarget)}>
          <Avatar src={currentUser?.photoURL} alt={currentUser?.name}>
            {currentUser?.name?.charAt(0).toUpperCase()}
          </Avatar>
        </IconButton>
      </Tooltip>
      <UserMenu {...{ anchorUserMenu, setAnchorUserMenu }} />
    </Box>
  );
}

export default UserIcons;
