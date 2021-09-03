import React from 'react';
import { useSearchBarStyles } from './SearchBar.style';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';


const SearchBar = props => {

    const classes = useSearchBarStyles();
    const [searchQuery, setSearchQuery] = useState("");
    const history = useHistory();

    const handleOnClick = (query) => {
        history.push(`/search/?query=${query}`
        );
      }


    return (
        <div className={classes.searchContainer}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" ? handleOnClick(searchQuery) : null}

              />
            </div>
          </div>
    );
};



export default SearchBar;