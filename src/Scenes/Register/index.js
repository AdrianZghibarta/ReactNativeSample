"use strict";
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import Icon from "react-native-vector-icons/MaterialIcons";
import FullSpinner from "../../Components/FullSpinner";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import Common from "../../Resources/Common";
import HelloMessage from "../../Utils/HelloMessage";

export default class RegisterScene extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: null,
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

  async showHelloMessage() {
    try {
      let helloMessage = await HelloMessage.getMessage(this.state.username);
      alert(helloMessage);
    }
    catch(error) {
      alert(error.message);
    }
  }

  render() {
    return (
      <View style={[styles.rootView, this.props.style]}>
        
        <Image source={require("../../Resources/Images/BackImage/img.jpg")} style={[Common.Styles.backgroundImage]}/>
        
        <Input
          placeholder="Enter name"
          value={this.state.username}
          onChangeText={(text) => this.setState({username: text})}
          rightImageName={'account-circle'}
        />
        <Button 
          title="Native hello promise" 
          onPress={this.showHelloMessage.bind(this)} 
          style={[styles.marginTopMedium]}
        />
        
        <Icon name="toys" style={[styles.icon, styles.marginTopHuge]}/>

        <Button
          title="Native message callback"
          onPress={RegisterScene.showGeneralMessage}
          style={[styles.marginTopHuge]}
        />
        
      </View>
    );
  }
}

RegisterScene.propTypes = {
  // TO Add..
};
RegisterScene.defaultProps = {
  // TO Add..
};

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: Common.Dimens.paddingMedium2,
  },
  
  marginTopMedium: {
    marginTop: Common.Dimens.marginMedium1,
  },

  marginTopHuge: {
    marginTop: Common.Dimens.marginHuge2,
  },
  
  icon: {
    fontSize: 40,
    backgroundColor: 'transparent',
    color: Common.Colors.blue,
  }
});

