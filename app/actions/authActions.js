import axios from 'axios';
// import * as Keychain from 'react-native-keychain';
import {AsyncStorage} from 'react-native';

import {SIGNIN_URL, SIGNUP_URL} from '../api';
import {addAlert} from './alertActions';

exports.loginUser = (email, password ) => {
  return (dispatch) => {
    return axios.post(SIGNIN_URL, {email, password})
            .then((res) => {
              const {user_id, token} = res.data,
                saveId = AsyncStorage.setItem('user_id', JSON.stringify(user_id)),
                saveToken = AsyncStorage.setItem('token', JSON.stringify(token));

              Promise.all([saveId, saveToken])
                .then(function() {
                  dispatch(authUser(user_id));
                  dispatch(addAlert(token));
                })
                .catch((err) => {
                  console.log(err);
                  dispatch(addAlert('Could not log in.'));
                });
            })
            .catch((err) => {
              console.log(err);
              dispatch(addAlert('Could not log in.'));
            });
  };
};

exports.signupUser = (email, password ) => {
  return (dispatch) => {
    return axios.post(SIGNUP_URL, {email, password})
            .then((res) => {
              const {user_id, token} = res.data,
                saveId = AsyncStorage.setItem('user_id', JSON.stringify(user_id)),
                saveToken = AsyncStorage.setItem('token', JSON.stringify(token));

              Promise.all([saveId, saveToken])
                .then(function() {
                  dispatch(authUser(user_id));
                  dispatch(addAlert(token));
                })
                .catch((err) => {
                  console.log(err);
                  dispatch(addAlert('Could not log in.'));
                });
            })
            .catch((err) => {
              console.log(err);
              dispatch(addAlert('Could not sign up.'));
            });
  };
};

const authUser = (user_id) => {
  return {
    type: 'AUTH_USER',
    user_id: user_id
  };
}

exports.unauthUser = {
  type: 'UNAUTH_USER'
};
