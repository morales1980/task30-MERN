import {connect} from 'react-redux';
import {getSinglePost, getRequest, loadSinglePostRequest} from '../../../redux/postsRedux';
import SinglePost from './SinglePost';

const mapeStateToProps = (state) => ({
  post: getSinglePost(state),
  request: getRequest(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadSinglePost: (id) => dispatch(loadSinglePostRequest(id))
});

export default connect(mapeStateToProps, mapDispatchToProps)(SinglePost);
