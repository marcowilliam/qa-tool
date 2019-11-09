import shortid from 'shortid';
import { CREATE_QUESTION } from '../actions/questions';

const initialState = {
    loading: false,
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
                ...state,
                data: [
                    ...state.data,
                    action.payload
                ]
            };

        default:
            return state;
    }
};

export default reducer;