"use strict";
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import Button from "../../Components/Button";
import Common from "../../Resources/Common";

export default class CounterScene extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counterValue: 0,
    };
  }

  render() {
    return (
      <View style={[styles.rootView, this.props.style]}>

        <Image source={require("../../Resources/Images/BackImage/img.jpg")} style={[Common.Styles.backgroundImage]}/>
        
        <Text style={[styles.titleText]}>
          {this.props.title}
        </Text>
        <Text style={[styles.counterText]}>
          {'Counter value: ' + this.state.counterValue}
        </Text>
        <Button 
          title="Tap me.." 
          onPress={() => this.setState({counterValue: ++this.state.counterValue})}
        />
        
      </View>
    );
  }
}

CounterScene.propTypes = {
  title: React.PropTypes.string,
};
CounterScene.defaultProps = {
  title: 'A simple tap counter'
};

const styles = StyleSheet.create({
  
  rootView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  
  titleText: {
    fontSize: 25,
    fontFamily: Common.Fonts.ExpletusSans_Bold,
    color: Common.Colors.blue,
    backgroundColor: 'transparent',
  },
  
  counterText: {
    fontSize: 18,
    margin: 15,
    fontFamily: Common.Fonts.ExpletusSans_Bold,
    color: Common.Colors.blue,
    backgroundColor: 'transparent',
  },
  
});

