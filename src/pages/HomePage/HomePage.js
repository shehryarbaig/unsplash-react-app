import React, { Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import SearchBar from '../../components/SearchBar';
import { changeActiveTab } from '../../actions';
import { getHomePageImages, getNewHomePageImages } from '../../actions/homePageImagesActions';
import { homePageImagesSelector } from '../../reducers/homePageImagesReducer';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import { useHomePageStyle } from "./HomePage.style";
const ImagesList = React.lazy(() => import("../../components/ImagesList/ImagesList.js"));

const HomePage = props => {
    const classes = useHomePageStyle();
    const {homePageImages, getHomePageImages, getNewHomePageImages} = props;

    function fetchMoreImages() {

        homePageImages &&  getHomePageImages((Object.keys(homePageImages).length / 10) + 1) ;
    }

    useEffect(() => {
        changeActiveTab(0);
        getNewHomePageImages();
    }, []);

    return (
        <>
        <div className={classes.container} >
            <picture>
                <source srcset="https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=4799&amp;h=594 1x, https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=4799&amp;h=594 2x" media="(min-width: 4600px)" />
                <source srcset="https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=4599&amp;h=594 1x, https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=4599&amp;h=594 2x" media="(min-width: 4400px)" />
                <source srcset="https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=4399&amp;h=594 1x, https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=4399&amp;h=594 2x" media="(min-width: 4200px)" />
                <source srcset="https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=4199&amp;h=594 1x, https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=4199&amp;h=594 2x" media="(min-width: 4000px)" />
                <source srcset="https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=3999&amp;h=594 1x, https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=3999&amp;h=594 2x" media="(min-width: 3800px)" />
                <source srcset="https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=3799&amp;h=594 1x, https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=3799&amp;h=594 2x" media="(min-width: 3600px)" />
                <source srcset="https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=3599&amp;h=594 1x, https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=3599&amp;h=594 2x" media="(min-width: 3400px)" />
                <source srcset="https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=3399&amp;h=594 1x, https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=3399&amp;h=594 2x" media="(min-width: 3200px)" />
                <source srcset="https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=3199&amp;h=594 1x, https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=3199&amp;h=594 2x" media="(min-width: 3000px)" />
                <source srcset="https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=2999&amp;h=594 1x, https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=2999&amp;h=594 2x" media="(min-width: 2800px)" />
                <source srcset="https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=2799&amp;h=594 1x, https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=2799&amp;h=594 2x" media="(min-width: 2600px)" />
                <source srcset="https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=2599&amp;h=594 1x, https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=2599&amp;h=594 2x" media="(min-width: 2400px)" />
                <source srcset="https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=2399&amp;h=594 1x, https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=2399&amp;h=594 2x" media="(min-width: 2200px)" />
                <source srcset="https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=2199&amp;h=594 1x, https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=2199&amp;h=594 2x" media="(min-width: 2000px)" />
                <source srcset="https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=1999&amp;h=594 1x, https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=1999&amp;h=594 2x" media="(min-width: 1800px)" />
                <source srcset="https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=1799&amp;h=594 1x, https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=1799&amp;h=594 2x" media="(min-width: 1600px)" />
                <source srcset="https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=1599&amp;h=594 1x, https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=1599&amp;h=594 2x" media="(min-width: 1400px)" />
                <source srcset="https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=1399&amp;h=594 1x, https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=1399&amp;h=594 2x" media="(min-width: 1200px)" />
                <source srcset="https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=1199&amp;h=594 1x, https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=1199&amp;h=594 2x" media="(min-width: 1000px)" />
                <source srcset="https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=999&amp;h=594 1x, https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=999&amp;h=594 2x" media="(min-width: 800px)" />
                <source srcset="https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=799&amp;h=594 1x, https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=799&amp;h=594 2x" media="(min-width: 600px)" />
                <source srcset="https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=599&amp;h=310 1x, https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=599&amp;h=310 2x" media="(min-width: 400px)" />
                <source srcset="https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=399&amp;h=230 1x, https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=399&amp;h=230 2x" media="(min-width: 200px)" />
                <source srcset="https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=199&amp;h=230 1x, https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=199&amp;h=230 2x" />
                <img style={{filter: "brightness(0.60)"}} role="presentation"
                    src="https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=1000&amp;h=1000" />

            </picture>
            <div className={classes.headingContainer}>
                <div className={classes.heading}>
                    <Typography className={classes.UnsplashTitle} >Unsplash</Typography>
                    <Typography className={classes.titleDescription1} >The internet's source of freely usable images.</Typography>
                    <Typography className={classes.titleDescription2} >Powered by creators everywhere.</Typography>

                <div className={classes.searchBar}>
                <SearchBar customStyles={{borderRadius:"5px"}} inputCustomStyle={{height:"50px"}}/>
                </div>
                </div>
            </div>
            <div className={classes.bottomRight}>
                <div className={classes.bottomRightContainer}>
                <div >
                <img className={classes.squareSpaceImg} src="https://images.unsplash.com/file-1606177908946-d1eed1cbe4f5image"/>
                </div>
                <Typography className={classes.bottomText} >Start your website with Squarespace today.</Typography>

                </div>
            </div>
            <div className={classes.bottomLeft}>
            <Typography className={classes.bottomText} >Photo of the Day by Marc Thunis</Typography>
            </div>
        </div>
        <div className={classes.imagesContainer}>
        <Suspense fallback={<div>Loading</div>}>
                <ImagesList imageType="Home Page" />
        </Suspense>
        </div>
        <div className={classes.progressBar}>
        <ProgressBar fetchMoreImages= {fetchMoreImages}/>
        </div>
        </>
    );
};

const mapStateToProps = function (state) {
    return {
       homePageImages: homePageImagesSelector(state)
    }
  } 

  const mapDispatchToProps = (dispatch) => {
    return {
        getNewHomePageImages: () => dispatch(getNewHomePageImages()),
        getHomePageImages: (pageNumber) => dispatch(getHomePageImages(pageNumber)),
        changeActiveTab: (number) => dispatch(changeActiveTab(number)),
      
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
