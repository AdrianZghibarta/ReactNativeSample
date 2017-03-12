'use strict';
import React, { Component } from 'react';
import {
  TouchableHighlight,
  Text,
  StyleSheet
} from 'react-native';

import Common from '../../Resources/Common';

export default class Button extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <TouchableHighlight 
        style={[Common.Styles.centeredContent, styles.button, this.props.style]}
        underlayColor={Common.Colors.blueFocus}
        onPress={this.props.onPress}
      >
        <Text style={[styles.buttonText]}>
          {this.props.title}
        </Text>
      </TouchableHighlight>
    );
  }
}

Button.propTypes = {
  title: React.PropTypes.string,
  onPress: React.PropTypes.func,
};
Button.defaultProps = {
  title: 'Action',
  onPress: null,
};

const styles = StyleSheet.create({
  
  button: {
    backgroundColor: Common.Colors.blue,
    minHeight: 50,
    minWidth: 250,
    borderRadius: 25,
  },
  
  buttonText: {
    fontFamily: Common.Fonts.ExpletusSans_Bold,
    fontSize: Common.Dimens.textMedium2,
    backgroundColor: 'transparent',
    color: 'white',
  },
  
});