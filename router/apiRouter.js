const express = require('express');
const apiRouter = express.Router();

apiRouter.route('/movies')
  .get(function(req, res) {
    res.json([
      {title: "The Wolf of Wall St", release_date: "25 December 2013", description: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government", poster: "https://d35fkdjhhgt99.cloudfront.net/static/use-media-items/18/17048/full-1400x2073/56702e13/wolf_of_wall_street_ver3_xxlg.jpeg?resolution=0"},
      {title: "Pulp Fiction", release_date: "14 October 1994", description: "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption", poster: "http://imgc.allpostersimages.com/images/P-473-488-90/17/1723/QS53D00Z/posters/pulp-fiction-cover-with-uma-thurman-movie-poster.jpg"},
      {title: "Goodfellas", release_date: "21 September 1990", description: "Henry Hill and his friends work their way up through the mob hierarchy", poster: "https://images-na.ssl-images-amazon.com/images/I/51rOnIjLqzL.jpg"},
      {title: "Scarface", release_date: "9 December 1983", description: "In Miami in 1980, a determined Cuban immigrant takes over a drug cartel and succumbs to greed", poster: "https://www.movieposter.com/posters/archive/main/24/MPW-12199"},
      {title: "Interstellar", release_date: "7 November 2014", description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival", poster: "http://img.moviepostershop.com/interstellar-movie-poster-2014-1010771208.jpg"}
    ]);
  })
  .post();

apiRouter.route('/albums')
  .get(function(req, res) {
    res.json([
      {title: "", artist: "", release_date: "", cover: "", purcahse: ""},
      {title: "", artist: "", release_date: "", cover: "", purcahse: ""},
      {title: "", artist: "", release_date: "", cover: "", purcahse: ""},
      {title: "", artist: "", release_date: "", cover: "", purcahse: ""},
      {title: "", artist: "", release_date: "", cover: "", purcahse: ""}
    ]);
  })
  .post();

apiRouter.route('/products')
  .get(function(req, res) {
    res.json([
      {},
    ]);
  })
  .post();


/// For CRUD ///
apiRouter.route('/movies/:movieId')
  .get()
  .put()
  .delete();

apiRouter.route('/albums/:albumId')
  .get()
  .put()
  .delete();

apiRouter.route('/products/:productId')
  .get()
  .put()
  .delete();

module.exports = apiRouter;
