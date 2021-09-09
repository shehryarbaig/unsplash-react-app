import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch  } from 'react-redux';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import axios from "axios";
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import { getLikedPhotosId } from '../../actions';
import { useImageListStyle } from './ImagesList.style';
import { topicImagesSelector } from '../../selectors';
import { queryImagesSelector } from '../../selectors';
import { likedImagesSelector } from '../../selectors';
import { homePageImagesSelector } from '../../selectors';


const ImagesList = props => {
  const classes = useImageListStyle();
  const { images } = props;
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


  useEffect(() => {
    if (myState.accessToken != null) {
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

const mapStateToProps = function (state, ownProps) {
  const {imageType} = ownProps;
  if(imageType === "Topic")
  {
      return {
        images: topicImagesSelector(state)
      }
  }
  else if(imageType === "Query")
  {
    return {
        images: queryImagesSelector(state)
    }
  }
  else if(imageType === "Profile")
  {
    return {
      images: likedImagesSelector(state)
    }
  }
  else if(imageType === "Home Page")
  {
    return {
      images: homePageImagesSelector(state)
    }
  }
} 

export default connect(mapStateToProps)(ImagesList);
