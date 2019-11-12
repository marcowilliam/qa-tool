import React, { useState, useEffect, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const QuestionsList = ({ questions, handleEditQuestionClick, handleDeleteQuestionClick }) => {
    const classes = useStyles();
    const [showAnswer, setShowAnswer] = useState({});

    const handleQuestionClick = (id) => () => {
        setShowAnswer((answers) => ({ ...answers, [id]: !answers[id] }));
    };
    
    if (questions.length === 0) {
        return (
            <SnackbarContent className={classes.snackbar} message="No questions yet :-(" />
        )
    } else {
        return questions.map((questionObject) => (
            <div key={questionObject.id} className={classes.questionsRow}>
                <div>
                    <Typography className={classes.questionText} onClick={handleQuestionClick(questionObject.id)}> {questionObject.question} </Typography>
                    <Collapse in={showAnswer[questionObject.id]}>
                        <Typography className={classes.answerText}> {questionObject.answer} </Typography>
                    </Collapse>
                </div>
                <div>
                    <EditIcon onClick={() => handleEditQuestionClick(questionObject)} className={classes.questionAction} />
                    <DeleteIcon onClick={() => handleDeleteQuestionClick(questionObject)} className={classes.questionAction} />
                </div>
            </div>
        ));
    }
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

export default QuestionsList;