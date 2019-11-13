import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const Tooltip = ({ children, text }) => {
    const classes = useStyles();

    return (
        <div className={classes.tooltip}>
            {children}
            <span className={classes.tooltipText}>{text}</span>
        </div>
    );
};

Tooltip.propTypes = {
    text: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
};

const useStyles = makeStyles((theme) => ({
    tooltip: {
        position: 'relative',
        display: 'inline-block',
        cursor: 'default',
        '&:hover $tooltipText': {
            visibility: 'visible',
        },
    },
    tooltipText: {
        visibility: 'hidden',
        width: '100%',
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '6px',
        padding: '10px 20px',
        position: 'absolute',
        zIndex: theme.zIndex.tooltip,
        marginLeft: '80%',
        '&:after': {
            content: '""',
            position: 'absolute',
            bottom: '100%',
            left: '10%',
            borderWidth: '5px',
            borderStyle: 'solid',
            borderColor: 'transparent transparent black transparent',
        },
    },
}));

export default Tooltip;