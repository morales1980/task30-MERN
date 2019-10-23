import {connect} from 'react-redux';
import {getPosts, loadPostsRequest} from '../../../redux/postsRedux';
import Posts from './Posts';

const mapeStateToProps = (state) => ({
  posts: getPosts(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadPosts: () => dispatch(loadPostsRequest())
});

export default connect(mapeStateToProps, mapDispatchToProps)(Posts);
