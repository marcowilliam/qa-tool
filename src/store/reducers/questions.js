import nextId from "react-id-generator";

const initialState = {
    loading: false,
    data: [{
        id: nextId(),
        question: 'How to add questions?',
        answer: 'Just use the form below!',
    }],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default reducer;