import shortid from 'shortid';

const initialData = {
    questions: [
        {
            id: shortid.generate(),
            question: 'How to add questions?',
            answer: 'Just use the form below!',
        },
    ],
};

export default initialData;