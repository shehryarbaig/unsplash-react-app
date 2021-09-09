import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useSearchBarStyles } from './SearchBar.style';


const SearchBar = props => {

    const {customStyles, inputCustomStyle} = props;
    const classes = useSearchBarStyles();
    const [searchQuery, setSearchQuery] = useState("");
    const history = useHistory();

    const handleOnClick = (query) => {
        history.push(`/search/?query=${query}`
        );
      }


    return (
        <div className={classes.searchContainer}>
            <div className={classes.search} style={customStyles}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search free high-resolution photos"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                style={inputCustomStyle}
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" ? handleOnClick(searchQuery) : null}

              />
            </div>
          </div>
    );
};



export default SearchBar;
