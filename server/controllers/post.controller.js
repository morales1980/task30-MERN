const Posts = require('../models/post.model');

exports.getPosts = async (request, response) => {
  try {
    response.status(200).json(await Posts.find());
  } catch(error) {
    response.status(500).json(error);
  }
};

exports.getPost = async (request, response) => {
  try {
    response.status(200).json(await Posts.find(request.params));
  } catch(error) {
    response.status().json(error.message);
  }
};
