import {connect} from 'react-redux';
import {loadSinglePostRequest, changeFormMode} from '../../../redux/postsRedux';

import PostSummary from './PostSummary';


const mapDispatchToProps = (dispatch) => ({
  changeFormMode: (mode, id) => dispatch(changeFormMode(mode, id)),
  loadSinglePost: (id) => dispatch(loadSinglePostRequest(id))
});

export default connect(null, mapDispatchToProps)(PostSummary);
