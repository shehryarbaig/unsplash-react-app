import React from 'react';
import {useWallpaperStyle} from "./Wallpaper.style";

const Wallpaper = props => {
    const classes = useWallpaperStyle();

    return (
        <div>
            <h1 className={classes.root}>Wallpaper Page</h1>
        </div>
    );
};


export default Wallpaper;