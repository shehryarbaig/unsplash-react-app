import React, { Suspense, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { getLikedImages, getNewLikedImages } from '../../actions/photoLikes';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import { useProfilePageStyle } from './ProfilePage.style';
import { likedImagesSelector } from '../../reducers/photoLikes';
import { userProfileSelector } from '../../reducers/profile';
const ImagesList = React.lazy(() => import("../../components/ImagesList/ImagesList.js"));


const ProfilePage = props => {

    const classes = useProfilePageStyle();

    const dispatch = useDispatch();

    const { userProfile } = props;

    const { likedImages } = props;

    const myState = useSelector((state) => state.authReducer);

    function fetchMoreImages() {

        likedImages && Object.keys(userProfile).length !== 0 && dispatch(getLikedImages(userProfile.links.likes, (Object.keys(likedImages).length / 10) + 1, myState.accessToken, myState.token_type));
    }

    useEffect(() => {
        Object.keys(userProfile).length !== 0 && dispatch(getNewLikedImages(userProfile.links.likes, myState.accessToken, myState.token_type));
    }, []);

    function onChange(isVisible) {
        if (isVisible) {
            fetchMoreImages();
        }
    }

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
        userProfile: userProfileSelector(state)
    }
}

export default connect(mapStateToProps)(ProfilePage);
