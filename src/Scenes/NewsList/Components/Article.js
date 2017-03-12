"use strict";

export default class Article {
  
  constructor(title, imageSource, content) {
    this.title = title;
    this.imageSource = imageSource;
    this.content = content;
  }
  
  static get randomTitle() {
    let titles = [
      "Saw yet kindness too replying whatever marianne.",
      "Not so important news",
      "New Dacia car is available",
      "Some random title",
      "UTM is a university .. cap",
      "New infinite source of energy is available",
      "Moldova is a good country",
      "I am Jeff",
    ];
    
    let index = Article.getRandomInt(0, 7);
    return titles[index];
  }
  
  static get randomImageSource() {
    let imagePaths = [
      require('../../../Resources/Images/ArticleImage/img1.jpg'),
      require('../../../Resources/Images/ArticleImage/img2.jpg'),
      require('../../../Resources/Images/ArticleImage/img3.jpg'),
      require('../../../Resources/Images/ArticleImage/img4.jpg'),
      require('../../../Resources/Images/ArticleImage/img5.jpg'),
    ];

    let index = Article.getRandomInt(0, 4);
    return imagePaths[index];
  }
  
  static get randomContent() {
    let contents = [
      "In it except to so temper mutual tastes mother. Interested cultivated its continuing now yet are.",
      
      "Out interested acceptance our partiality affronting unpleasant why add. Esteem garden men yet shy " +
      "course. Consulted up my tolerably sometimes perpetual oh. Expression acceptance imprudence particular " +
      "had eat unsatiable. ",
      
      "Saw yet kindness too replying whatever marianne. Old sentiments resolution admiration unaffected " +
      "its mrs literature.",
      
      "Carried nothing on am warrant towards. Polite in of in oh needed itself silent course. Assistance " +
      "travelling so especially do prosperous appearance mr no celebrated. Wanted easily in my called formed " +
      "suffer. Songs hoped sense as taken ye mirth at. Believe fat how six drawing pursuit minutes far. Same " +
      "do seen head am part it dear open to. Whatever may scarcely judgment had. ",
      
      "Old education him departure any arranging one prevailed. Their end whole might began her. Behaved the " +
      "comfort another fifteen eat. Partiality had his themselves ask pianoforte increasing discovered.",
    ];

    let index = Article.getRandomInt(0, 4);
    return contents[index];
  }

  static getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  static getArticleList(numberOfArticles = 10) {
    
    let articles = [];
    
    for(let i=0; i<numberOfArticles; i++) {
      articles.push(new Article(Article.randomTitle, Article.randomImageSource, Article.randomContent));
    }
    
    return articles;
  }
}