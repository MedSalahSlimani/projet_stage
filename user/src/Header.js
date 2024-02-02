import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcons from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';


import logo from './image/logo1.png'
const Header = () => {
  return (
    <div className='header'>
      <div className='header_info'>
        <IconButton>
            <MenuIcon/>
        </IconButton>
        <img src={logo} alt="image" className='imag'></img>
      </div>

      <div className='header_search'>
      <IconButton>
      <SearchIcons/>
      </IconButton>

      <input type="text" name='search' placeholder='search'></input>
      </div>
      <div className='header_right'>
        <IconButton>
        <AppsIcon/>
        </IconButton>
        
        
      </div>
    </div>
  );
};

export default Header;
