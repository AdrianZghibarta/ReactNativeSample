import React, { Component } from 'react';
import { 
  Navigator,
} from 'react-native';

/**
 * Defines a navigation route information used in SceneNavigator component across the app
 */
export default class SceneRoute {

  /**
   * Create a new SceneNavigation route
   * @param params
   */
  constructor(params) {
    
    this.id = params.id;
    this.title = params.title;
    this.info = params.info;
    this.hideNavBar = params.hideNavBar;
    this.hideLeftButton = params.hideLeftButton;
    this.rightButtonIcon = params.rightButtonIcon;
    this.onRightButtonPress = params.onRightButtonPress;
    
    if (params.config === undefined) {
      this.config = Navigator.SceneConfigs.PushFromRight;
    }
    else {
      this.config = params.config;
    }
  }
}