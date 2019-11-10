import {connect} from 'react-redux';
import {loadSinglePostRequest} from '../../../redux/postsRedux';

import PostSummary from './PostSummary';

const mapStateToProps = (state) => {

};

const mapDispatchToProps = (dispatch) => {
  changeFormMode: () => dispatch(changeFormModeRequest()),
  loadSinglePost: (id) => dispatch(loadSinglePostRequest(id))
};

export default connect(mapStateToProps, mapDispatchToProps)(PostSummary);
