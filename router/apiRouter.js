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
      {title: "The Life of Pablo", artist: "Kanye West", release_date: "February 14, 2016", cover: "https://upload.wikimedia.org/wikipedia/en/4/4d/The_life_of_pablo_alternate.jpg", purcahse: "https://www.amazon.com/Life-Pablo-Explicit-Kanye-West/dp/B01LZNZ95V/ref=sr_1_1?ie=UTF8&qid=1494993254&sr=8-1&keywords=life+of+pablo+cd"},
      {title: "Cozy Tapes", artist: "A$AP Mob", release_date: "October 31, 2016", cover: "https://static.spin.com/files/2016/10/unnamed-1477488989-640x640.jpg", purcahse: "https://www.amazon.com/Cozy-Tapes-Vol-1-Friends/dp/B01M5GXWNU/ref=sr_1_1_twi_aud_2?s=music&ie=UTF8&qid=1494993330&sr=1-1&keywords=cozy+tapes"},
      {title: "Coloring Book", artist: "Chance The Rapper", release_date: "May 13, 2016", cover: "https://i1.sndcdn.com/artworks-000164666747-vw6nqr-t500x500.jpg", purcahse: "https://www.amazon.com/Coloring-Book-Explicit-Chance-Rapper/dp/B01LXE0JX1/ref=sr_1_cc_1?s=aps&ie=UTF8&qid=1494993379&sr=1-1-catcorr&keywords=coloring+book+chance+the+rapper+cd"},
      {title: "Blank Face LP", artist: "ScHoolboy Q", release_date: "July 8, 2016", cover: "https://static.wixstatic.com/media/a5b417_105c18285e7d41af99fda3e4d210cf83~mv2.jpg", purcahse: "https://www.amazon.com/Blank-Face-LP-Schoolboy-Q/dp/B01HI90ZDC/ref=tmm_acd_swatch_0?_encoding=UTF8&qid=1494993461&sr=1-1-mp3-albums-bar-strip-0"},
      {title: "Views", artist: "Drake", release_date: "April 29, 2016", cover: "https://upload.wikimedia.org/wikipedia/en/6/64/Drakeviewsfromthe6.jpg", purcahse: "https://www.amazon.com/Views-Explicit-Drake/dp/B01F64YDRU/ref=sr_1_2?s=dmusic&ie=UTF8&qid=1494993420&sr=1-2-mp3-albums-bar-strip-0&keywords=views+drake"}
    ]);
  })
  .post();

apiRouter.route('/products')
  .get(function(req, res) {
    res.json([
      {name: "iPhone 7 Plus 32GB", manufacturer: "Apple", price: "$769", cover: "https://www.o2.co.uk/shop/homepage/images/shop15/brand/apple/iphone-7-plus/apple-iphone-7-plus-gallery-img-6.jpg"},
      {name: "Amazon Echo", manufacturer: "Amazon", price: "$179", cover: "https://images-na.ssl-images-amazon.com/images/I/41-v1fozy0L.jpg"},
      {name: "Xbox One S 2TB", manufacturer: "Microsoft", price: "$399", cover: "https://cnet1.cbsistatic.com/img/Dri_6795D7EYs2dvS-RTfEvwNbc=/770x433/2016/08/01/81dd9937-d2f9-4730-8d9b-cca30379da27/xboxones.jpg"},
      {name: "2016 MacBook Pro 13-inch", manufacturer: "Apple", price: "$1,499", cover: "https://cnet4.cbsistatic.com/img/LwGV_V7uTl2n_T-eg0db_6sEybA=/770x433/2016/10/27/e361002e-72c9-4b10-bfc1-2be21c508a42/apple-macbook-pro-13-inch-2016-1626-003.jpg"},
      {name: "55-inch KU7000 4K UHD TV", manufacturer: "Samsung", price: "$899", cover: "http://s7d2.scene7.com/is/image/SamsungUS/Pdpdefault-un55ku7000fxza-600x600-C1-052016"}
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
