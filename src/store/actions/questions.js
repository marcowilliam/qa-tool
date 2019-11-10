export const CREATE_QUESTION = 'CREATE_QUESTION';
export const SET_QUESTIONS = 'SET_QUESTIONS';

export const createQuestion = (question) => ({
    type: CREATE_QUESTION,
    payload: question
});

export const setQuestions = (questions) => ({
    type: SET_QUESTIONS,
    payload: questions
});