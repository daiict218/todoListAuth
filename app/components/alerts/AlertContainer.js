import React from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Alert from './Alert';

class AlertContainer extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        {this.renderAlerts()}
      </View>
    );
  };

  renderAlerts() {
    return this.props.alerts.map((alert) => {
      return (
        <Alert alert={alert} key={alert.id}/>
      )
    });
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  }
});

const mapStateToProps = (state) => {
  return {
    alerts: state.alerts
  };
}

export default connect(mapStateToProps)(AlertContainer);
