import {connect} from 'react-redux';
import {getPosts, getRequest, loadPostsRequest, resetRequest} from '../../../redux/postsRedux';
import Posts from './Posts';

const mapeStateToProps = (state) => ({
  posts: getPosts(state),
  request: getRequest(state)
});

const mapDispatchToProps = (dispatch) => ({
  resetRequest: () => dispatch(resetRequest()),
  loadPosts: () => dispatch(loadPostsRequest())
});

export default connect(mapeStateToProps, mapDispatchToProps)(Posts);
