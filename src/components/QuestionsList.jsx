import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';

export default function QuestionsList({ questions }) {
    const classes = useStyles();
    const [showAnswer, setShowAnswer] = useState({});

    const handleQuestionClick = (id) => () => {
        setShowAnswer((answers) => ({ ...answers, [id]: !answers[id] }));
    };

    return (
        <>
            <Typography variant='h5'> Created Questions </Typography>
            {questions.map(({id, question, answer}) => (
                <div className={classes.questionsRow} onClick={handleQuestionClick(id)}>
                    <Typography className={classes.questionText}> {question} </Typography>
                    <Collapse in={showAnswer[id]}>
                        <Typography className={classes.answerText}> {answer} </Typography>
                    </Collapse>
                </div>
            ))}

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