import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { useNavBarStyles } from "./NavBar.style"
import { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getNewQueryImages, setLikedPhotosId, setQuery, setToken } from '../../actions';
import axios from 'axios';
import { loginUrl } from '../../app/unsplash';
import { useEffect } from 'react';
import { getToken } from '../../actions';
import { setUserProfile } from '../../actions/profile';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { IconButton } from '@material-ui/core';



const NavBar = () => {
  const classes = useNavBarStyles();
  const [searchQuery, setSearchQuery] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.authReducer);
  const [redirect, setRedirect] = useState(false);

  const handleOnClick = (query) => {
    history.push(`/search/?query=${query}`
    );
  }
  // const handleButtonOnClick = async() => {
  //   console.log("check");
  //   const response = await axios.request({
  //     method: 'get',
  //     url: `https://unsplash.com/oauth/authorize/?client_id=qwznuSGaQSPzh2IvmSQp2ebPs5Yntu6tEt4Gmnk9Et0&redirect_uri=http://localhost:8003&response_type=code&scope=public`
  // });
  // console.log(response.data)
  // //setLoginForm(response)
  // var myWindow = window.open("", "MsgWindow", "width=200,height=100");
  // myWindow.document.write(response.data);
  // //document.open()
  // }

  const handleLogOut = () => {
      dispatch(setToken({
        access_token:null,
        token_type:null,
        scope: null
      }));
      localStorage.removeItem("tokenConfig");
      dispatch(setLikedPhotosId([],1));
      //dispatch(setUserProfile(null));
      setRedirect(true);
  }
  const handleLogIn = () => {
      setRedirect(false);
  }

  const handleOnProfileClick = () => {
    console.log("handleOnProfileClick")
    history.push('/profile');
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
                onKeyPress={(e) => e.key === "Enter" ? handleOnClick(searchQuery) : null}

              />
            </div>
          </div>
          {/* <Button className={classes.loginButton} onClick={handleButtonOnClick} >Login</Button> */}
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