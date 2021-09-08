import React, { Suspense, useEffect } from 'react';
import {useDispatch, connect } from "react-redux";
import VisibilitySensor from "react-visibility-sensor";
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';
import { getTopicImages, getNewTopicImages } from '../../actions/topicsImagesSetter';
import { changeActiveTab } from '../../actions';
import { useCategoryPageStyle } from './CategoryPage.style';
import { topicImagesSelector } from '../../selectors';
const ImagesList = React.lazy(() => import("../../components/ImagesList/ImagesList.js"));

const CategoryPage = props => {
    const { topic, topicIndex } = props;
    const { topicImages } = props;
    const classes = useCategoryPageStyle();
    const dispatch = useDispatch();


    function fetchMoreImages() {

        topicImages &&  dispatch(getTopicImages(topic.slug, (Object.keys(topicImages).length / 10) + 1)) ;
    }

    useEffect(() => {
        dispatch(changeActiveTab(topicIndex + 1));
        dispatch(getNewTopicImages(topic.slug));
    }, []);

    function onChange(isVisible) {
        if(isVisible)
        {
            fetchMoreImages();
        }
    }

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} sm={7}>
                    {/* <Paper className={classes.paper}>xs=6</Paper> */}
                    <Typography className={classes.categoryTitle} >{topic.title}</Typography>
                    <Typography className={classes.categoryDescription} >{topic.description}</Typography>

                </Grid>
                <Grid item xs={12} sm={5}>
                    {/* <Paper className={classes.paper}>xs=4</Paper> */}
                </Grid>

                <Grid className={classes.imagesGrid} item sm={12}  >
                    <Suspense fallback={<div>Loading</div>}>
                    <ImagesList imageType="Topic" />

                    </Suspense>
                </Grid>
                <VisibilitySensor onChange={onChange}>
                    <Grid item className={classes.circularIcon} xs={12} >
                    <CircularProgress />
                    </Grid>
                </VisibilitySensor>
            </Grid>
                
        </div>
    );
};

const mapStateToProps = function (state) {
    return {
       topicImages: topicImagesSelector(state)
    }
  } 
  
export default connect(mapStateToProps)(CategoryPage);
