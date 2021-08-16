import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchResultStyle } from './SearchResult.style';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { getQueryImages } from '../../actions';
import ImagesList from '../ImagesList';
import VisibilitySensor from "react-visibility-sensor";
import { CircularProgress } from '@material-ui/core';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { setQuery, getNewQueryImages } from '../../actions';
import { capitalizeFirstLetter } from '../../utils';

const SearchResult = props => {
    const classes = useSearchResultStyle();
    const queryImagesData = useSelector(state => state.queryImagesData);
    const { queryImages, query } = queryImagesData;
    const dispatch = useDispatch();
    //const params = useParams();
    const location = useLocation();
    //console.log(params.searchQuery);

    const useQuery = () => {
        return new URLSearchParams(location.search);
      }

    const queryParam = useQuery(); 
    //console.log("q is " + queryParam.get("query"));

    function fetchMoreImages() {
        dispatch(getQueryImages(query, (queryImages.length / 10) + 1));
    }

    useEffect(() => {
        console.log("query:" + queryParam.get("query"))
        dispatch(setQuery(capitalizeFirstLetter(queryParam.get("query"))));
        dispatch(getNewQueryImages(queryParam.get("query")));
    }, [location]);

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
                    <Typography className={classes.categoryTitle} >{query}</Typography>

                </Grid>
                <Grid item xs={12} sm={5}>
                    <Paper className={classes.paper}>xs=4</Paper>
                </Grid>

                <Grid className={classes.imagesGrid} item sm={12}  >
                    <ImagesList images={queryImages} />
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


export default SearchResult;