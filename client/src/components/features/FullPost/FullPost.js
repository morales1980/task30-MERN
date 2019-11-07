import React from 'react';
import {PropTypes} from 'prop-types';

import HtmlBox from '../../common/HtmlBox/HtmlBox';
import PageTitle from '../../common/PageTitle/PageTitle';

const FullPost = ({title, content}) => (
  <article className="full-post">
    <PageTitle>{title}</PageTitle>
    <HtmlBox>{content}</HtmlBox>
  </article>
);

FullPost.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default FullPost;
