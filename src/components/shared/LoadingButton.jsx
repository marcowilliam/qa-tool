import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const LoadingButton = ({ isLoading, children, ...rest }) => {
    return (
        <Button {...rest} >
            {isLoading ?
                <CircularProgress color='inherit' size={23} />
                :
                children
            }
        </Button>
    );
};

LoadingButton.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    children: PropTypes.string.isRequired,
};

export default LoadingButton;