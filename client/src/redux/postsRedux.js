import axios from 'axios';

// SELECTORS
export const getPosts = ({posts}) => posts;

// ACTIONS
// action name creator
const reducerName = 'posts';
const createActionName = (name) => (`app/${reducerName}/${name}`);

export const LOAD_POSTS = createActionName('LOAD_POSTS');
export const loadPosts = (payload) => ({payload, type: LOAD_POSTS});

// INITIAL STATE
const initialState = [];

// THUNKS
export const loadPostsRequest = () => {
  return dispatch => {
    axios.get('http://localhost:8000/api/posts')
    .then(response => {
      dispatch(loadPosts(response.data));
    })
    .catch(error => {
      console.log('Response error: ' + error.message);
    });
  };
};

// REDUCER
export default function reducer(statePart = initialState, action = {}) {
  switch(action.type) {
    case LOAD_POSTS:
      return [...action.payload];
    default:
    return statePart;
  }
};
