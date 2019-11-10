import {connect} from 'react-redux';
import {getRequest, addPostRequest, resetRequest} from '../../../redux/postsRedux';

import PostForm from './PostForm';

const mapStateToProps = (state) => ({
  request: getRequest(state)
});

const mapDispatchToProps = (dispatch) => ({
  resetRequest: () => dispatch(resetRequest()),
  addPost: (post) => dispatch(addPostRequest(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
