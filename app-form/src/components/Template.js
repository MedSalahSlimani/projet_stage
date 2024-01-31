import React from 'react';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import blank from "../assets/blank.png";

import uuid from "react-uuid";
import { useNavigate } from "react-router-dom"; // Change here
import "./Template.css";

function Template() {
  const navigate = useNavigate(); // Change here

  const createForm = () => {
    const id_ = uuid();
    navigate("/form/" + id_); // Change here
  };

  return (
    <div className='template_section'>
      <div className='template_top'>
        <div className='template_left'>
          <span style={{ fontSize: "16px", color: "#202124" }}>Start New Form</span>
        </div>
        <div className='template_right'>
          <div className='gallery_button'>
            Template gallery_button
            <UnfoldMoreIcon />
          </div>
          <IconButton>
            <MoreVertIcon fontSize='small' />
          </IconButton>
        </div>
      </div>
      <div className='template_body'>
        <div className='card' onClick={createForm}>
          <img src={blank} alt="no image" className='card_image' />
          <p className='card_title'>Blank</p>
        </div>
       </div>
    </div>
  );
  }
export default Template;
