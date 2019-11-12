import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createQuestion, setQuestions } from '../store/actions/questions';
import { makeStyles } from '@material-ui/core/styles';
import QuestionsListWrapper from '../components/questions/QuestionsListWrapper'
import QuestionsForm from '../components/questions/QuestionsForm'
import QuestionsCounter from '../components/questions/QuestionsCounter'
import Typography from '@material-ui/core/Typography';

const Home = ({ questions, createQuestion, setQuestions }) => {
    const classes = useStyles();

    const handleEditQuestion = (updatedQuestion) => {
        const updatedQuestions = questions.map((question) => {
            return question.id === updatedQuestion.id ? updatedQuestion : question
        });
        setQuestions(updatedQuestions);
    }

    const handleDeleteQuestion = (questionToDelete) => {
        if (questionToDelete) {
            const updatedQuestions = questions.filter((question) => question.id !== questionToDelete.id);
            setQuestions(updatedQuestions);
        } else {
            setQuestions([]);
        }
    }

    return (
        <>
            <div className={classes.header}>
                <Typography variant='h4'> The awesome Q/A tool</Typography>
            </div>
            <div className={classes.content}>
                <div className={classes.questionsCounterContainer}>
                    <QuestionsCounter questionsLength={questions.length} />
                </div>
                <div className={classes.questionsListContainer}>
                    <QuestionsListWrapper 
                        questions={questions}
                        handleEditQuestion={handleEditQuestion} 
                        handleDeleteQuestion={handleDeleteQuestion} 
                    />
                    <div className={classes.separator}>
                        <QuestionsForm handleCreateQuestion={createQuestion} />
                    </div>
                </div>
            </div>
        </>
    );
};

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
    questionsCounterContainer: {
        width: '15%',
        marginRight: 10,
    },
    questionsListContainer: {
        width: '40%',
        borderLeft: '1px solid',
        paddingLeft: 10,
    },
    separator: {
        marginTop: 10,
    }
});

Home.propTypes = {
    questions: PropTypes.array.isRequired, 
    createQuestion: PropTypes.func.isRequired, 
    setQuestions: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    questions: state.questions.data,
})

const mapDispatchToProps = (dispatch) => {
    return {
        createQuestion: (question) => dispatch(createQuestion(question)),
        setQuestions: (questions) => dispatch(setQuestions(questions)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

