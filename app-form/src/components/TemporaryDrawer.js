import React from 'react';
import { IconButton, ListItemText } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { IoMdMenu } from 'react-icons/io';
import Divider from "@material-ui/core/Divider";
import { makeStyles } from '@material-ui/core/styles'; // Import makeStyles
import {FiSettings} from "react-icons/fi"
import {BsQuestionCircle} from "react-icons/bs"
import { Link } from 'react-router-dom';
import './Formheader.css';
import'./Form';
import './Question_form'
import "./Drawer.css";

const useStyles = makeStyles({
  ListItem: {
    marginLeft: "20px", fontSize: "14px", fontWeight: "500", color: "grey"
  },
});

function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div style={{ width: "250px" }} role="presentation">
      <Divider/ >
      <List>
        <ListItem>
          <ListItemText style={{ fontSize: "48px", marginLeft: "5px" }}>

            <span style={{ color: "#5f6368", fontWeight: "500", fontSize: "22px", fontFamily: "'Product Sans', Arial, sans-serif" }}>FORMIFY HUB</span>
          </ListItemText>
        </ListItem>

      </List>
      <Divider/>
      <List style={{ marginLeft: "08px", marginRight: "8px", marginTop: "15px" }}>
        <ListItem>
          <Link to="/">
            <IconButton>
            <div className={classes.ListItem}>Dashboard</div> 
              </IconButton>
              </Link>
          
        </ListItem>

        <ListItem>
        <Link to='/form/4fbd4d88-6d7d-261e-dd8c-0325157020e9'>
          <IconButton>
          <div className={classes.ListItem} >Questions</div>
          </IconButton>
        </Link>
        </ListItem>

        <ListItem>
          <div className={classes.ListItem}>S</div>
        </ListItem>

        <ListItem>
          <div style={{ marginLeft: "20px", fontSize: "14px", fontWeight: "500", color: "grey" }}>Forms</div>
        </ListItem>
      </List>
<Divider />
      <List>
        <ListItem className='list_item'>
            <FiSettings />
            <div> Settings</div>
        </ListItem>
        <ListItem className='list_item'>
            <BsQuestionCircle />
            <div> Help & Feedback </div>
        </ListItem>
      </List>
      <Divider/>
      <List style={{marginLeft: "08px", marginRight: "8px", marginTop: "15px"}}>
        <ListItem className='list_item'>
     
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton onClick={toggleDrawer('left', true)}>
          <IoMdMenu />
        </IconButton>
        <Drawer open={state['left']} onClose={toggleDrawer('left', false)} anchor={'left'}>
          {list('left')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

export default TemporaryDrawer;
