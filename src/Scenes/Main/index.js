"use strict";
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  StatusBar,
  Platform,
} from 'react-native';

import Navigation from '../../Components/Navigation';
import Button from "../../Components/Button";
import Common from "../../Resources/Common";

export default class MainScene extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
    };
    
    StatusBar.setBarStyle('light-content', false);
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('black');
    }
  }
  
  showNewsList() {
    this.props.navigator.push(new Navigation.SceneRoute({
      id: Navigation.SceneId.NewsList,
    }));
  }
  
  showRegisterForm() {
    this.props.navigator.push(new Navigation.SceneRoute({
      id: Navigation.SceneId.Register,
    }));
  }
  
  showCounter() {
    this.props.navigator.push(new Navigation.SceneRoute({
      id: Navigation.SceneId.Counter,
    }));
  }

  render() {
    return (
      <View style={[styles.rootView, this.props.style]}>
        
        <Image source={require("../../Resources/Images/BackImage/img.jpg")} style={[Common.Styles.backgroundImage]}/>
        
        <Button title="News List" onPress={this.showNewsList.bind(this)} style={[styles.button]}/>
        <Button title="Register Form" onPress={this.showRegisterForm.bind(this)} style={[styles.button]}/>
        <Button title="Counter" onPress={this.showCounter.bind(this)} style={[styles.button]}/>
      </View>
    );
  }
}

MainScene.propTypes = {
  // TO Add..
};
MainScene.defaultProps = {
  // TO Add..
};

const styles = StyleSheet.create({
  
  rootView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  
  button: {
    margin: Common.Dimens.marginMedium1,
  }
});

