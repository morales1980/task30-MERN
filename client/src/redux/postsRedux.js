import axios from 'axios';
import {API_URL} from '../config';


// SELECTORS
export const getPosts = ({posts}) => posts.data;
export const getPostsCount = ({posts}) => posts.data.length;
export const getRequest = ({posts}) => posts.request;
export const getSinglePost = ({posts}) => posts.singlePost;

// ACTIONS
// action name creator
const reducerName = 'posts';

const createActionName = (name) => (`app/${reducerName}/${name}`);

//action names
export const LOAD_POSTS = createActionName('LOAD_POSTS');
export const START_REQUEST = createActionName('START_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');
export const LOAD_SINGLEPOST = createActionName('LOAD_SINGLEPOST');
export const RESET_REQUEST = createActionName('RESET_REQUEST');

//actions
export const loadPosts = (payload) => ({payload, type: LOAD_POSTS});
export const startRequest = () => ({type: START_REQUEST});
export const endRequest = () => ({type: END_REQUEST});
export const errorRequest = (error) => ({error, type: ERROR_REQUEST});
export const loadSinglePost = (payload) => ({payload, type: LOAD_SINGLEPOST});
export const resetRequest = () => ({type: RESET_REQUEST});

// INITIAL STATE
const initialState = {
  data: [],
  singlePost: {},
  request: {
    pending: false,
    error: null,
    success: null
  },
  formMode: {}
};

// THUNKS
//load all posts request
export const loadPostsRequest = () => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      let response = await axios.get(`${API_URL}/posts`);
      await new Promise((resolve, reject) => setTimeout(resolve, 2000));
      dispatch(loadPosts(response.data));
      dispatch(endRequest());
    } catch(error) {
      dispatch(errorRequest(error.message));
    }
  };
};

//load one post request
export const loadSinglePostRequest = (id) => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      let response = await axios.get(`${API_URL}${id}`);
      await new Promise((resolve, reject) => setTimeout(resolve, 2000));
      dispatch(loadSinglePost(...response.data));
      dispatch(endRequest());
    } catch(error) {
      dispatch(errorRequest(error.message));
    }
  };
};

//add new post endRequest
export const addPostRequest = (post) => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      await axios.post(`${API_URL}/posts`, post);
      await new Promise((resolve, reject) => setTimeout(resolve, 2000));
      dispatch(endRequest());
    } catch (error) {
      dispatch(errorRequest(error.message));
    }
  };
};

// REDUCER
export default function reducer(statePart = initialState, action = {}) {
  switch(action.type) {
    case LOAD_POSTS:
      return {...statePart, data: action.payload};
    case START_REQUEST:
      return {...statePart, singlePost: {}, request: {pending: true, error: null, success: null}};
    case END_REQUEST:
      return {...statePart, request: {pending: false, error: null, success: true}};
    case ERROR_REQUEST:
      return {...statePart, request: {pending: false, error: action.error, success: false}};
    case LOAD_SINGLEPOST:
      return {...statePart, singlePost: action.payload};
    case RESET_REQUEST:
      return {...statePart, request: {pending: false, error: null, success: null}};
    default:
    return statePart;
  }
};
