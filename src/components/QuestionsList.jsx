import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function QuestionsList(props) {
    const classes = useStyles();

    return (
        <>
            <Typography variant='h5'> Created Questions </Typography>
            <div className={classes.questionsContainer}>
                <Typography className={classes.questionText}> How to add questions? </Typography>
                <Typography className={classes.answerText}> Just use the form below! </Typography>
            </div>
                <Button variant="contained" color="primary" className={classes.button}>
                    Sort Questions
                </Button>
                <Button variant="contained" color="secondary" className={classes.button}>
                    Remove Questions
                </Button>
        </>
    );
}

const useStyles = makeStyles({
    questionsContainer: {
        border: '1px solid #A9A9A9',
        borderRadius: '2px',
        marginTop: 10,
        padding: '10px 0 10px 10px',
    },
    button: {
        marginTop: 10,
        marginRight: 10,
    },
    questionText: {
        fontWeight: 'bold'
    },
    answerText: {
        display: 'none',
    }
});