import React, { Suspense, useEffect } from 'react';
import { connect } from "react-redux";
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { getTopicImages, getNewTopicImages } from '../../actions/topicsImagesSetter';
import { changeActiveTab } from '../../actions';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import { topicImagesSelector } from '../../reducers/topicImagesSetter';
import { useCategoryPageStyle } from './CategoryPage.style';
const ImagesList = React.lazy(() => import("../../components/ImagesList/ImagesList.js"));

const CategoryPage = props => {
    const { topic, topicIndex, getNewTopicImages, getTopicImages, changeActiveTab } = props;
    const { topicImages } = props;
    const classes = useCategoryPageStyle();


    function fetchMoreImages() {

        topicImages && getTopicImages(topic.slug, (Object.keys(topicImages).length / 10) + 1);
    }

    useEffect(() => {
        changeActiveTab(topicIndex + 1);
        getNewTopicImages(topic.slug);
    }, []);

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
                <Grid item className={classes.circularIcon} xs={12} >
                    <ProgressBar fetchMoreImages= {fetchMoreImages}/>
                </Grid>
            </Grid>

        </div>
    );
};

const mapStateToProps = function (state) {
    return {
        topicImages: topicImagesSelector(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getNewTopicImages: (topic) => dispatch(getNewTopicImages(topic)),
        getTopicImages: (topic, pageNumber) => dispatch(getTopicImages(topic, pageNumber)),
        changeActiveTab: (number) => dispatch(changeActiveTab(number)),
      
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
