import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AlertDialog from '../shared/AlertDialog';
import EditQuestionDialog from './EditQuestionDialog';
import QuestionsList from './QuestionsList';

const QuestionsListWrapper = ({ questions, handleEditQuestion, handleDeleteQuestion }) => {
    const classes = useStyles();
    const [isSortingAsc, setIsSortingAsc] = useState(undefined);
    const [questionsList, setQuestionsList] = useState(questions);
    const [openAlertDialog, setOpenAlertDialog] = useState(false);
    const [questionToEdit, setQuestionToEdit] = useState(undefined);
    const [questionToDelete, setQuestionToDelete] = useState(undefined);
    const sortedQuestions = useMemo(() => [...questions].sort(({ question }, { question: previewQuestion }) => {
        return question < previewQuestion ? -1 : 1;
    }), [questions]);

    useEffect(() => {
        if (isSortingAsc === undefined) {
            setQuestionsList(questions);
        } else if (isSortingAsc) {
            setQuestionsList(sortedQuestions);
        } else {
            setQuestionsList([...sortedQuestions].reverse());
        }
    }, [questions])

    const handleSortQuestions = () => {
        if (isSortingAsc === undefined) {
            setQuestionsList(sortedQuestions);
            setIsSortingAsc(true);
        } else {
            setQuestionsList([...questionsList].reverse());
            setIsSortingAsc(!isSortingAsc);
        }
    }

    const handleDeleteQuestionClick = (question) => {
        setQuestionToDelete(question);
        setOpenAlertDialog(true);
    };

    const handleAlertDialogConfirm = () => {
        handleDeleteQuestion(questionToDelete);
        setQuestionToDelete('');
        setOpenAlertDialog(false);
    }

    const handleEditQuestionClick = (question) => {
        setQuestionToEdit(question);
    };

    const handleEditQuestionDialogConfirm = (updatedQuestion) => {
        handleEditQuestion(updatedQuestion);
        setQuestionToEdit(undefined);
    }

    return (
        <>
            <Typography variant='h5'> Created Questions </Typography>
            <QuestionsList 
                questions={questionsList}
                handleEditQuestionClick={handleEditQuestionClick}
                handleDeleteQuestionClick={handleDeleteQuestionClick}
            />
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
            <Button variant="contained" color="primary" className={classes.button} onClick={handleSortQuestions}>
                Sort Questions
            </Button>
            <Button variant="contained" color="secondary" className={classes.button} onClick={() => setOpenAlertDialog(true)}>
                Remove Questions
            </Button>
        </>
    );
}

QuestionsListWrapper.propTypes = {
    questions: PropTypes.array.isRequired,
    handleEditQuestion: PropTypes.func.isRequired,
    handleDeleteQuestion: PropTypes.func.isRequired,
}

const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
}));

export default QuestionsListWrapper;