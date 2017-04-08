import React from 'react';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Octicons';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  RefreshControl,
  ScrollView
} from 'react-native';

const TodoItem = (props) => {
  return (
    <View style={styles.todoContainer}>
      <Text>
        {props.text}
      </Text>
    </View>
  );
};

class TodoList extends React.Component {
  state = {
    refreshing: false
  };

  onLogout = () => {

  };

  addNewTodo = () => {

  };

  onRefresh = () => {

  };

  renderTodos() {
    return this.props.todos.map(todo => {
      return (
        <TodoItem key={todo._id} text={todo.text} id={todo._id}/>
      );
    });
  };

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={this.onLogout}>
            <Icon name={'x'} size={20} color={'white'}/>
          </TouchableOpacity>
          <Text style={styles.title}>
            {'Todo List'}
          </Text>
          <TouchableOpacity onPress={this.addNewTodo}>
            <Icon name={'plus'} size={20} color={'white'}/>
          </TouchableOpacity>
        </View>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />
          }
          automaticallyAdjustContentInsets={false}
          contentContainerStyle={styles.scrollViewContainer}
        >
          {this.renderTodos()}
        </ScrollView>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  topBar: {
    padding: 16,
    paddingTop: 28,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2ecc71'
  },
  title: {
    color: 'white',
    fontSize: 20
  },
  todoContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginTop: -1,
    borderColor: '#ccc'
  }
});

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
};

export default connect(mapStateToProps)(TodoList);
