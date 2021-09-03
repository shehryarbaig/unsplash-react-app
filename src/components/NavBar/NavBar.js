import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { useNavBarStyles } from "./NavBar.style"
import { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLikedPhotosId, setToken } from '../../actions';
import { loginUrl } from '../../app/unsplash';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { IconButton } from '@material-ui/core';
import SearchBar from '../SearchBar';



const NavBar = () => {
  const classes = useNavBarStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.authReducer);
  const [redirect, setRedirect] = useState(false);

  const handleLogOut = () => {
      dispatch(setToken({
        access_token:null,
        token_type:null,
        scope: null
      }));
      localStorage.removeItem("tokenConfig");
      dispatch(setLikedPhotosId([],1));
      setRedirect(true);
  }
  const handleLogIn = () => {
      setRedirect(false);
  }

  const handleOnProfileClick = () => {
    history.push('/profile');
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBarContainer}>
        <Toolbar >
        <svg width="32" height="32" class="_1Jlgk" viewBox="0 0 32 32" version="1.1" aria-labelledby="unsplash-home" aria-hidden="false">
          <title id="unsplash-home">Unsplash Home</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg>
          <div className={classes.searchBarContainer}>
            <div className={classes.searchBarWidth}>
            <SearchBar/>
            </div>
          </div>
          {myState.accessToken!=null && 
          <IconButton onClick={handleOnProfileClick}>
            <AccountCircleIcon/>
          </IconButton>}
          {myState.accessToken == null ?
            <Button className={classes.loginButton} href={loginUrl} onClick={handleLogIn}  >Login</Button> :
            <Button className={classes.loginButton} onClick={handleLogOut} >Log Out</Button>}
        </Toolbar>
      </AppBar>
      {redirect && <Redirect to={"/"} />}
    </div>
  );
};

export default NavBar;