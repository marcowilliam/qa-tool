export const CREATE_QUESTION = 'CREATE_QUESTION';

export const createQuestion = (question) => ({
    type: CREATE_QUESTION,
    payload: question
});