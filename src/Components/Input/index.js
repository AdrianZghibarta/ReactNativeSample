"use strict";
import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import Common from '../../Resources/Common';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Input extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inputValue: this.props.value,
    };
  }

  focus() {
    this.input.focus();
  }

  render() {
    
    let rightImage = null;
    let rightImageName = this.props.rightImageName;
    let bottomLine = (<View style={styles.line} />);
    let rightImageStyle = [styles.rightImage];
    let button = null;

    if (rightImageName) {
      rightImage = (
        <View
          style={[styles.rightImageContainer]}
        >
          <Icon
            name={rightImageName}
            style={rightImageStyle}
          />
        </View>
      );
    }

    if (this.props.actAsButton === true) {
      button = (
        <TouchableHighlight
          underlayColor='transparent'
          onPress={this.props.onButtonPress}
          style={[Common.Styles.fullDimensions]}
        >
          <View/>
        </TouchableHighlight>
      );
    }

    this.state.inputValue = this.props.value;

    return (
      <View style={[(this.state.isValid === false ? styles.invalidRoot : styles.root), this.props.style]}>
        <View
          style={[styles.inputContent]}
        >
          <TextInput
            ref = {(ref) => {this.input = ref;}}
            value = { this.props.value }
            keyboardType = { this.props.keyboardType }
            placeholder = { this.props.placeholder }
            placeholderTextColor = { Common.Colors.blueFocus }
            selectionColor = { Common.Colors.blue }
            underlineColorAndroid = 'transparent'
            secureTextEntry = { this.props.secureTextEntry }
            returnKeyType = { this.props.returnKeyType }
            maxLength = { this.props.maxLength }
            onSubmitEditing = { this.props.onSubmitEditing }
            onChangeText = {(text) => {
              this.props.onChangeText(text);
            }}
            onFocus={(el) => {
              this.setState({isValid: true});
              if (typeof this.props.onFocus === 'function') {
                this.props.onFocus(el);
              }
            }}
            multiline={this.props.multiline}
            style = {[ 
              styles.input, 
              this.props.textInputStyle,
            ]}
          />
          {rightImage}
        </View>
        {bottomLine}
        {button}
      </View>
    );
  }
}

Input.propTypes = {
  value: React.PropTypes.string,
  keyboardType: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  secureTextEntry: React.PropTypes.bool,
  returnKeyType: React.PropTypes.string,
  maxLength: React.PropTypes.number,
  onSubmitEditing: React.PropTypes.func,
  onChangeText: React.PropTypes.func,
  onFocus: React.PropTypes.func,
  style: React.PropTypes.array,
  textInputStyle: React.PropTypes.array,
  rightImageName: React.PropTypes.string,
  actAsButton: React.PropTypes.bool,
  onButtonPress: React.PropTypes.func,
};

Input.defaultProps = {
  value: '',
  keyboardType: 'default',
  secureTextEntry: false,
  returnKeyType: 'next',
  actAsButton: false,
};

const defaultFontFamily = Common.Fonts.ExpletusSans_Bold;
const defaultFontSize = 19;
const defaultTextColor = Common.Colors.blue;
const styles = StyleSheet.create({

  root: {
    flexDirection: 'column',
    height: 50,
    minWidth: 250,
    backgroundColor: 'transparent',
  },

  inputContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: 'transparent',
  },

  input: {
    fontFamily: defaultFontFamily,
    fontSize: defaultFontSize,
    flex: 1,
    textAlign: 'left',
    marginBottom: 0,
    color: defaultTextColor,
    padding: 0,
    backgroundColor: 'transparent',
  },

  rightImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  rightImage: {
    fontFamily: defaultFontFamily,
    fontSize: defaultFontSize,
    color: Common.Colors.blue,
    backgroundColor: 'transparent',
  },

  line: {
    height: 1,
    backgroundColor: Common.Colors.blue,
  }
});