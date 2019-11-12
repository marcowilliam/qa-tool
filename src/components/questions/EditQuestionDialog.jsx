import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
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

export default EditQuestionDialog;