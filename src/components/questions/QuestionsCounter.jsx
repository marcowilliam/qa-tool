import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const QuestionsCounter = ({ questionsLength }) => {
    return (
        <>
            <Typography>
                Here you find {questionsLength || 'no'} questions. Feel free to create your own questions!
            </Typography>
        </>
    );
}

QuestionsCounter.propTypes = {
    questionsLength: PropTypes.number.isRequired,
}

export default QuestionsCounter;
