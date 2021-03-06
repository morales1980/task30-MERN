import {connect} from 'react-redux';
import {getSinglePost, getRequest, loadSinglePostRequest, resetRequest} from '../../../redux/postsRedux';
import SinglePost from './SinglePost';

const mapStateToProps = (state) => ({
  post: getSinglePost(state),
  request: getRequest(state)
});

const mapDispatchToProps = (dispatch) => ({
  resetRequest: () => dispatch(resetRequest()),
  loadSinglePost: (id) => dispatch(loadSinglePostRequest(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
