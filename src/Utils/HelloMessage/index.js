"use strict";
import {NativeModules} from 'react-native';

export default class HelloMessage {
  
  static async getMessage(username: string) {
    let HelloMessageModule = NativeModules.HelloMessage;
    return await HelloMessageModule.getHelloMessage(username);
  }

  static getGeneralMessage(handler) {
    let HelloMessageModule = NativeModules.HelloMessage;
    HelloMessageModule.getGeneralMessage(handler);
  }
}

