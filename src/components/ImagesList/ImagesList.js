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


const ImagesList = props => {
  const classes = useImageListStyle();
  const { images } = props;
  const myState = useSelector((state) => state.authReducer);
  const [likedPhotos, setLikedPhotos] = useState([]);
  const [likesLink, setLikesLink] = useState("");
  const [totalLikes, setTotalLikes] = useState(0);
  const likedPhotosIds = []
  const dispatch = useDispatch();

  const photoLikes = useSelector(state => state.photoLikes);
    const { likedPhotosId } = photoLikes;

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

  const getLikedPhotos=async(url, pages)=>{

  for (let i = 0; i < pages; i++) {
    console.log("Inside for loop")
    console.log("Total Pages: ",pages)
    const resp=await axios.request({
       method: 'get',
       headers: {
         Authorization: `${myState.token_type} ${myState.accessToken}`
       },
       url: `${url}?page=${i+1}`
     })
     setLikedPhotos(photoIds => [...photoIds, ...(resp.data.filter(photo => !photoIds.includes(photo.id))).map(photo=>photo.id)])
     //console.log(resp.data);
     console.log("URL:" + url);

    
  }


  }

  useEffect(async () => {
    if (myState.accessToken != null) {
      //  await axios.request({
      //   method: 'get',
      //   headers: {
      //     Authorization: `${myState.token_type} ${myState.accessToken}`
      //   },
      //   url: `https://api.unsplash.com/me`
      // }).then(response =>{

      //   setLikesLink(response.data.links.likes)
      //   setTotalLikes(response.data.total_likes)
      //   getLikedPhotos(response.data.links.likes, Math.ceil(response.data.total_likes/10))
          
      // }
      // )
      dispatch(getLikedPhotosId(myState.accessToken, myState.token_type))

     

    }
  }, [])

  // images.map(item=> console.log(item));

  const handleLikeButtonClick = (item) => {

    if (myState.accessToken != null) {

      console.log(item);
      //const newIds = likedPhotos;
      axios.request({
        method: 'post',
        headers: {
          Authorization: `${myState.token_type} ${myState.accessToken}`
        },
        url: `https://api.unsplash.com/photos/${item.id}/like`
      }).then(response=> {
        // const likes = totalLikes+1
        // setTotalLikes(likes);
        // getLikedPhotos(likesLink,Math.ceil(likes/10))
        dispatch(getLikedPhotosId(myState.accessToken, myState.token_type))
      });
    }
    
    
  }
  console.log(likedPhotosId);
  return (
    <Box sx={{ height: "100%", }}>

      <ImageList style={{ display: "inline-block", columnCount: 3, columnGap: 8 }} variant="masonry">

        {images.map((item) => (

          <ImageListItem style={{ height: "auto", width: "100%", }} key={item.img}>

            <img
              srcSet={item.urls.small}
              alt={item.user.name}
              loading="lazy"

            />
            <ImageListItemBar
              style={{ backgroundColor: "transparent" }}
              position="bottom"
              title={item.description}
              subtitle={<span>by: {item.user.name}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${item.description}`} className={classes.icon} onClick={() => downloadImage(item.urls.small, item.user.username)}>
                  <GetAppRoundedIcon />
                </IconButton>
              }
            />
            <ImageListItemBar
              className={classes.titleBar}
              position="top"
              actionPosition="right"
              actionIcon={
                <IconButton aria-label={`like ${item.description}`} className={classes.icon} onClick={()=> handleLikeButtonClick(item)}>
                  <ThumbUpAltRoundedIcon  style={likedPhotosId.includes(item.id) ? { color: "#F5B041" }: { color: "white" }} />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}

      </ImageList>
    </Box>

  );

};



export default ImagesList;