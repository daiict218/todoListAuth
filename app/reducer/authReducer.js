const defaultState = {
  user_id: undefined
}

module.exports = (state = defaultState, action) => {
  switch(action.type){
    //action when user signs in
    case 'AUTH_USER':
      return {
        user_id: action.user_id
      };
      break;

    //action when user signs out
    case 'UNAUTH_USER':
      return {
        user_id: undefined
      };
      break;

    default:
      return state;
  }
}
