const express = require('express');
const PostController = require('../controllers/post.controller');

const router = express.Router();

//get all posts
router.route('/posts').get(PostController.getPosts);

module.exports = router;
