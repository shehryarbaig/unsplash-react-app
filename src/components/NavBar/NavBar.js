import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import {useNavBarStyles} from "./NavBar.style"



const NavBar = () => {
  const classes = useNavBarStyles();
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
            />
          </div>
          </div>
          <Button className={classes.loginButton}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default  NavBar;