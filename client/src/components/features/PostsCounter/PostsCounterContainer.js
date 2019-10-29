import {connect} from 'react-redux';
import {getPostsCount} from '../../../redux/postsRedux';
import PostsCounter from './PostsCounter';

const mapeStateToProps = (state) => ({
  postsCount: getPostsCount(state)
});

export default connect(mapeStateToProps)(PostsCounter);
