import shortid from 'shortid';
import { CREATE_QUESTION, SET_QUESTIONS } from '../actions/questions';

const initialState = {
    data: [{
        id: shortid.generate(),
        question: 'How to add questions?',
        answer: 'Just use the form below!',
    }],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_QUESTION:
            return {
                data: [
                    ...state.data,
                    action.payload
                ]
            };
        case SET_QUESTIONS:
            return { data: action.payload };
        default:
            return state;
    }
};

export default reducer;