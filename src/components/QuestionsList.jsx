import React, { useState, useEffect, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';

export default function QuestionsList({ questions }) {
    const classes = useStyles();
    const [showAnswer, setShowAnswer] = useState({});
    const [isSortingAsc, setIsSortingAsc] = useState(undefined);
    const [questionsList, setQuestionsList] = useState(questions);
    const sortedQuestions = useMemo(() => [...questions].sort(({ question }, { question: previewQuestion }) => {
        return question < previewQuestion ? -1 : 1;
    }), [questions]);

    useEffect(() => {
        if (isSortingAsc == undefined) {
            setQuestionsList(questions);
        } else if (isSortingAsc) {
            setQuestionsList(sortedQuestions);
        } else {
            setQuestionsList([...sortedQuestions].reverse());
        }
    }, [questions])

    const handleQuestionClick = (id) => () => {
        setShowAnswer((answers) => ({ ...answers, [id]: !answers[id] }));
    };

    const sortQuestions = () => {
        if (isSortingAsc == undefined) {
            setQuestionsList(sortedQuestions);
            setIsSortingAsc(true);
        } else {
            setQuestionsList([...questionsList].reverse());
            setIsSortingAsc(!isSortingAsc);
        }
    }

    return (
        <>
            <Typography variant='h5'> Created Questions </Typography>
            {questionsList.map(({ id, question, answer }) => (
                <div key={id} className={classes.questionsRow} onClick={handleQuestionClick(id)}>
                    <Typography className={classes.questionText}> {question} </Typography>
                    <Collapse in={showAnswer[id]}>
                        <Typography className={classes.answerText}> {answer} </Typography>
                    </Collapse>
                </div>
            ))}

            <Button variant="contained" color="primary" className={classes.button} onClick={sortQuestions}>
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