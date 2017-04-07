import uuid from 'uuid';
const defaultState = [];

module.exports = (state = defaultState, action) => {
  switch(action.type){
    //action when user signs in
    case 'ADD_ALERT':
      return [
        ...state,
        {
          text: action.text,
          id: uuid.v4()
        }
      ];
      break;

    //action when user signs out
    case 'REMOVE_ALERT':
      return state.filter((alert) => {
        if(alert.id === action.id){
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
