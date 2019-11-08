import React from 'react';
import {PropTypes} from 'prop-types';

import HtmlBox from '../../common/HtmlBox/HtmlBox';
import PageTitle from '../../common/PageTitle/PageTitle';

const FullPost = ({author, title, content}) => (
  <article className="full-post">
    <PageTitle>{title}</PageTitle>
    <p>author: {author}</p>
    <HtmlBox>{content}</HtmlBox>
  </article>
);

FullPost.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default FullPost;
