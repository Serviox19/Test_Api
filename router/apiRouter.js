const express = require('express');
const apiRouter = express.Router();

apiRouter.route('/movies')
  .get(function(req, res) {
    res.json([
      {},
    ]);
  })
  .post();

apiRouter.route('/albums')
  .get(function(req, res) {
    res.json([
      {},
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

apiRouter.route('/products/:productId')
  .get()
  .put()
  .delete();

module.exports = apiRouter;
