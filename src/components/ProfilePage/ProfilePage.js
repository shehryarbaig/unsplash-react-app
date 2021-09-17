import React, { Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { getLikedImages, getNewLikedImages } from '../../actions/photoLikesActions';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import { likedImagesSelector } from '../../reducers/photoLikesReducer';
import { userProfileSelector } from '../../reducers/profileReducer';
import { accessTokenSelector, tokenTypeSelector } from '../../reducers/authReducer';
import { useProfilePageStyle } from './ProfilePage.style';
const ImagesList = React.lazy(() => import("../../components/ImagesList/ImagesList.js"));


const ProfilePage = props => {

    const classes = useProfilePageStyle();

    const { userProfile, likedImages, accessToken, tokenType, getLikedImages, getNewLikedImages } = props;

    function fetchMoreImages() {

        likedImages && Object.keys(userProfile).length !== 0 && getLikedImages(userProfile.links.likes, (Object.keys(likedImages).length / 10) + 1, accessToken, tokenType);
    }

    useEffect(() => {
        Object.keys(userProfile).length !== 0 && getNewLikedImages(userProfile.links.likes, accessToken, tokenType);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} sm={7}>
                    <Typography className={classes.categoryTitle} >{userProfile.name}</Typography>
                    <Typography className={classes.categoryDescription} >Download free, beautiful high-quality photos liked by {userProfile.first_name} </Typography>

                </Grid>

                <Grid className={classes.imagesGrid} item sm={12}  >
                    <Suspense fallback={<div>Loading</div>}>
                        <ImagesList imageType="Profile" />

                    </Suspense>
                </Grid>
                <Grid item className={classes.circularIcon} xs={12} >
                <ProgressBar fetchMoreImages= {fetchMoreImages}/>
                </Grid>
            </Grid>
        </div>
    );
};

const mapStateToProps = function (state) {
    return {
        likedImages: likedImagesSelector(state),
        userProfile: userProfileSelector(state),
        accessToken: accessTokenSelector(state),
        tokenType: tokenTypeSelector(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getNewLikedImages: (likesUrl, accessToken, tokenType) => dispatch(getNewLikedImages(likesUrl, accessToken, tokenType)),
        getLikedImages: (likesUrl, pageNumber, accessToken, tokenType) => dispatch(getLikedImages(likesUrl, pageNumber, accessToken, tokenType)),
      
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
