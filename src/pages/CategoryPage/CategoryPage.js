import React, { useEffect } from 'react';
import { useCategoryPageStyle } from './CategoryPage.style';
import { useSelector, useDispatch } from "react-redux";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import ImagesList from '../../components/ImagesList';
import { getTopicImages, getNewTopicImages } from '../../actions/topicsImagesSetter';
import { CircularProgress } from '@material-ui/core';
import { changeActiveTab } from '../../actions';
import VisibilitySensor from "react-visibility-sensor";

const CategoryPage = props => {
    const { topic, topicIndex } = props;
    const classes = useCategoryPageStyle();
    const dispatch = useDispatch();


    function fetchMoreImages() {
        dispatch(getTopicImages(topic.slug, (topicImages.length / 10) + 1));
    }

    useEffect(() => {
        dispatch(changeActiveTab(topicIndex + 1));
        dispatch(getNewTopicImages(topic.slug));
    }, []);

    const topicsImagesSetter = useSelector(state => state.topicsImagesSetter);
    const { topicImages } = topicsImagesSetter;

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
                    <ImagesList images={topicImages} />
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


export default CategoryPage;