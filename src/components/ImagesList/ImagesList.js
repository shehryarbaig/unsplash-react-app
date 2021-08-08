import React from 'react';
import { useImageListStyle } from './ImagesList.style';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import axios from "axios";


const ImagesList = props => {
  const classes = useImageListStyle();
  const { images} = props;

  const downloadImage = (url, fileName) =>
  {
    axios({
      url:url,
      method:'GET',
      responseType:'blob'
    })
    .then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download',`${fileName}.jpg`);
      document.body.appendChild(link);
      link.click();
      
    })
  }

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
                title={item.description}
                subtitle={<span>by: {item.user.name}</span>}
                actionIcon={
                  <IconButton aria-label={`info about ${item.description}`} className={classes.icon} onClick={()=> downloadImage(item.urls.small,item.user.username)}>
                    <GetAppRoundedIcon  />
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