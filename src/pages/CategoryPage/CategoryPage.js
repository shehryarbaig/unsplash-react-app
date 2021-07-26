import React from 'react';
import { useCategoryPageStyle } from './CategoryPage.style';
import { useSelector, useDispatch } from "react-redux";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const CategoryPage = props => {
    const classes = useCategoryPageStyle();
    const tabHandler = useSelector(state => state.tabHandler);
    const { activeUrl } = tabHandler

    return (
        <div className={classes.root}>
            {/* <h1 className={classes.root}> {activeUrl} </h1> */}
            <Grid container>
                <Grid item xs={12} sm={7}>
                    {/* <Paper className={classes.paper}>xs=6</Paper> */}
                    <Typography className={classes.categoryTitle} >Wallpaper</Typography>
                    <Typography className={classes.categoryDescription} >From epic drone shots to inspiring moments in nature, find free HD wallpapers worthy of your mobile and desktop screens. Finally.</Typography>
                    
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Paper className={classes.paper}>xs=4</Paper>
                </Grid>
            </Grid>
        </div>
    );
};

CategoryPage.propTypes = {

};

export default CategoryPage;