import React, { useState, useEffect, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import AlertDialog from '../shared/AlertDialog';

export default function QuestionsList({ questions, setQuestions }) {
    const classes = useStyles();
    const [showAnswer, setShowAnswer] = useState({});
    const [isSortingAsc, setIsSortingAsc] = useState(undefined);
    const [questionsList, setQuestionsList] = useState(questions);
    const [openAlertDialog, setOpenAlertDialog] = useState(false);
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

    const handleAlertDialogConfirm = () => {
        setQuestions([]);
        setOpenAlertDialog(false);
    }

    const QuestionsListMap = () => {
        if (questionsList.length === 0) {
            return (
                <SnackbarContent className={classes.snackbar} message="No questions yet :-(" />
            )
        } else {
            return questionsList.map(({ id, question, answer }) => (
                <div key={id} className={classes.questionsRow} onClick={handleQuestionClick(id)}>
                    <Typography className={classes.questionText}> {question} </Typography>
                    <Collapse in={showAnswer[id]}>
                        <Typography className={classes.answerText}> {answer} </Typography>
                    </Collapse>
                </div>
            ));
        }
    }

    return (
        <>
            <Typography variant='h5'> Created Questions </Typography>
            <QuestionsListMap />
            <AlertDialog
                open={openAlertDialog}
                title={'Remove'}
                description={'Remove all questions?'}
                handleConfirm={handleAlertDialogConfirm}
                setOpen={setOpenAlertDialog}
            />
            <Button variant="contained" color="primary" className={classes.button} onClick={sortQuestions}>
                Sort Questions
            </Button>
            <Button variant="contained" color="secondary" className={classes.button} onClick={() => setOpenAlertDialog(true)}>
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
    snackbar: {
        marginTop: 10,
        background: '#e50000',
        color: 'white',
    },
});