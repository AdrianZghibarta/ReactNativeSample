"use strict";

import {Platform} from "react-native";
const isAndroid = Platform.OS === 'android';
/**
 * Custom fonts with different names depending on OS
 * @type {Object}
 */
export const Fonts = {
  SofiaBlack                : isAndroid ? 'SofiaBlack' : 'SofiaProBlack',
  SofiaBold                 : isAndroid ? 'SofiaBold' : 'SofiaProBold',
  SofiaExtraLight           : isAndroid ? 'SofiaExtraLight' : 'SofiaProExtraLight',
  SofiaLight                : isAndroid ? 'SofiaLight' : 'SofiaProLight',
  SofiaMedium               : isAndroid ? 'SofiaMedium' : 'SofiaProMedium',
  SofiaRegular              : isAndroid ? 'SofiaRegular' : 'SofiaProRegular',
  SofiaSemiBold             : isAndroid ? 'SofiaSemiBold' : 'SofiaProSemiBold',
  SofiaUltraLight           : isAndroid ? 'SofiaUltraLight' : 'SofiaProUltraLight',
  SofiaBlackItalic          : isAndroid ? 'SofiaProBlackItalic' : 'SofiaProBlack-Italic',
  SofiaBoldItalic           : isAndroid ? 'SofiaProBoldItalic' : 'SofiaProBold-Italic',
  SofiaExtraLightItalic     : isAndroid ? 'SofiaProExtraLightItalic' : 'SofiaProExtraLight-Italic',
  SofiaLightItalic          : isAndroid ? 'SofiaProLightItalic' : 'SofiaProLight-Italic',
  SofiaMediumItalic         : isAndroid ? 'SofiaProMediumItalic' : 'SofiaProMedium-Italic',
  SofiaRegularItalic        : isAndroid ? 'SofiaProRegularItalic' : 'SofiaProRegular-Italic',
  SofiaSemiBoldItalic       : isAndroid ? 'SofiaProSemiBoldItalic' : 'SofiaProSemiBold-Italic',
  SofiaUltraLightItalic     : isAndroid ? 'SofiaProUltraLightItalic' : 'SofiaProUltraLight-Italic',
};

export default Fonts;
