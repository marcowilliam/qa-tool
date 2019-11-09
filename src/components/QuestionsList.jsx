import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';

export default function QuestionsList() {
    const classes = useStyles();
    const [showAnswer, setShowAnswer] = useState(false);

    const handleQuestionClick = (id) => () => {
        setShowAnswer((answersShown) => ({ ...answersShown, [id]: !answersShown[id] }));
    };

    return (
        <>
            <Typography variant='h5'> Created Questions </Typography>
            <div className={classes.questionsRow} onClick={handleQuestionClick(1)}>
                <Typography className={classes.questionText}> How to add questions? </Typography>
                <Collapse in={!showAnswer[1]}>
                    <Typography className={classes.answerText}> Just use the form below! </Typography>
                </Collapse>
            </div>
            <div className={classes.questionsRow} onClick={handleQuestionClick(2)}>
                <Typography className={classes.questionText}> How to add questions? </Typography>
                <Collapse in={!showAnswer[2]}>
                    <Typography className={classes.answerText}> Just use the form below! </Typography>
                </Collapse>
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
    questionsRow: {
        border: '1px solid #A9A9A9',
        borderRadius: '3px',
        marginTop: 10,
        padding: '10px 0 10px 10px',
        cursor: 'pointer'
    },
    button: {
        marginTop: 10,
        marginRight: 10,
    },
    questionText: {
        fontWeight: 'bold'
    },
});