export default function(state = 'QUESTION_PAGE', action) {
  switch (action.type) {
    case 'CHANGE_PAGE':
      return state = action.page;

    default:
      return state;
  }
}
