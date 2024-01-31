import React from 'react'
import StorageIcon from '@material-ui/icons/Storage';
import  ArrowDropDowIcon  from '@material-ui/icons/ArrowDropDown';
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import {IconButton} from "@material-ui/core";
//import MoreVertIcon from "@material-ui/icons/MoreVert"
//import contact from '../assets/contact.png';
import "./Mainbody.css";

function Mainbody() {
  return (
    <div className='mainbody'>
        <div className='mainbody_top'>
          <div className='mainbody_top_left' style={{fontSize:"16px", fontWeight:"500"}}>
             Rexent forms
         </div>
         <div className='mainbody_top_right'>
<div className='mainbody_top_center' style={{fontSize:"14px", marginRight:"125px"}}>Owned by anyone <ArrowDropDowIcon/>
<IconButton>
    <StorageIcon style={{fontSize:"16px", color:"black"}}/>
</IconButton>
<IconButton>
    <FolderOpenIcon style={{fontSize:"16px", color:"black"}}/>
</IconButton>
</div>
        </div> 
        </div>
              <div className='mainbody_docs'>
            <div className='doc_card'>
            
                
            </div>
        </div>
    </div>
  )
}

export default Mainbody
