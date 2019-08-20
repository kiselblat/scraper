var db = require("../models");

module.exports = (app) => {

  app.get("/", function(req, res) {
    db.Article.find({}).then((dbArticle) => {
      let viewData = {
        articles: dbArticle,
      };
      console.log(viewData);
      res.render("index", viewData);
    })
  });

}