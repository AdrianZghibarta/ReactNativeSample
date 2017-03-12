'use strict';
import React, { Component } from 'react';
import { 
  Navigator, 
  StyleSheet, 
} from 'react-native';
import Common from 'common';
import SceneId from './scene-id';
import SceneRoute from './scene-route';
import BarRouteMapper from './bar-route-mapper';

import StartScene from 'start';
import SignInScene from 'sign-in';
import Subscription from 'subscription';
import DashboardScene from 'dashboard';
import ProfileReadonlyScene from 'profile-readonly';
import ProfileEditScene from 'profile-edit';
import MeetingAddScene from 'meeting-add';
import PrescriptionAddScene from 'prescription-add';
import TransformationAddScene from 'transformation-add';

/**
 * Custom Navigator components that actually returns a Navigator
 */
export default class SceneNavigator extends Component {

  constructor(props) {
    super(props);

    this.renderScene = this.renderScene.bind(this);
    this.configureScene = this.configureScene.bind(this);
    
    this.state = {
      showNavBar: null
    };
    
    this.changeNavBarVisibility = this.changeNavBarVisibility.bind(this);
    this.needToShowNavigationBar = this.needToShowNavigationBar.bind(this);
  }

  /**
   * Show or hide navigation bar
   * @param visibility
   */
  changeNavBarVisibility(visibility) {
    this.setState({
      showNavBar: visibility,
    });
  }

  /**
   * Inspect if the the navigator needs to show the nav bar
   */
  needToShowNavigationBar() {
    if (this.state.showNavBar === true || this.state.showNavBar === false) {
      return this.state.showNavBar;
    } 
    else {
      return this.props.showNavigationBar;
    }
  }

  /**
   * Render the scene of navigator
   */
  renderScene(sceneRoute, navigator) {
    
    let marginTop = Common.Dimens.navigationBarHeight;
    let navBarStyle = this.needToShowNavigationBar() ? {marginTop: marginTop} : {};
    
    switch (sceneRoute.id) {

      case SceneId.Start:
        return(
          <StartScene
            navigator={navigator}
            sceneInfo={sceneRoute.info}
            sceneRoute={sceneRoute}
            style={[navBarStyle, styles.sceneDefaultStyle]}
          />
        );
        
      case SceneId.SignIn:
        return(
          <SignInScene
            navigator={navigator}
            sceneInfo={sceneRoute.info}
            sceneRoute={sceneRoute}
            style={[navBarStyle, styles.sceneDefaultStyle]}
          />
        );

      case SceneId.Subscription:
        return(
          <Subscription
            navigator = { navigator }
            sceneInfo = { sceneRoute.info }
            sceneRoute={sceneRoute}
            style = {[navBarStyle, styles.sceneDefaultStyle]}
          />
         );
        
      case SceneId.MainNavigator:
        return (
          <SceneNavigator
            initialRoute={new SceneRoute({
              id: SceneId.Dashboard, 
              hideLeftButton: true,
              rightButtonIcon: 'person'
            })}
          />
        );

      case SceneId.Dashboard:
        return (
          <DashboardScene
            navigator={navigator}
            sceneNavigator={this}
            sceneInfo={sceneRoute.info}
            sceneRoute={sceneRoute}
            style={[navBarStyle, styles.sceneDefaultStyle]}
          />
        );
        
      case SceneId.ProfileReadonly:
        return (
          <ProfileReadonlyScene
            navigator={navigator}
            sceneNavigator={this}
            sceneInfo={sceneRoute.info}
            sceneRoute={sceneRoute}
            style={[navBarStyle, styles.sceneDefaultStyle]}
          />
        );

      case SceneId.ProfileEdit:
        return (
          <ProfileEditScene
            navigator={navigator}
            sceneNavigator={this}
            sceneInfo={sceneRoute.info}
            sceneRoute={sceneRoute}
            style={[navBarStyle, styles.sceneDefaultStyle]}
          />
        );

      case SceneId.MeetingAdd:
        return (
          <MeetingAddScene
            navigator={navigator}
            sceneNavigator={this}
            sceneInfo={sceneRoute.info}
            sceneRoute={sceneRoute}
            style={[navBarStyle, styles.sceneDefaultStyle]}
          />
        );
        
      case SceneId.PrescriptionAdd:
        return(
          <PrescriptionAddScene
            navigator={navigator}
            sceneNavigator={this}
            sceneInfo={sceneRoute.info}
            sceneRoute={sceneRoute}
            style={[navBarStyle, styles.sceneDefaultStyle]}
          />
        );

      case SceneId.TransformationAdd:
        return(
          <TransformationAddScene
            navigator={navigator}
            sceneNavigator={this}
            sceneInfo={sceneRoute.info}
            sceneRoute={sceneRoute}
            style={[navBarStyle, styles.sceneDefaultStyle]}
          />
        );
    }
    alert('Empty Scene Reached');
  }

  /**
   * Configure next scene (transition effects etc)
   */
  configureScene(route, routeStack) {
    return route.config;
  }
  
  render () {
    //let currentStackCount = 
    
    if (!this.needToShowNavigationBar()) {
      return(
        <Navigator
          initialRoute={this.props.initialRoute}
          renderScene={this.renderScene}
          configureScene={this.configureScene}
        />
      );
    }
    else {
      return(
        <Navigator
          initialRoute={this.props.initialRoute}
          renderScene={this.renderScene}
          configureScene={this.configureScene}
          navigationBar={<Navigator.NavigationBar routeMapper={BarRouteMapper} style={styles.navBar}/>}
        />
      );
    }
  }
}

SceneNavigator.propTypes = {
  initialRoute: React.PropTypes.object.isRequired,
  showNavigationBar: React.PropTypes.bool
};

SceneNavigator.defaultProps = {
  initialRoute: new SceneRoute({id: SceneId.Start, title: 'Start', hideLeftButton: true}),
  showNavigationBar: true
};

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: 'black',
    shadowColor: 'black',
    shadowOpacity: 0.7,
    shadowRadius: 4,
    shadowOffset:{
      width: 0,
      height: 0,
    },
  },
  sceneDefaultStyle: {
    shadowColor: 'black',
    shadowOpacity: 0.7,
    shadowRadius: 4,
    shadowOffset:{
      width: -10,
      height: -10,
    },
  }
});
