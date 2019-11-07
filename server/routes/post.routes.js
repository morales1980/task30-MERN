const express = require('express');
const PostController = require('../controllers/post.controller');

const router = express.Router();

//get posts
router.route('/posts/:id').get(PostController.getPost);
router.route('/posts').get(PostController.getPosts);

module.exports = router;
