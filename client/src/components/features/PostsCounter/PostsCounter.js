import React from 'react';
import {PropTypes} from 'prop-types';

class PostsCounter extends React.Component {
  render() {
    const {postsCount} = this.props;

    return (
      (postsCount === 0) ? (<div>- no posts -</div>) : (<div>Posts amount: {postsCount}</div>)
    );
  }
}

PostsCounter.propTypes = {
  postsCount: PropTypes.number.isRequired
};

export default PostsCounter;
