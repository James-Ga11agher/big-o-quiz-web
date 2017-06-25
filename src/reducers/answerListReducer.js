export default function(state = [], action) {
  switch (action.type) {
    case 'SUBMIT_ANSWER':
      return [...state, action.answer];

    default:
      return state;
  }
}
