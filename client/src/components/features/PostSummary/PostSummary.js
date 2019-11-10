import React from 'react';
import {PropTypes} from 'prop-types';
import {Link} from 'react-router-dom';

import './PostSummary.scss';
import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import cutText from '../../../utils/CutText/CutText';

class PostSummary extends React.Component {

  changeFormMode = () => {
    const {changeFormMode, id} = this.props;
    changeFormMode(true, id);
  }

  render() {
    const {id, author, title, content} = this.props;
    const {changeFormMode} = this;

    return (
      <article className="post-summary">
        <SmallTitle>{title}</SmallTitle>
        <p>author: {author}</p>
        <HtmlBox>{cutText(content, 250)}</HtmlBox>
        <Button variant="primary">
          <Link to={`/posts/${id}`}>Read more</Link>
        </Button>
        <Button variant="info" onClick={changeFormMode}>
          <Link to='/posts/new'>Edit</Link>
        </Button>
      </article>
    );
  }
};

PostSummary.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default PostSummary;
