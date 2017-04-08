module.exports = (state=[], action) => {
  switch(action.type){
    //action when user signs in
    case 'ADD_TODO':
      return [
        ...state,
        action.newTodo
      ];
      break;

    case 'SET_TODOS':
      return action.todos;

    //action when user signs out
    case 'REMOVE_TODO':
      return state.filter((todo) => {
        if(todo._id === action.id){
          return true;
        } else {
          return false;
        }
      });
      break;

    default:
      return state;
  }
}
