import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function QuestionsForm() {
    const classes = useStyles();

    return (
        <>
            <Typography variant='h5'> Create a new question </Typography>
            <Formik
                initialValues={{
                    question: '',
                    answer: ''
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
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 5000);
                }}
            >
                {({ isSubmitting, handleChange }) => (
                    <Form>
                        <div className={classes.formRow}>
                            <TextField fullWidth label="Question" type="text" name="question" onChange={handleChange} variant="outlined" />
                            <ErrorMessage className={classes.errorMessage} name="question" component="div" />
                        </div>
                        <div className={classes.formRow}>
                            <TextField fullWidth label="Answer" type="text" name="answer" onChange={handleChange} variant="outlined" />
                            <ErrorMessage className={classes.errorMessage} name="answer" component="div" />
                        </div>
                        <Button type="submit" variant="contained" color="primary" className={classes.button}>
                            Create question
                        </Button>
                    </Form>
                )}
            </Formik>
        </>
    );
}

const useStyles = makeStyles({
    formRow: {
        marginTop: 10,
        height: '10%'
    },
    button: {
        marginTop: 10,
        marginRight: 10,
        background: 'green',
        color: 'white',
    },
    errorMessage: {
        color: '#e50000',
        fontSize: 10,
    }
});