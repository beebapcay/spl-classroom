import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import Logo from '../../assets/images/mock_logo.png';
import AvatarImage from '../../assets/images/mock_avatar.png';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleAddClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAddClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <AppBar position="fixed" sx={{ backgroundColor: 'white', boxShadow: 2 }}>
        <Toolbar>
          <IconButton size="large" edge="start" color="default" aria-label="menu" sx={{ mr: 1.5 }}>
            <MenuIcon />
          </IconButton>
          <img src={Logo} alt="logo" style={{ height: 50, width: 'auto' }} />
          <Typography
            variant="h6"
            color="primary"
            component="div"
            sx={{ flexGrow: 1, mb: -0.25, ml: 1.5, fontWeight: 'bold' }}
          >
            Classroom
          </Typography>

          <IconButton
            size="large"
            edge="start"
            color="default"
            aria-label="add"
            sx={{ mr: 1.5 }}
            onClick={handleAddClick}
          >
            <AddIcon />
          </IconButton>
          <Menu
            id="menu-add"
            anchorEl={anchorEl}
            open={open}
            onClose={handleAddClose}
            keepMounted
            elevation={3}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={handleAddClose}>Join Class</MenuItem>
            <MenuItem onClick={handleAddClose}>Create Class</MenuItem>
          </Menu>
          <IconButton color="default" sx={{ padding: 0.65 }}>
            <Avatar src={AvatarImage} alt="avatar" style={{ height: 35, width: 35 }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
