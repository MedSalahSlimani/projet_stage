import React, { useState } from 'react';
import image from "../assets/logo1.png";
import { FiStar, FiSettings } from "react-icons/fi";
import { AiOutlineEye } from 'react-icons/ai';
import { IconButton } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { GoArrowLeft } from "react-icons/go";
import { Link } from 'react-router-dom';
import './Formheader.css';
import './Main';
import './Question_form'
import Main from './Main';

function Formheader() {
  const [doc_name, setDocName] = useState('');

  return (
    <div className='form_header'>
      <div className='form_header_left'>
        {/* Use the Link component to navigate to the specified path */}
   <Link to='/'>
       <IconButton>
       <GoArrowLeft />
      </IconButton>
  </Link>
        <img src={image} style={{ height: "45px", width: "40px" }} alt="Logo" />
        <input
          type="text"
          placeholder='Untitled form'
          className='form_name'
          value={doc_name}
          onChange={(e) => setDocName(e.target.value)}
        />
        <FiStar className='form_header_icon' style={{ marginRight: "10px" }} />
      </div>
      <div className='form_header_right'>
        {/* Add the appropriate component or functionality for the empty IconButton */}
        <IconButton>
          {/* Add your icon or functionality here */}
        </IconButton>
        <IconButton>
          <AiOutlineEye className='form_header_icon' />
        </IconButton>
        <IconButton>
          <FiSettings className='form_header_icon' />
        </IconButton>
        <Button variant="contained" color='primary' href='#contained-buttons'>
          Send
        </Button>
        <IconButton>
          <Avatar style={{ height: "30px", width: "30px" }} />
        </IconButton>
      </div>
    </div>
  );
}

export default Formheader;
