import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function QuestionsCounter({ questionsLength }) {
    return (
        <>
            <Typography> Here you find {questionsLength} question. Feel free to create your own questions </Typography>
        </>
    );
}