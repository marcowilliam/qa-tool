import { CREATE_QUESTION, SET_QUESTIONS } from '../actions/questions';
import initialData from '../../initialData';

const initialState = {
    data: initialData.questions,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case CREATE_QUESTION:
        return {
            data: [
                ...state.data,
                action.payload,
            ],
        };
    case SET_QUESTIONS:
        return { data: action.payload };
    default:
        return state;
    }
};

export default reducer;