import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import VisibilitySensor from "react-visibility-sensor";
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';
import ImagesList from '../ImagesList';
import { setQuery, getNewQueryImages, getQueryImages } from '../../actions';
import { capitalizeFirstLetter } from '../../utils';
import { useSearchResultStyle } from './SearchResult.style';
import { queryImagesSelector, querySelector } from '../../selectors';
import { useQuery } from '../../utils';

const SearchResult = props => {
    const classes = useSearchResultStyle();
    const location = useLocation();
    const {queryImages, query, setQuery, getNewQueryImages, getQueryImages} = props;
    const queryParam = useQuery(location); 

    useEffect(() => {
        setQuery(capitalizeFirstLetter(queryParam.get("query")));
        getNewQueryImages(queryParam.get("query"));
    }, [location]);

    function onChange(isVisible) {
        if(isVisible)
        {
            getQueryImages(query, (Object.keys(queryImages).length / 10) + 1);
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

  const mapDispatchToProps = (dispatch) => {
    return {
        getNewQueryImages: (searchQuery) => dispatch(getNewQueryImages(searchQuery)),
        getQueryImages: (searchQuery, pageNumber) => dispatch(getQueryImages(searchQuery, pageNumber)),
        setQuery: (searchQuery) => dispatch(setQuery(searchQuery)),
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
