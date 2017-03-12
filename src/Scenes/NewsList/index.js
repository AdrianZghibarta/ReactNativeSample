"use strict";
import React, { Component } from 'react';
import {
  InteractionManager,
  StyleSheet,
  View,
  ListView,
  Image,
} from 'react-native';

import FullSpinner from "../../Components/FullSpinner";
import Common from "../../Resources/Common";
import Article from './Components/Article';
import ArticleView from './Components/ArticleView';

export default class NewsListScene extends Component {

  constructor(props) {
    super(props);
    
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      isLoading: true,
      dataSource: this.ds.cloneWithRows([]),
    };
  }
  
  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      let articles = Article.getArticleList(1000);
      this.setState({
        isLoading: false,
        dataSource: this.ds.cloneWithRows(articles)
      });
    });
  }

  render() {
    return (
      <View style={[styles.rootView, this.props.style]}>

        <Image source={require("../../Resources/Images/BackImage/img.jpg")} style={[Common.Styles.backgroundImage]}/>
        
        <ListView 
          dataSource={this.state.dataSource}
          renderRow={(article: Article) => {
            return (<ArticleView article={article}/>)
          }}
          enableEmptySections={true}
          style={[styles.listView]}
        />
        
        <FullSpinner isVisible={this.state.isLoading}/>
        
      </View>
    );
  }
}

NewsListScene.propTypes = {
  // TO Add..
};
NewsListScene.defaultProps = {
  // TO Add..
};

const styles = StyleSheet.create({
  
  rootView: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: 'white',
  },
  
  listView: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});

