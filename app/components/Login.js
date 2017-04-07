import React from 'react';
import {reduxForm} from 'redux-form';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

class Login extends React.Component {
  onSignIn = () => {
    const {email, password} = this.props.fields;
    // console.log(email.value, password.value);
  }

  render(){
    const { handleSubmit, fields: { email, password } } = this.props;   //reduxForm provides this props [handleSubmit] and fields which we sent in the last line

    // console.log(email, password);

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
          <TouchableOpacity>
            <Text style={styles.button} onPress={this.onSignIn}>
              {'Sign in'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.button} onPress={this.onSignUp}>
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

//reduxForm take 3 arguments, an object describing form, mapStateToProps and mapActionsToProps
