"use strict";
/**
 * All common colors used in the app
 * @type {Object}
 */

class CommonColors {
  constructor() {
    this.darkButtonColor = '#1D2225';
    this.white = '#FFFFFF';
    this.whiteFocusColor = '#FFFFFF64';
    this.whiteFocusColorM = '#FFFFFFC8';
    this.whiteFocusColorH = '#FFFFFFF0';
    this.black = '#000000';
    this.blackFocusColor = '#00000020';
    this.blackFocusColorM = '#00000064';
    this.blackFocusColorH = '#000000C8';

    this.grey50 = '#FAFAFA';
    this.grey100 = '#EEEEEE';
    this.grey200 = '#FAFAFA';
    this.grey300 = '#E0E0E0';
    this.grey400 = '#BDBDBD';
    this.grey500 = '#9E9E9E';
    this.grey600 = '#757575';
    this.grey700 = '#616161';
    this.grey800 = '#424242';
    this.grey900 = '#212121';

    this.yellow50 = '#FFFDE7';
    this.yellow100 = '#FFF9C4';
    this.yellow200 = '#FFF59D';
    this.yellow300 = '#FFF176';
    this.yellow400 = '#FFEE58';
    this.yellow500 = '#FFEB3B';
    this.yellow600 = '#FDD835';
    this.yellow700 = '#FBC02D';
    this.yellow800 = '#F9A825';
    this.yellow900 = '#F57F17';

    this.red50 = '#FFEBEE';
    this.red100 = '#FFCDD2';
    this.red200 = '#EF9A9A';
    this.red300 = '#E57373';
    this.red400 = '#EF5350';
    this.red500 = '#F44336';
    this.red600 = '#E53935';
    this.red700 = '#D32F2F';
    this.red800 = '#C62828';
    this.red900 = '#B71C1C';

    this.white = '#FFFFFF';
    this.black = this.grey800;
    
    this.deepOrangeA200 = '#FF6432';

    this.transparent = 'transparent';
  }
  
  get orange() {
    return '#FF6633';
  }

  get red() {
    return this.red500;
  }

  get darkTextColor() {
    return '#494949';
  }
  
  get greenTextColor() {
    return '#FF964B';
  }
  
  get yellow() {
    return '#FFC200';
  }
  
  get yellowGradient() {
    return '#FFC600';
  }
  
  get intermediateGradient() {
    return '#BCCE29';
  }
  
  get greenGradient() {
    return '#66DD66';
  }

  get green() {
    return '#00DF58';
  }
  
  get blue() {
    return '#61DAFB';
  }
  
  get blueFocus() {
    return '#61DAFB88';
  }
}

const Colors = new CommonColors();
export default Colors;
