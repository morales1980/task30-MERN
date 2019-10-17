import React from 'react';

class App extends React.Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/posts')
      .then(response => response.json())
      .then(response => {
        this.setState({ posts: response});
      });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.posts.map(post => <li key = {post.id}>{post.title}</li>)}
        </ul>
      </div>
    );
  }
};

export default App;
