import React from 'react';
import {reduxForm} from 'redux-form';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NavigatorIOS
} from 'react-native';

// import {unauthUser} from '../actions';
import TodoList from './TodoList';

class Main extends React.Component {
  // unauthUser = () => {
  //   this.props.dispatch(unauthUser);
  // };
  //
  // <TouchableOpacity onPress={this.unauthUser}>
  //   <Text>
  //     {'Log Out'}
  //   </Text>
  // </TouchableOpacity>

  render(){
    return (
      <NavigatorIOS
        style={{flex: 1}}
        initialRoute={{
          component: TodoList,
          todo: 'Todo List',
          navigationBarHidden: true
        }}
      />
    );
  };
}

export default Main;
