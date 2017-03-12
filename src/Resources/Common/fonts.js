"use strict";

import {Platform} from "react-native";
const isAndroid = Platform.OS === 'android';
/**
 * Custom fonts with different names depending on OS
 * @type {Object}
 */
export const Fonts = {
  ExpletusSans_Bold     : isAndroid ? 'expletussans_bold'     : 'ExpletusSans-Bold',
  Karla_Bold            : isAndroid ? 'karla_bold'            : 'Karla-Bold',
  Karla_Regular         : isAndroid ? 'karla_regular'         : 'Karla-Regular'
};

export default Fonts;
