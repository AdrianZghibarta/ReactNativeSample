'use strict';
import React from 'react';
import { 
  StyleSheet,
  TouchableHighlight,
  Image,
  Dimensions,
  Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Common from '../../Resources/Common';
const isAndroid = Platform.OS === 'android';

/**
 * Navigation Bar Mapper used in SceneNavigator 
 */
const BarRouteMapper = {
  /**
   * @return {null}
   */
  LeftButton: (route, navigator, index, navState) =>
  {
    if (route.hideLeftButton === true) {
      return null;
    } else {
      return (
        <TouchableHighlight 
          onPress={() => navigator.pop()} 
          style={[styles.navButton, styles.leftButton]}
          underlayColor='transparent'
        >
          <Icon
            name="chevron-left"
            style={[styles.buttonImage, styles.buttonImageLeft]}
          />
        </TouchableHighlight>
      );
    }
  },
  /**
   * @return {null}
   */
  RightButton: (route, navigator, index, navState) =>
  {
    if (route.rightButtonIcon) {
      return (
        <TouchableHighlight
          onPress={route.onRightButtonPress}
          style={[styles.navButton, styles.rightButton]}
          underlayColor='transparent'
        >
          <Icon
            name={route.rightButtonIcon}
            style={[styles.buttonImage, styles.buttonImageRight]}
          />
        </TouchableHighlight>
      );
    } else {
      return null;
    } 
  },
  Title: (route, navigator, index, navState) =>
  { 
    let androidCustomStyle = null;
    if (isAndroid) {
      let windowWidth = Dimensions.get('window').width;
      androidCustomStyle = {
        width: windowWidth - 150,
      };
    }
    return (
      <Image
        style={[styles.titleImage, androidCustomStyle]}
        source={require('../../Resources/Images/ReactLogo/img.png')}
        resizeMode='contain'
      />
    ); 
  },
};

export default BarRouteMapper;

const styles = StyleSheet.create({
  
  navButton: {
    backgroundColor: 'transparent',
    marginTop: isAndroid ? 7 : 0,
    height: 40,
    width: 40,
    justifyContent: 'center',
  },
  
  leftButton: {
    marginLeft: 1,
    alignItems: 'flex-start',
  },

  rightButton: {
    marginRight: 1,
    alignItems: 'flex-end',
  },
  
  buttonImage: {
    color: Common.Colors.blue,
  },
  
  buttonImageLeft: {
    fontSize: 40,
    marginLeft: 0,
    backgroundColor: 'transparent'
  },
  
  buttonImageRight: {
    fontSize: 28,
    marginRight: 10,
    backgroundColor: 'transparent'
  },
  
  titleImage: {
    height: 25,
    marginTop: isAndroid ? 14 : 7
  },
  
  title: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginTop: isAndroid ? 14 : 7,
    backgroundColor: 'transparent'
  },
});
