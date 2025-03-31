import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import Button from '@mui/material/Button';
import { MdMenuOpen } from 'react-icons/md';
import { MdOutlineMenu } from 'react-icons/md';
import SearchBox from '../SearchBox';
import { MdOutlineLightMode } from 'react-icons/md';
import { FaRegBell } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid w-100">
          <div className="row d-flex align-items-center w-100">
            {/* Logo Wraper */}
            <div className="col-sm-2 part1">
              <Link to={'/'} className='d-flex align-items-center logo'>
                <img src={logo}/>
                <span className='ml-2'>HOTASH</span>
              </Link>
            </div>

            {/* Menu and SerchBox Section */}
            <div className='col-sm-3 d-flex align-items-center part2'>
              <Button className='rounded-circle mr-3'><MdMenuOpen /></Button>
              <SearchBox />
            </div>

            <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
              <Button className='rounded-circle mr-3'><MdOutlineLightMode /></Button>
              <Button className='rounded-circle mr-3'><FaRegBell /></Button>

              <div className="myAccWrapper">
                <div className="myAcc d-flex align-items-center">
                  <div className='userImg'>
                    <span className='rounded-circle'>
                      <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"/>
                    </span>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
