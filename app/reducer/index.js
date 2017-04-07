import uuid from 'uuid';

export default function(state, action){
  switch (action.type) {
    case 'ADD_TODO':
      const newTodos = [
        ...state.todos,
        {
          text: action.text,
          id: uuid.v4()
        }
      ];

      return {
        todos: newTodos
      };
      break;

    case 'DELETE_TODO':
      const newTodo = state.todos.filter((todo) => {
        if(todo.id === action.id){
          return false;
        }
        return true;
      });

      return {
        todos: newTodo
      };
      break;

    default:
      return state;
  }
}
