import React from 'react';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import {unauthUser} from '../actions';

class Main extends React.Component {
  unauthUser = () => {
    this.props.dispatch(unauthUser);
  };

  render(){
    return (
      <View style={styles.container}>
        <Text>
          {'Hey there'}
        </Text>
        <TouchableOpacity onPress={this.unauthUser}>
          <Text>
            {'Log Out'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 20,
    backgroundColor: '#aaa'
  }
});

export default connect()(Main);
