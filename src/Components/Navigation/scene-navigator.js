'use strict';
import React, { Component } from 'react';
import { 
  Navigator, 
  StyleSheet, 
} from 'react-native';
import Common from '../../Resources/Common';
import SceneId from './scene-id';
import SceneRoute from './scene-route';
import BarRouteMapper from './bar-route-mapper';

import CounterScene from '../../Scenes/Counter';
import NewsListScene from '../../Scenes/NewsList';
import RegisterScene from '../../Scenes/Register';
import MainScene from '../../Scenes/Main';

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

      case SceneId.Main:
        return(
          <MainScene
            navigator={navigator}
            sceneInfo={sceneRoute.info}
            sceneRoute={sceneRoute}
            style={[navBarStyle, styles.sceneDefaultStyle]}
          />
        );
      case SceneId.Counter:
        return(
          <CounterScene 
            navigator={navigator}
            sceneInfo={sceneRoute.info}
            sceneRoute={sceneRoute}
            style={[navBarStyle, styles.sceneDefaultStyle]}
          />
        );
      case SceneId.Register:
        return(
          <RegisterScene
            navigator={navigator}
            sceneInfo={sceneRoute.info}
            sceneRoute={sceneRoute}
            style={[navBarStyle, styles.sceneDefaultStyle]}
          />
        );
      case SceneId.NewsList:
        return(
          <NewsListScene
            navigator={navigator}
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
  initialRoute: new SceneRoute({id: SceneId.Main, title: 'Main', hideLeftButton: true}),
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
