import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

class Login extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {'To do'}
          </Text>
        </View>
        <View style={styles.field}>
          <TextInput
            placeholder={'Email'}
            style={styles.textInput}
          />
        </View>
        <View style={styles.field}>
          <TextInput
            placeholder={'Password'}
            style={styles.textInput}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <Text style={styles.button}>
              {'Sign in'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.button}>
              {'Sign up'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 20,
    backgroundColor: '#aaa'
  },
  titleContainer: {
    padding: 10
  },
  title: {
    color: 'white',
    fontSize: 35
  },
  field: {
    borderRadius: 5,
    padding: 5,
    paddingLeft: 8,
    margin: 7,
    marginTop: 0,
    backgroundColor: 'white'
  },
  textInput: {
    height: 26
  },
  buttonContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  button: {
    fontSize: 30,
    color: 'white'
  }
});

export default Login;
