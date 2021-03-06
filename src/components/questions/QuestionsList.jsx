import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import grey from '@material-ui/core/colors/grey';

const QuestionsList = ({ questions, handleEditQuestionClick, handleDeleteQuestionClick }) => {
    const classes = useStyles();
    const [showAnswer, setShowAnswer] = useState({});

    const handleQuestionClick = (id) => () => {
        setShowAnswer((answers) => ({ ...answers, [id]: !answers[id] }));
    };

    if (questions.length === 0) {
        return (
            <SnackbarContent className={classes.snackbar} message="No questions yet :-(" />
        );
    } else {
        return questions.map((questionObject) => (
            <div key={questionObject.id} className={classes.questionsRow}>
                <div>
                    <Typography
                        className={classes.questionText}
                        onClick={handleQuestionClick(questionObject.id)}
                    >
                        {questionObject.question}
                    </Typography>
                    <Collapse in={showAnswer[questionObject.id]}>
                        <Typography> 
                            {questionObject.answer} 
                        </Typography>
                    </Collapse>
                </div>
                <div>
                    <IconButton
                        size="small"
                        onClick={() => handleEditQuestionClick(questionObject)}
                        color="primary"
                    >
                        <EditIcon />
                    </IconButton>
                    <IconButton
                        size="small"
                        onClick={() => handleDeleteQuestionClick(questionObject)}
                        color="secondary"
                    >
                        <DeleteIcon />
                    </IconButton>
                </div>
            </div>
        ));
    }
};

QuestionsList.propTypes = {
    questions: PropTypes.array.isRequired,
    handleEditQuestionClick: PropTypes.func.isRequired,
    handleDeleteQuestionClick: PropTypes.func.isRequired,
};

const useStyles = makeStyles((theme) => ({
    questionsRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid',
        borderColor: grey['400'],
        borderRadius: '3px',
        marginTop: theme.spacing(1),
        padding: theme.spacing(1),
    },
    questionText: {
        fontWeight: 'bold',
        cursor: 'pointer',
    },
    snackbar: {
        marginTop: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
        color: 'white',
    },
}));

export default QuestionsList;