import React, { useState } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { Formik, ErrorMessage, Form } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import LoadingButton from '../shared/LoadingButton';

const QuestionsForm = ({ questionObject, handleCreateQuestion, handleEditQuestion }) => {
    const classes = useStyles();
    const [isDelayAdded, setIsDelayAdded] = useState(false);
    const [isCreatingQuestion, setIsCreatingQuestion] = useState(false);

    return (
        <>
            <Typography variant='h5'> {`${questionObject ? 'Edit' : 'Create a new'} question`} </Typography>
            <Formik
                initialValues={{
                    question: questionObject ? questionObject.question : '',
                    answer: questionObject ? questionObject.answer : '',
                }}
                validate={values => {
                    const errors = {};
                    if (!values.question) {
                        errors.question = 'Question Required';
                    }
                    if (!values.answer) {
                        errors.answer = 'Answer Required';
                    }
                    return errors;
                }}
                onSubmit={(values, { resetForm }) => {
                    const delayTimeInMiliseconds = isDelayAdded ? 5000 : 0;
                    setIsCreatingQuestion(true);
                    setTimeout(() => {
                        if (questionObject) {
                            handleEditQuestion({
                                ...values,
                                id: questionObject.id,
                            })
                        } else {
                            handleCreateQuestion({
                                ...values,
                                id: shortid.generate(),
                            });
                        }
                        setIsCreatingQuestion(false);
                        resetForm();
                    }, delayTimeInMiliseconds);
                }}
            >
                {({ handleChange, values }) => (
                    <Form className={classes.form}>
                        <div className={classes.formRow}>
                            <TextField
                                fullWidth
                                value={values.question}
                                label="Question"
                                type="text"
                                name="question"
                                onChange={handleChange}
                                variant="outlined"
                            />
                            <ErrorMessage className={classes.errorMessage} name="question" component="div" />
                        </div>
                        <div className={classes.formRow}>
                            <TextField
                                fullWidth
                                value={values.answer}
                                label="Answer"
                                type="text"
                                name="answer"
                                onChange={handleChange}
                                variant="outlined"
                            />
                            <ErrorMessage className={classes.errorMessage} name="answer" component="div" />
                        </div>
                        <Checkbox
                            checked={isDelayAdded}
                            onChange={(event) => setIsDelayAdded(event.target.checked)}
                            value="isDelayAdded"
                        />
                        <LoadingButton
                            isLoading={isCreatingQuestion}
                            type="submit"
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                        >
                            {`${questionObject ? 'Edit' : 'Create'} question`}
                        </LoadingButton>
                    </Form>
                )}
            </Formik>
        </>
    );
}

QuestionsForm.propTypes = {
    questionObject: PropTypes.object,
    handleCreateQuestion: PropTypes.func,
    handleEditQuestion: PropTypes.func,
}

const useStyles = makeStyles((theme) => ({
    form: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    formRow: {
        marginTop: theme.spacing(1),
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '100%',
    },
    errorMessage: {
        margin: theme.spacing(0.5),
        color: '#e50000',
        fontSize: 10,
    }
}));

export default QuestionsForm;