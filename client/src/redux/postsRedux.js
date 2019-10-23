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
    console.log('Request started...');
    setTimeout(() => {
      const array = [{id: 'asd123', title: 'Test', content: 'Lorem ipsum'}];
      dispatch(loadPosts(array));
      console.log('Request finished after 2sec...');
    }, 2000);
  }
}

// REDUCER
export default function reducer(statePart = initialState, action = {}) {
  switch(action.type) {
    case LOAD_POSTS:
      return [...action.payload];
    default:
    return statePart;
  }
};
