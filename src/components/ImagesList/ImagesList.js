import React, { useEffect, useState } from 'react';
import { useImageListStyle } from './ImagesList.style';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import axios from "axios";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import { useSelector, useDispatch } from 'react-redux';
import { getLikedPhotosId } from '../../actions';
import { connect } from 'react-redux';
import { imageSelector, userLikesUrlSelector, userTotalLikesSelector } from '../../selectors';


const ImagesList = props => {
  const classes = useImageListStyle();
  const { images, likesUrl, totalLikes } = props;
  const myState = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  const photoLikes = useSelector(state => state.photoLikes);
    const { likedPhotosId } = photoLikes;

    const profile = useSelector(state=> state.profile);
    const {userProfile} = profile;

  const downloadImage = (url, fileName) => {
    axios({
      url: url,
      method: 'GET',
      responseType: 'blob'
    })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${fileName}.jpg`);
        document.body.appendChild(link);
        link.click();

      })
  }


  useEffect(async () => {
    if (myState.accessToken != null) {
      console.log("Likes Url ", likesUrl)
      Object.keys(userProfile).length!==0 && dispatch(getLikedPhotosId(userProfile.links.likes,userProfile.total_likes,myState.accessToken, myState.token_type))
    }
  }, [])

  const handleLikeButtonClick = (event, item) => {
    if (myState.accessToken != null) {
      axios.request({
        method: likedPhotosId.includes(item.id) ? 'delete' : 'post',
        headers: {
          Authorization: `${myState.token_type} ${myState.accessToken}`
        },
        url: `https://api.unsplash.com/photos/${item.id}/like`
      }).then(response=> {
        Object.keys(userProfile).length!==0 && dispatch(getLikedPhotosId(userProfile.links.likes,userProfile.total_likes,myState.accessToken, myState.token_type))
      });
    }
    
    
  }

  console.log("Images: ", images)
  return ( 
    images && <Box sx={{ height: "100%", }}>

      <ImageList style={{ display: "inline-block", columnCount: 3, columnGap: 8 }} variant="masonry">

        {
          
          Object.entries(images).map((item) => (

          <ImageListItem style={{ height: "auto", width: "100%", }} key={item[1].img} cols={3}>

            <img
              srcSet={item[1].urls[3]}
              alt={item[1].user.name}
              // loading="lazy"

            />
            <ImageListItemBar
              style={{ backgroundColor: "transparent" }}
              position="bottom"
              title={item[1].description}
              subtitle={<span>by: {item[1].user.name}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${item[1].description}`} className={classes.icon} onClick={() => downloadImage(item[1].urls[3], item[1].user.username)}>
                  <GetAppRoundedIcon />
                </IconButton>
              }
            />
            <ImageListItemBar
              className={classes.titleBar}
              position="top"
              actionPosition="right"
              actionIcon={
                <IconButton aria-label={`like ${item[1].description}`} className={classes.icon} onClick={(e)=> handleLikeButtonClick(e,item[1])}>
                  <ThumbUpAltRoundedIcon  style={  { color: likedPhotosId.includes(item[1].id)?"#F5B041":"white" }} />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}

      </ImageList>
    </Box>
   
    //<div>Images</div>

  );

};

const mapStateToProps = function (state, ownProps) {
  const {imageType} = ownProps;
  return {
     images: imageSelector(state, imageType)
  }
} 

export default connect(mapStateToProps)(ImagesList);