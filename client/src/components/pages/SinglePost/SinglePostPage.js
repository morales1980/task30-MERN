import React from 'react';

const SinglePost = ({match}) => (
  <div>
    <h1>Single post</h1>
    <p>lorem ipsum sit dolor amet</p>
    {match.params.id}
  </div>
);

export default SinglePost;
