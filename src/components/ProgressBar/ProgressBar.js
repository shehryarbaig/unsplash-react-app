import React from 'react';
import VisibilitySensor from "react-visibility-sensor";
import { CircularProgress } from '@material-ui/core';

const ProgressBar = props => {

    const { fetchMoreImages } = props;

    function onChange(isVisible) {

        if (isVisible) {
            fetchMoreImages();
        }
    }

    return (
        <VisibilitySensor onChange={onChange}>
            <CircularProgress />
        </VisibilitySensor>
    );
};

export default ProgressBar;