import uuid from 'uuid';
const defaultState = [{
  _id: 'asdfasd12312312fas',
  text: 'Hey Props'
}];

module.exports = (state = defaultState, action) => {
  switch(action.type){
    //action when user signs in
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
          id: uuid.v4()
        }
      ];
      break;

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
