import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import {useNavBarStyles} from "./NavBar.style"
import { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useDispatch , useSelector} from 'react-redux';
import { getNewQueryImages, setQuery, setToken } from '../../actions';
import axios from 'axios';
import { loginUrl } from '../../app/unsplash';
import { useEffect } from 'react';
import { getToken } from '../../actions';



const NavBar = () => {
  const classes = useNavBarStyles();
  const [searchQuery,setSearchQuery] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.authReducer);

  const handleOnClick = (query) => {
      console.log(query);
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

  const handleLoginButtonOnClick = () => {
    if(myState.accessToken==null)
    {
      console.log("insdie login" + loginUrl);
      <Redirect to={loginUrl} />
    }
    else{
      console.log("insdie else login");
      dispatch(setToken(null));
    }
  }

  
  
  //console.log("code outside:" + code);
  console.log("access token: "+myState.accessToken);
  console.log("login url : "+loginUrl);
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
          {/* <Button className={classes.loginButton} onClick={handleButtonOnClick} >Login</Button> */}
          <Button className={classes.loginButton}  href={loginUrl} >{ myState.accessToken==null ? "Login" : "Logged In"}</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default  NavBar;