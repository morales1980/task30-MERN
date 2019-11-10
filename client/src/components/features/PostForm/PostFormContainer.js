import {connect} from 'react-redux';
import {getRequest, addPostRequest, resetRequest, getFormMode, getSinglePost, loadSinglePostRequest, updatePostRequest, changeFormMode} from '../../../redux/postsRedux';

import PostForm from './PostForm';

const mapStateToProps = (state) => ({
  request: getRequest(state),
  formMode: getFormMode(state),
  editedPost: getSinglePost(state)
});

const mapDispatchToProps = (dispatch) => ({
  resetRequest: () => dispatch(resetRequest()),
  addPost: (post) => dispatch(addPostRequest(post)),
  loadSinglePost: (id) => dispatch(loadSinglePostRequest(id)),
  updatePost: (post, id) => dispatch(updatePostRequest(post, id)),
  changeFormMode: (mode, id) => dispatch(changeFormMode(mode, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
