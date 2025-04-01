import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import Button from '@mui/material/Button';
import { MdMenuOpen } from 'react-icons/md';
/*import { MdOutlineMenu } from 'react-icons/md';*/
import SearchBox from '../SearchBox';
import { MdOutlineLightMode } from 'react-icons/md';
import { FaRegBell } from 'react-icons/fa6';

import { Menu, MenuItem, ListItemIcon } from "@mui/material";
import { Logout, PersonAdd } from "@mui/icons-material";
import { IoShieldHalfSharp } from "react-icons/io5";
console.log("ENV VARIABLES:", process.env);

const userName = process.env.REACT_APP_USER_NAME || "User";
const userHandle = process.env.REACT_APP_USER_HANDLE || "@user";

const Header = () => {
  const [anchorEl, setAnchorEl] = 
  useState(null);
  const open = Boolean(anchorEl);

  const handleOpenMyAccDrop = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMyAccDrop = () => {
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
              <Button className="rounded-circle mr-3"> <FaRegBell /> </Button>

              <div className="myAccWrapper">
                <Button className="myAcc d-flex align-items-center" onClick={handleOpenMyAccDrop}>
                  <div className="userImg">
                    <span className="rounded-circle">
                      <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="profile"/>
                    </span>
                  </div>

                  <div className="userInfo">
                    <h4>{userName}</h4>
                    <p className="mb-0">{userHandle}</p>
                  </div>
                </Button>

                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleCloseMyAccDrop}
                  onClick={handleCloseMyAccDrop}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <ListItemIcon> <PersonAdd fontSize="small" /> </ListItemIcon>
                    My Account
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <ListItemIcon> <IoShieldHalfSharp/> </ListItemIcon>
                    Reset Password
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <ListItemIcon> <Logout fontSize="small" /> </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>

              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;