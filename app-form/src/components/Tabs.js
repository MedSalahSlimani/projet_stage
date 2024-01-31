import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
//import QuestionForm from './Question_form';
//import AnswersPage from './AnswersPage';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  tab: {
    fontSize: 12,
    color: '#5f6368',
    textTransform: 'capitalize',
    height: 10,
    fontWeight: '600',
    fontFamily: 'Google Sans, Roboto, Arial, sans-serif',
  },
  tabs: {
    height: 10,
  },
});

function CenteredTabs() {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        className={classes.tabs}
        textColor="primary"
        indicatorColor="primary"
        centered
        value={selectedTab}
        onChange={handleTabChange}
      >
        <Tab label="Questions" className={classes.tab} />
        <Tab label="Answers" className={classes.tab} />
      </Tabs>


    </Paper>
  );
}

export default CenteredTabs;
