import React, { useEffect } from 'react';
import { useScrollableTabsStyle } from './ScrollableTabs.style';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from "react-redux";
import { changeActiveTab } from '../../actions';
import { handleTabChange } from '../../utils';


function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const ScrollableTabs = (props) => {
  const {topics} = props;
  const classes = useScrollableTabsStyle();
  const history = useHistory();
  //console.log(history);
  const tabHandler = useSelector(state => state.tabHandler);
  const { activeTab } = tabHandler;
  const dispatch = useDispatch();

  const handleChange = (event, activeTabNumber) => {
    dispatch(changeActiveTab(activeTabNumber));
    handleTabChange(activeTabNumber, history, dispatch);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={activeTab}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {
          topics && topics.map((topic,index) => {
            return <Tab label={topic.title} {...a11yProps(index)} />
            
          })}
          
        </Tabs>
      </AppBar>
    </div>
  );
};



export default ScrollableTabs;
