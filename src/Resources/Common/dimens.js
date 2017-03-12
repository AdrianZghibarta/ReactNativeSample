"use strict";

import {Platform} from "react-native";
const isAndroid = Platform.OS === 'android';
const isIOS = Platform.OS === 'ios';

/**
 * All common colors used in the app
 * @type {Object}
 */

class CommonDimens {
  constructor() {
    this.small1 = 2;
    this.small2 = 5;
    this.small3 = 10;
    this.medium1 = 15;
    this.medium2 = 20;
    this.big1 = 25;
    this.big2 = 30;
    this.big3 = 35;
    this.huge1 = 40;
    this.huge2 = 50;
    this.huge3 = 60;

    this.marginSmall1 = 2;
    this.marginSmall2 = 5;
    this.marginSmall3 = 10;
    this.marginMedium1 = 15;
    this.marginMedium2 = 20;
    this.marginBig1 = 25;
    this.marginBig2 = 30;
    this.marginHuge1 = 35;
    this.marginHuge2 = 50;
    this.marginHuge3 = 70;

    this.paddingSmall1 = 2;
    this.paddingSmall2 = 5;
    this.paddingSmall3 = 10;
    this.paddingMedium1 = 15;
    this.paddingMedium2 = 20;
    this.paddingBig1 = 25;
    this.paddingBig2 = 30;
    this.paddingHuge1 = 35;
    this.paddingHuge2 = 50;

    this.textExtraSmall1 = 4;
    this.textExtraSmall2 = 6;
    this.textExtraSmall3 = 8;
    this.textSmall1 = 10;
    this.textSmall2 = 12;
    this.textSmall3 = 14;
    this.textMedium1 = 16;
    this.textMedium2 = 18;
    this.textMedium3 = 20;
    this.textMedium4 = 22;
    this.textBig = 26;
    this.textHuge1 = 28;
    this.textHuge2 = 30;
    this.textHuge3 = 33;
    this.textHuge4 = 36;
    
    this.radiusSmall1 = 2;
    this.radiusSmall2 = 4;
    this.radiusSmall3 = 6;
    this.radiusMedium1 = 8;
    this.radiusMedium2 = 10;
    this.radiusMedium3 = 12;

    this.inputHeightDefault = 40;

    this.statusBarHeight = isIOS ? 20 : 0;
    this.navigationBarHeight = isIOS ? 64 : 55;
    this.titleBarHeight = 60;
    this.titleBarImageDim = 40;
    this.tabBarHeight = 60;
  }
}

const Dimens = new CommonDimens();
export default Dimens;
