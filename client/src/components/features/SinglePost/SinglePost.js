import React from 'react';
import {PropTypes} from 'prop-types';

import FullPost from '../FullPost/FullPost';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';

class SinglePost extends React.Component {
  componentDidMount() {
    const {loadSinglePost, id, resetRequest} = this.props;
    resetRequest();
    loadSinglePost(id);
  }

  render() {
    const {post, request} = this.props;

    return (
        <div>
          {(request.pending || request.success === null)  &&  <Spinner/>}
          {!request.pending && request.success && post    &&  <FullPost author = {post.author} title={post.title} content={post.content}/>}
          {!request.pending && request.error !== null     &&  <Alert variant="error">{request.error}</Alert>}
          {!request.pending && request.success && !post   &&  <Alert variant="info">There is no such post</Alert>}
        </div>
    );
  }
};

SinglePost.propTypes = {
  post: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  })),
  loadSinglePost: PropTypes.func.isRequired
};

export default SinglePost;
