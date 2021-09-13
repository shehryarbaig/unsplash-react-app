import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import axios from "axios";
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import { getLikedPhotosId } from '../../actions';
import { likedImagesSelector, likedPhotosIdSelector } from '../../reducers/photoLikesReducer';
import { accessTokenSelector, tokenTypeSelector } from '../../reducers/authReducer';
import { likeButtonClick } from '../../actions/photoLikesActions';
import {userProfileSelector} from "../../reducers/profileActions"
import { getImage } from '../../actions/imageActions';
import { topicImagesSelector } from '../../reducers/topicImagesSetterReducer';
import { queryImagesSelector } from '../../reducers/queryImagesDataReducer';
import { homePageImagesSelector } from '../../reducers/homePageImagesReducer';
import { useImageListStyle } from './ImagesList.style';


const ImagesList = props => {
  const classes = useImageListStyle();
  const { images, getLikedPhotosId,likeButtonClick, userProfile, likedPhotosId,getImage, accessToken, tokenType } = props;

  const downloadImage = (url, fileName) => {
    getImage(url, fileName);
  }


  useEffect(() => {
    if (accessToken != null) {
      Object.keys(userProfile).length!==0 && getLikedPhotosId(userProfile.links.likes,userProfile.total_likes,accessToken, tokenType)
    }
  }, [])

  const handleLikeButtonClick = (event, item) => {
    if (accessToken != null && Object.keys(userProfile).length!==0) {
     likeButtonClick(item.id,likedPhotosId.includes(item.id),userProfile.links.likes,userProfile.total_likes,accessToken,tokenType)
    }
    
    
  }

  return ( 
    images && <Box sx={{ height: "100%", }}>

      <ImageList style={{ display: "inline-block", columnCount: 3, columnGap: 8 }} variant="masonry">

        {
          
          Object.entries(images).map((item) => (

          <ImageListItem style={{ height: "auto", width: "100%", }} key={item[1].img} cols={3}>

            <img
              srcSet={item[1].urls[3]}
              alt={item[1].user.name}

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

  );

};

const imageSelector =  (state, imageType) => {
  if(imageType === "Topic")
  {
      return topicImagesSelector(state)
      
  }
  else if(imageType === "Query")
  {
    return queryImagesSelector(state)
    
  }
  else if(imageType === "Profile")
  {
    return likedImagesSelector(state)
    
  }
  else if(imageType === "Home Page")
  {
    return homePageImagesSelector(state)
    
  }
}

const mapStateToProps = function (state, ownProps) {
  const {imageType} = ownProps;
  return {
    images: imageSelector(state, imageType),
    userProfile: userProfileSelector(state),
    likedPhotosId: likedPhotosIdSelector(state),
    accessToken: accessTokenSelector(state),
    tokenType: tokenTypeSelector(state),
  }
  
} 

const mapDispatchToProps = (dispatch) => {
  return {
    getLikedPhotosId: (likesUrl, totalLikes, accessToken, tokenType) => dispatch(getLikedPhotosId(likesUrl, totalLikes, accessToken, tokenType)),
    likeButtonClick: (imageId, isLiked, likesUrl,totalLikes,accessToken,tokenType) => dispatch(likeButtonClick(imageId, isLiked, likesUrl,totalLikes,accessToken,tokenType)),
    getImage: (url, fileName) => dispatch(getImage(url, fileName)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImagesList);
