import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { useSearchResultStyle } from './SearchResult.style';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { getQueryImages } from '../../actions';
import ImagesList from '../ImagesList';
import VisibilitySensor from "react-visibility-sensor";
import { CircularProgress } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { setQuery, getNewQueryImages } from '../../actions';
import { capitalizeFirstLetter } from '../../utils';
import { queryImagesSelector, querySelector } from '../../selectors';

const SearchResult = props => {
    const classes = useSearchResultStyle();
    const dispatch = useDispatch();
    const location = useLocation();
    const {queryImages, query} = props;

    const useQuery = () => {
        return new URLSearchParams(location.search);
      }

    const queryParam = useQuery(); 

    function fetchMoreImages() {
        dispatch(getQueryImages(query, (Object.keys(queryImages).length / 10) + 1));
    }

    useEffect(() => {
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
                    <Typography className={classes.categoryTitle} >{query}</Typography>

                </Grid>

                <Grid className={classes.imagesGrid} item sm={12}  >
                    <ImagesList imageType="Query" />
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
       queryImages: queryImagesSelector(state),
       query: querySelector(state)
    }
  } 
  
export default connect(mapStateToProps)(SearchResult);