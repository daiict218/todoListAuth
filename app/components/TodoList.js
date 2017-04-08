import React from 'react';
import Icon from 'react-native-vector-icons/Octicons';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

class TodoList extends React.Component {
  onLogout = () => {

  };

  addNewTodo = () => {

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
  }
});

export default TodoList;
