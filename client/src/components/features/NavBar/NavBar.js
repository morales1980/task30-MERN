import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.scss';

class NavBar extends React.Component {
  render() {
    return (
      <div className="navigation">
        <Link to='/'>Home</Link>
        <Link to='/posts/new'>Add post</Link>
        <Link to='/posts'>Posts</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    );
  }
}

export default NavBar;
