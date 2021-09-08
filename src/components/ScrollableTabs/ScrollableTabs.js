import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useHistory } from 'react-router';
import { changeActiveTab } from '../../actions';
import { handleTabChange } from '../../utils';
import { useScrollableTabsStyle } from './ScrollableTabs.style';


function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const ScrollableTabs = (props) => {
  const classes = useScrollableTabsStyle();
  const history = useHistory();
  const tabHandler = useSelector(state => state.tabHandler);
  const { activeTab } = tabHandler;
  const topicsDataSetter = useSelector(state => state.topicsDataSetter);
  const { topicsData } = topicsDataSetter;
  const dispatch = useDispatch();

  const handleChange = (event, activeTabNumber) => {
    dispatch(changeActiveTab(activeTabNumber));
    handleTabChange(history, dispatch,topicsData, event.target.innerText);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static" color="white">
        <Tabs
          value={activeTab}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable tabs"
        >
          <Tab className={classes.tab} label="Home Page" {...a11yProps(0)} />
          {
          topicsData && topicsData.map((topic,index) => {
            return <Tab className={classes.tab} label={topic.title} {...a11yProps(index+1)} />
          })}
          
        </Tabs>
      </AppBar>
    </div>
  );
};



export default ScrollableTabs;
