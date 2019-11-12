import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createQuestion, setQuestions } from '../store/actions/questions';
import { makeStyles } from '@material-ui/core/styles';
import QuestionsListWrapper from '../components/questions/QuestionsListWrapper'
import QuestionsForm from '../components/questions/QuestionsForm'
import QuestionsCounter from '../components/questions/QuestionsCounter'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

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
        <Container maxWidth='md'>
            {/* <> */}
            <div className={classes.header}>
                <Typography variant='h4'> The awesome Q/A tool</Typography>
            </div>
            <Grid container spacing={3} className={classes.gridContainer}>
                {/* <div className={classes.content}> */}
                {/* <div className={classes.questionsCounterContainer}> */}
                <Grid item md={3} xs={12}>
                    <QuestionsCounter questionsLength={questions.length} />
                </Grid>
                {/* </div> */}
                {/* <div className={classes.questionsListContainer}> */}
                <Grid item md={9} xs={12} className={classes.questionsListGrid}>
                    <QuestionsListWrapper
                        questions={questions}
                        handleEditQuestion={handleEditQuestion}
                        handleDeleteQuestion={handleDeleteQuestion}
                    />
                    <div className={classes.separator}>
                        <QuestionsForm handleCreateQuestion={createQuestion} />
                    </div>
                </Grid>
                {/* </div> */}
                {/* </div> */}
            </Grid>
            {/* </> */}
        </Container>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    header: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
        width: '100%',
        textAlign: 'center',
    },
    // content: {
    //     marginTop: theme.spacing(4),
    //     display: 'flex',
    //     width: '100%',
    //     justifyContent: 'center',
    // },
    // questionsCounterContainer: {
    //     width: '15%',
    //     marginRight: theme.spacing(2),
    // },
    gridContainer: {
        // background: 'red'
    },
    questionsListGrid: {
        // width: '100%',
        [theme.breakpoints.up('md')]: {
        borderLeft: '1px solid',
        },
        [theme.breakpoints.down('sm')]: {
            borderTop: '1px solid',
        },
        // paddingLeft: theme.spacing(1),
    },
    separator: {
        marginTop: theme.spacing(3),
    }
}));

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

