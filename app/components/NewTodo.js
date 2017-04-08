import React from 'react';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Octicons';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  RefreshControl,
  ScrollView,
  TextInput
} from 'react-native';

import {createTodo} from '../actions';

class NewTodo extends React.Component {
  state = {
    newTodoText: '',
    loading: false
  };

  addNewTodo = () => {
    const {newTodoText} = this.state;
    this.setState({
      loading: true
    });

    if(newTodoText && newTodoText !== ''){
      this.props.dispatch(createTodo(newTodoText))
        .then(() => {
          this.setState({
            loading: false
          });
          this.props.navigator.pop();
        });
    }
  };

  onBack = () => {
    this.props.navigator.pop();
  };

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={this.onBack}>
            <Icon name={'chevron-left'} size={20} color={'white'}/>
          </TouchableOpacity>
          <Text style={styles.title}>
            {'New Todo'}
          </Text>
          <TouchableOpacity onPress={this.addNewTodo}>
            <Icon name={'check'} size={20} color={'white'}/>
          </TouchableOpacity>
        </View>
        {this.renderScrollViewOrLoading()}
      </View>
    );
  };

  renderScrollViewOrLoading() {
    if(this.state.loading){
      return (
        <View style={{flex: 1}}>
          <Text>
            {'Creating todo'}
          </Text>
        </View>
      )
    } else {
      return (
        <ScrollView
          automaticallyAdjustContentInsets={false}
          contentContainerStyle={styles.scrollViewContainer}
        >
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder={'New Todo'}
              onChangeText={(newTodoText) => {
                this.setState({
                  newTodoText
                })
              }}
            />
          </View>
        </ScrollView>
      );
    }
  }
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
  inputContainer: {
    padding: 5,
    paddingLeft: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#2ecc71'
  },
  input: {
    height: 26
  }
});

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
};

export default connect(mapStateToProps)(NewTodo);
