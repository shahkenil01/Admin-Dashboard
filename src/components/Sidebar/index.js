import Button from '@mui/material/Button';
import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { FaProductHunt } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return(
    <>
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/">
            <Button className='w-100'>
              <span className='icon'><MdDashboard/></span>
                Dashboard 
              <span className='arrow'><FaAngleRight/></span>
            </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
            <Button className='w-100'>
              <span className='icon'><FaProductHunt/></span>
                Products
              <span className='arrow'><FaAngleRight/></span>
            </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
            <Button className='w-100'>
              <span className='icon'><FaCartArrowDown/></span>
                Orders
              <span className='arrow'><FaAngleRight/></span>
            </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
            <Button className='w-100'>
              <span className='icon'><MdMessage/></span>
                Messages
              <span className='arrow'><FaAngleRight/></span>
            </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
            <Button className='w-100'>
              <span className='icon'><IoNotifications/></span>
                Notifications
              <span className='arrow'><FaAngleRight/></span>
            </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
            <Button className='w-100'>
              <span className='icon'><IoIosSettings/></span>
                Settings
              <span className='arrow'><FaAngleRight/></span>
            </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
            <Button className='w-100'>
              <span className='icon'><FaUser/></span>
                Login
            </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
            <Button className='w-100'>
              <span className='icon'><FaUser/></span>
                Sign Up
            </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
            <Button className='w-100'>
              <span className='icon'><FaCartArrowDown/></span>
                Orders
              <span className='arrow'><FaAngleRight/></span>
            </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
            <Button className='w-100'>
              <span className='icon'><MdMessage/></span>
                Messages
              <span className='arrow'><FaAngleRight/></span>
            </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
            <Button className='w-100'>
              <span className='icon'><IoNotifications/></span>
                Notifications
              <span className='arrow'><FaAngleRight/></span>
            </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
            <Button className='w-100'>
              <span className='icon'><IoIosSettings/></span>
                Settings
              <span className='arrow'><FaAngleRight/></span>
            </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
            <Button className='w-100'>
              <span className='icon'><IoNotifications/></span>
                Notifications
              <span className='arrow'><FaAngleRight/></span>
            </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
            <Button className='w-100'>
              <span className='icon'><IoIosSettings/></span>
                Settings
              <span className='arrow'><FaAngleRight/></span>
            </Button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar;