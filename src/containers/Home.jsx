import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import QuestionsList from '../components/QuestionsList'
import Typography from '@material-ui/core/Typography';

export default function Home(props) {
    const classes = useStyles();

    return (
        <>
            <div className={classes.header}>
                <Typography variant='h4'> The awesome Q/A tool</Typography>
            </div>
            <div className={classes.content}>
                <div className={classes.listContainer}>
                    <QuestionsList />
                </div>
            </div>
        </>
    );
}

const useStyles = makeStyles({
    header: {
        marginTop: 30,
        width: '100%',
        textAlign: 'center',
    },
    content: {
        marginTop: 30,
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
    },
    listContainer: {
        width: '40%',
        borderLeft: '1px solid',
        paddingLeft: 10,
    }
});

