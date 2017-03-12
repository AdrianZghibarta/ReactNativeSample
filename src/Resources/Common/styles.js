"use strict";
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

/**
 * Commpon styles used in the app
 * @type {StyleSheet}
 */
const Styles = StyleSheet.create({
  sceneRootView: {
    flex:1,
    width: null,
    height: null,
  },

  columnSceneRootView: {
    flex:1,
    flexDirection: 'column',
    width: null,
    height: null,
  },

  fullDimensions: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  
  roundedBorder: {
    borderRadius: 4,
  },

  imageNullDimensions: {
    width: null,
    height: null,
  },
  
  backgroundImage: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: null,
    height: null,
  },

  sceneRootViewWithNavbar: {
    flex:1,
    width: null,
    height: null,
    marginTop: 20,
  },

  centeredContent: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  centeredHorizontal: {
    alignItems: 'center'
  },

  centeredVertical: {
    justifyContent: 'center'
  },

  transparentBackground: {
    backgroundColor: 'transparent',
  }
});

export default Styles;