import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogCloseButton from './DialogCloseButton'

const AlertDialog = ({ open, title, description, setOpen, handleConfirm }) => {
    const classes = useStyles();

    return (
        <div className={classes.dialog}>
            <Dialog
                fullWidth={true}
                maxWidth={'xs'}
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogCloseButton handleClose={() => setOpen(false)}/>
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {description}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleConfirm} color="secondary" variant="contained" autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

AlertDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    setOpen: PropTypes.func.isRequired,
    handleConfirm: PropTypes.func.isRequired,
}

const useStyles = makeStyles((theme) => ({
    dialog: {
        width: '500px',
    },
}));

export default AlertDialog;