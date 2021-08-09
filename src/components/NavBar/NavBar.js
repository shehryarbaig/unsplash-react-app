import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import {useNavBarStyles} from "./NavBar.style"
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getNewQueryImages, setQuery } from '../../actions';



const NavBar = () => {
  const classes = useNavBarStyles();
  const [searchQuery,setSearchQuery] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleOnClick = (query) => {
      console.log(query);
      history.push({
        pathname: `/search-result/${query}`,
    });
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBarContainer}>
        <Toolbar >
          <Typography variant="h6" className={classes.title}>
            UnSplash
          </Typography>
          <div className={classes.searchContainer}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress = {(e)=> e.key === "Enter" ? handleOnClick(searchQuery): null}
              
            />
          </div>
          </div>
          <Button className={classes.loginButton} >Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default  NavBar;