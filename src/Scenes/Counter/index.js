"use strict";
import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from 'react-native';

import HelloMessage from "../../Utils/HelloMessage";

export default class CounterScene extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counterValue: 0,
    };
  }
  
  static showGeneralMessage() {
    HelloMessage.getGeneralMessage((error, message) => {
      if (error) {
        alert(error.message);
      }
      else {
        alert(message);
      }
    });
  }
  
  static async showHelloMessage() {
    try {
      let helloMessage = await HelloMessage.getMessage('Senior Adrian');
      alert(helloMessage);
    }
    catch(error) {
      alert(error.message);
    }
  }

  render() {
    return (
      <View style={[styles.rootView, this.props.style]}>
        <Text style={[styles.titleText]}>
          {this.props.title}
        </Text>
        <Text style={[styles.counterText]}>
          {'Counter value: ' + this.state.counterValue}
        </Text>
        <TouchableHighlight
          underlayColor="green"
          style={[styles.incrementButton]}
          onPress={() => {
            this.setState({counterValue: ++this.state.counterValue});
            CounterScene.showGeneralMessage();
          }}
        >
          <Text style={[styles.buttonText]}>
            {'+1'}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

CounterScene.propTypes = {
  title: React.PropTypes.string,
};
CounterScene.defaultProps = {
  title: 'Simple Incrementer App'
};

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  counterText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
    margin: 15,
  },
  incrementButton: {
    padding: 15,
    borderRadius: 5,
    backgroundColor: 'blue',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  }
});

