import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  ScrollView
} from 'react-native';

// import TodoItem from './TodoItem';

// import {addTodo} from '../actions';

import Login from './Login';

class App extends React.Component {

  render(){
    return (
      <Login />
    );
  }
  // constructor(props){
  //   super(props);
  //
  //   this.state = {
  //     newTodoText: ''
  //   };
  // };
  //
  // onInputChange = (event) => {
  //   this.setState({newTodoText: event.nativeEvent.text});
  // }
  //
  // addNewTodo = () => {
  //   let { newTodoText } = this.state;
  //
  //   if(newTodoText && newTodoText != ''){
  //     this.setState({newTodoText: ''});
  //     this.props.dispatch(addTodo(newTodoText))
  //   }
  // };
  //
  // render(){
  //   return (
  //     <View style={styles.container}>
  //       <StatusBar barStyle='light-content'/>
  //         <View style={styles.topbar}>
  //           <Text style={styles.title}>{'Hello World'}</Text>
  //         </View>
  //         <View style={styles.inputContainer}>
  //           <TextInput
  //             onChange={this.onInputChange}
  //             value={this.state.newTodoText}
  //             onSubmitEditing={this.addNewTodo}
  //             returnKeyType={'done'}
  //             placeholder={'Add New todo'}
  //             style={styles.input}
  //           />
  //         </View>
  //         <ScrollView automaticallyAdjustContentInsets={false}>
  //           {this.renderTodos()}
  //         </ScrollView>
  //     </View>
  //   );
  // };
  //
  // renderTodos(){
  //   return this.props.todos.map((todo) => {
  //     return (
  //       <TodoItem text={todo.text} key={todo.id} id={todo.id}/>
  //     )
  //   });
  // };
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  topbar: {
    padding: 16,
    paddingTop: 28,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2ecc77'
  },
  title: {
    color: 'white',
    fontSize: 20
  },
  inputContainer: {
    padding: 8,
    paddingTop: 0,
    backgroundColor: '#2ecc77'
  },
  input: {
    height: 26,
    padding: 4,
    paddingLeft: 8,
    borderRadius: 8,
    backgroundColor: 'white'
  }
});

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps)(App);
