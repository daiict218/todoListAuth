import axios from 'axios';
import {AsyncStorage} from 'react-native';

import {TODO_URL, TODOS_URL} from '../api';
import {addAlert} from './alertActions';

exports.createTodo = (text) => {
  return (dispatch) => {
    const getUserId = AsyncStorage.getItem('user_id'),
      getUserToken = AsyncStorage.getItem('token');

      return Promise.all([getUserId, getUserToken])
        .then((res) => {
          const userId = JSON.parse(res[0]),
            token = JSON.parse(res[1]);

          return axios.post(TODOS_URL(userId), {text}, {
            headers: {authorization: token}
          }).then((response) => {
            dispatch(addTodo(response.data.todo));
          }).catch((err) => {
            dispatch(addAlert('Could not create todo.'));
          })
        })
        .catch((err) => {
          console.log(err);
        });
  }
};

exports.getTodos = (dispatch) => {
  const getUserId = AsyncStorage.getItem('user_id'),
    getUserToken = AsyncStorage.getItem('token');

    return Promise.all([getUserId, getUserToken])
      .then((res) => {
        const userId = JSON.parse(res[0]),
          token = JSON.parse(res[1]);

        return axios.get(TODOS_URL(userId), {
          headers: {authorization: token}
        }).then((response) => {
          dispatch(setTodos(response.data.todos));
        }).catch((err) => {
          dispatch(addAlert('Could not get todos.'));
        })
      })
      .catch((err) => {
        console.log(err);
      });
}

const addTodo = (newTodo) => {
  return {
    type: 'ADD_TODO',
    newTodo
  }
};

const setTodos = (todos) => {
  return {
    type: 'SET_TODOS',
    todos
  }
};
