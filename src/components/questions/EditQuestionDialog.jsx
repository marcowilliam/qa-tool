import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import QuestionsForm from './QuestionsForm';

const EditQuestionDialog = ({ question, setQuestion, handleConfirm }) => {

    return (
        <>
            <Dialog
                open={!!question}
                onClose={() => setQuestion(undefined)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <QuestionsForm questionObject={question} handleEditQuestion={handleConfirm} />
                </DialogContent>
            </Dialog>
        </>
    );
}

EditQuestionDialog.propTypes = {
    question: PropTypes.object,
    setQuestion: PropTypes.func.isRequired,
    handleConfirm: PropTypes.func.isRequired,
}

export default EditQuestionDialog;