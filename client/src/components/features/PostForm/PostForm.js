import React from 'react';
import {PropTypes} from 'prop-types';
import Editor from 'react-medium-editor';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';

import TextField from '../../common/TextField/TextField';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import Button from '../../common/Button/Button';
import Alert from '../../common/Alert/Alert';
import Spinner from '../../common/Spinner/Spinner';

import './PostForm.scss';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        title: '',
        author: '',
        content: ''
      }
    };
  }

  componentDidMount() {
    const {resetRequest, formMode, loadSinglePost} = this.props;
    resetRequest();
    if(formMode.edit) {
      loadSinglePost(`/posts/${formMode.id}`);
    }
  }

  componentDidUpdate(prevProps) {
    const {formMode, editedPost} = this.props;
    if(formMode.edit && editedPost !== prevProps.editedPost) {
      this.setState({
        post: {
          title: editedPost.title,
          author: editedPost.author,
          content: editedPost.content
        }
      });
    }
  }

  componentWillUnmount() {
    const {changeFormMode} = this.props;
    changeFormMode(false, '');
  }

  handleChange = (e) => {
    const {post} = this.state;
    this.setState({post: {...post, [e.target.name]: e.target.value}});
  }

  updateTitle = (e) => {
    const {post} = this.state;
    this.setState({post: {...post, title: e.target.value}});
  }

  handleEditor = (text) => {
    const {post} = this.state;
    this.setState({post: {...post, content: text}});
  }

  addPost = (e) => {
    const {addPost} = this.props;
    const {post} = this.state;

    e.preventDefault();
    addPost(post);
  }

  updatePost = (e) => {
    const {updatePost, formMode} = this.props;
    const {post} = this.state;

    e.preventDefault();
    updatePost(post, formMode.id);
  }

  render() {
    const {post} = this.state;
    const {handleChange, handleEditor, addPost, updatePost} = this;
    const {request, formMode} = this.props;

    if(request.error) return <Alert varian='error'>{request.error}</Alert>
    else if(request.success && !formMode.edit) return <Alert variant='success'>Post has been added!</Alert>
    else if(request.success && formMode.edit && formMode.id==='') return <Alert variant='success'>Post has been modified!</Alert>
    else if(request.pending) return <Spinner/>
    else if(formMode.edit) return (
      <form onSubmit={updatePost}>

        <TextField
          label='Title'
          value={post.title}
          onChange={handleChange}
          name='title'
        />

        <TextField
          label='Author'
          value={post.author}
          onChange={handleChange}
          name='author'
        />

        <SectionTitle>Edit post content</SectionTitle>

        <Editor
          className='content-editor'
          text={post.content}
          onChange={handleEditor}
          options={{placeholder: false, toolbar: {align: 'center', buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote']}}}
        />

        <Button variant='primary'>Update post</Button>

      </form>
    )
    else return (
      <form onSubmit={addPost}>

        <TextField
          label='Title'
          value={post.title}
          onChange={handleChange}
          name='title'
        />

        <TextField
          label='Author'
          value={post.author}
          onChange={handleChange}
          name='author'
        />

      <SectionTitle>Write post content below</SectionTitle>

        <Editor
          className='content-editor'
          text={post.content}
          onChange={handleEditor}
          options={{placeholder: false, toolbar: {align: 'center', buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote']}}}
        />

      <Button variant='primary'>Add post</Button>

      </form>
    );
  }
};

PostForm.propTypes = {
  request: PropTypes.object.isRequired,
  addPost: PropTypes.func.isRequired
};

export default PostForm;

// <form onSubmit={updatePost}>
//
//   <TextField
//     label='Title'
//     value={post.title}
//     onChange={handleChange}
//     name='title'
//   />
//
//   <TextField
//     label='Author'
//     value={post.author}
//     onChange={handleChange}
//     name='author'
//   />
//
//   <SectionTitle>Edit post content</SectionTitle>
//
//   <Editor
//     className='content-editor'
//     text={post.content}
//     onChange={handleEditor}
//     options={{placeholder: false, toolbar: {align: 'center', buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote']}}}
//   />
//
// <Button variant='primary'>Update post</Button>
//
// </form>
