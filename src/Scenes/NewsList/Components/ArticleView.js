"use strict";
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

import Article from './Article';
import Common from "../../../Resources/Common";

export default class ArticleView extends Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    
    let article: Article = this.props.article;
    
    return(
      <View style={[styles.rootView]}>
        
        <View style={[styles.titleContainer]}>
          <Image style={[styles.imageView]} source={article.imageSource}/>
          <Text style={[styles.titleText]}>
            {article.title}
          </Text>
        </View>

        <Text style={[styles.contentText]}>
          {article.content}
        </Text>
        
        <View style={[styles.separator]}/>
        
      </View>
    );
  }
}

ArticleView.propTypes = {
  article: React.PropTypes.instanceOf(Article).isRequired,
};
ArticleView.defaultProps = {
  
};

const styles = StyleSheet.create({
  
  rootView: {
    alignItems: 'stretch',
    paddingVertical: Common.Dimens.paddingMedium1,
    paddingHorizontal: Common.Dimens.paddingMedium1,
  },
  
  titleContainer: {
    flexDirection: 'row',
    marginBottom: Common.Dimens.marginSmall3,
  },
  
  imageView: {
    height: 70,
    width: 70,
    borderRadius: 5,
  },
  
  titleText: {
    flex: 1,
    marginLeft: Common.Dimens.marginSmall3,
    fontFamily: Common.Fonts.ExpletusSans_Bold,
    fontSize: Common.Dimens.textBig,
    color: Common.Colors.blue,
  },
  
  contentText: {
    marginBottom: Common.Dimens.marginMedium1,
    fontFamily: Common.Fonts.ExpletusSans_Bold,
    fontSize: Common.Dimens.textMedium2,
    color: Common.Colors.blueFocus,
  },
  
  separator: {
    height: 1,
    backgroundColor: Common.Colors.blue,
  },
});