import React from 'react';
import {reduxForm} from 'redux-form';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { loginUser, signupUser, addAlert } from '../actions';

class Login extends React.Component {
  state = {
      loading: false
  };

  onSignIn = () => {
    const {dispatch, fields: {email, password}} = this.props;

    this.setState({
      loading: true
    });

    dispatch(loginUser(email.value, password.value)).then(() => {
      this.setState({
        loading: false
      });
    });
  };

  onSignUp = () => {
    const {dispatch, fields: {email, password}} = this.props;

    this.setState({
      loading: true
    });

    dispatch(signupUser(email.value, password.value)).then(() => {
      this.setState({
        loading: false
      });
    });
  };

  render(){
    const { handleSubmit, fields: { email, password } } = this.props;   //reduxForm provides this props [handleSubmit] and fields which we sent in the last line

    // console.log(email, password);

    if(this.state.loading){
      return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>
            {'Loading'}
          </Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {'To do'}
          </Text>
        </View>
        <View style={styles.field}>
          <TextInput
            {...email}                //we need to give these returned property to the textInput
            placeholder={'Email'}
            style={styles.textInput}
          />
          <View>
            {this.renderError(email)}
          </View>
        </View>
        <View style={styles.field}>
          <TextInput
            {...password}           //we need to give these returned property to the textInput
            placeholder={'Password'}
            style={styles.textInput}
          />
          <View>
            {this.renderError(password)}
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.onSignIn}>
            <Text style={styles.button}>
              {'Sign in'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onSignUp}>
            <Text style={styles.button}>
              {'Sign up'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  renderError(field) {
    if(field.touched && field.error){
      console.log(field.error);

      return (
        <Text style={styles.formError}>
          {field.error}
        </Text>
      )
    }
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 20,
    backgroundColor: '#2ecc71'
  },
  titleContainer: {
    padding: 10
  },
  title: {
    color: 'white',
    fontSize: 35,
    marginTop: 20,
    marginBottom: 20
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
  },
  formError: {
    color: 'red'
  }
});

const validate = (formProps) => {
  var errors = {};
  if(!formProps.email){
    errors.email = 'Please enter an email';
  }
  if(!formProps.email){
    errors.password = 'Please enter a password';
  }
  return errors;
};

export default reduxForm({
  form: 'login',
  fields: ['email', 'password'],
  validate: validate
}, null, null)(Login);
