import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

const DialogCloseButton = ({ handleClose }) => {
    const classes = useStyles();

    return (
        <div className={classes.closeButton} onClick={handleClose}>
            <IconButton size="small" color="primary">
                <CloseIcon />
            </IconButton>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    closeButton: {
        marginLeft: 'auto',
        paddingRight: theme.spacing(1),
        marginTop: theme.spacing(1),
    }
}));

DialogCloseButton.propTypes = {
    handleClose: PropTypes.func.isRequired,
}

export default DialogCloseButton;