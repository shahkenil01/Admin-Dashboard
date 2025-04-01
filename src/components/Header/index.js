import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import Button from '@mui/material/Button';
import { MdMenuOpen } from 'react-icons/md';
/*import { MdOutlineMenu } from 'react-icons/md';*/
import SearchBox from '../SearchBox';
import { MdOutlineLightMode } from 'react-icons/md';
import { FaRegBell } from 'react-icons/fa6';

import { Menu, MenuItem, Avatar, Divider, ListItemIcon } from "@mui/material";
import { Logout, Settings, PersonAdd, AccountCircle } from "@mui/icons-material";
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

const Header = () => {
  const [anchorEl, setAnchorEl] = 
  useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid w-100">
          <div className="row d-flex align-items-center w-100">
            {/* Logo Wraper */}
            <div className="col-sm-2 part1">
              <Link to={'/'} className="d-flex align-items-center logo">
                <img src={logo} alt="logo" />
                <span className="ml-2">HOTASH</span>
              </Link>
            </div>

            {/* Menu and SerchBox Section */}
            <div className="col-sm-3 d-flex align-items-center part2">
              <Button className="rounded-circle mr-3"> <MdMenuOpen /> </Button>
              <SearchBox />
            </div>

            <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
              <Button className="rounded-circle mr-3"> <MdOutlineLightMode /> </Button>
              <Button className="rounded-circle mr-3" onClick={handleClick}> <FaRegBell /> </Button>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  slotProps={{
                    paper: {
                      elevation: 0,
                      sx: {
                        overflow: 'visible', filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))', mt: 1.5,
                        '& .MuiAvatar-root': {
                          width: 32, height: 32, ml: -0.5, mr: 1,
                        },
                        '&::before': {
                          content: '""', display: 'block', position: 'absolute', top: 0, right: 14, width: 10, height: 10, bgcolor: 'background.paper', transform: 'translateY(-50%) rotate(45deg)', zIndex: 0,
                        },
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <MenuItem onClick={handleClose}> <Avatar /> Profile </MenuItem>
                  <MenuItem onClick={handleClose}> <Avatar /> My account </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon> <PersonAdd fontSize="small" /> </ListItemIcon>
                    Add another account
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon> <Settings fontSize="small" /> </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon> <Logout fontSize="small" /> </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>

              <div className="myAccWrapper">
                <Button className="myAcc d-flex align-items-center">
                  <div className="userImg">
                    <span className="rounded-circle">
                      <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="profile"/>
                    </span>
                  </div>

                  <div className="userInfo">
                    <h4>Kenil Shah</h4>
                    <p className="mb-0">@Kenil</p>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
