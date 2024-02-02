import React from 'react';
import { IoAppsSharp } from 'react-icons/io5';

import SearchIcon from '@material-ui/icons/Search';
import {IconButton} from '@mui/material'
import { CiSearch } from 'react-icons/ci';
import { RxAvatar } from 'react-icons/rx';
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar"
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Header.css';
import logo1 from '../assets/logo1.png';
import TemporaryDrawer from './TemporaryDrawer';

function Header() {
  return (
    <div className='header'>
      <div className='header_info'>
        <TemporaryDrawer />
        <img src={logo1} alt='Logo' height={40} width={40} /> <p>FORMIFY HUB</p>
      </div>
      <div className='header_search'>
      <IconButton><SearchIcon/></IconButton>
        <input type='text' name='search' placeholder='search' />
      </div>
      <div className='header_right'>
        <IconButton>
          <AppsIcon/>
        </IconButton>
      <IconButton>
        <Avatar alt="User Avatar"  />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
