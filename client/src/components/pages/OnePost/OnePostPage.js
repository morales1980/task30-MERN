import React from 'react';

import SinglePost from '../../features/SinglePost/SinglePostContainer';

const OnePostPage = ({match}) => (
  <div>
    <SinglePost id = {match.url}/>
  </div>
);

export default OnePostPage;
