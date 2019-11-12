import React, { useState, useEffect, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import AlertDialog from '../shared/AlertDialog';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import EditQuestionDialog from './EditQuestionDialog';


export default function QuestionsList({ questions, handleEditQuestion, handleDeleteQuestion }) {
    const classes = useStyles();
    const [showAnswer, setShowAnswer] = useState({});
    const [isSortingAsc, setIsSortingAsc] = useState(undefined);
    const [questionsList, setQuestionsList] = useState(questions);
    const [openAlertDialog, setOpenAlertDialog] = useState(false);
    const [questionToEdit, setQuestionToEdit] = useState(undefined);
    const [questionToDelete, setQuestionToDelete] = useState(undefined);
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

    const handleDeleteQuestionClick = (question) => () => {
        setQuestionToDelete(question);
        setOpenAlertDialog(true);
    };

    const handleAlertDialogConfirm = () => {
        handleDeleteQuestion(questionToDelete);
        setQuestionToDelete('');
        setOpenAlertDialog(false);
    }

    const handleEditQuestionClick = (question) => () => {
        setQuestionToEdit(question);
    };

    const handleEditQuestionDialogConfirm = (updatedQuestion) => {
        handleEditQuestion(updatedQuestion);
        setQuestionToEdit(undefined);
    }

    const QuestionsListMap = () => {
        if (questionsList.length === 0) {
            return (
                <SnackbarContent className={classes.snackbar} message="No questions yet :-(" />
            )
        } else {
            return questionsList.map((questionObject) => (
                <div key={questionObject.id} className={classes.questionsRow}>
                    <div>
                        <Typography className={classes.questionText} onClick={handleQuestionClick(questionObject.id)}> {questionObject.question} </Typography>
                        <Collapse in={showAnswer[questionObject.id]}>
                            <Typography className={classes.answerText}> {questionObject.answer} </Typography>
                        </Collapse>
                    </div>
                    <div>
                        <EditIcon onClick={handleEditQuestionClick(questionObject)} className={classes.questionAction} />
                        <DeleteIcon onClick={handleDeleteQuestionClick(questionObject)} className={classes.questionAction} />
                    </div>
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
                description={questionToDelete ? 'Remove question?' : 'Remove all questions?'}
                handleConfirm={handleAlertDialogConfirm}
                setOpen={setOpenAlertDialog}
            />
            <EditQuestionDialog 
                question={questionToEdit} 
                setQuestion={setQuestionToEdit}
                handleConfirm={handleEditQuestionDialogConfirm}
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
        display: 'flex',
        justifyContent: 'space-between',
        border: '1px solid #A9A9A9',
        borderRadius: '3px',
        marginTop: 10,
        padding: 10,
    },
    button: {
        marginTop: 10,
        marginRight: 10,
    },
    questionText: {
        fontWeight: 'bold',
        cursor: 'pointer'
    },
    questionAction: {
        cursor: 'pointer',
        marginLeft: 20
    },
    snackbar: {
        marginTop: 10,
        background: '#e50000',
        color: 'white',
    },
});