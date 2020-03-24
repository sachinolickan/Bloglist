import jsonPlaceholder from '../apis/jsonPlaceholder';
import signInURL from '../apis/signInURL';
import { access } from 'fs';
import _ from 'lodash';


export const fetchPosts = () => async dispatch =>{
   const response = await jsonPlaceholder.get('/posts');
   dispatch({ type:'FETCH_POSTS',payload:response.data })
};

// export const fetchPosts = () => dispatch =>{
//   _fetchPosts(dispatch);
// };
// const _fetchPosts = _.memoize(async(dispatch)=>{
//    const response = await jsonPlaceholder.get('/posts');
//    dispatch({ type:'FETCH_POSTS',payload:response.data })

// });





export const buttonSelected = (value) => dispatch => {
   //Return an action
   dispatch({type:"BUTTON_SELECTED",payload:value})
   
};


export const fetchPostsSaga = () => dispatch =>{
  // alert('inside action creator')
   dispatch({ type:'FETCH_POSTS'})
};

export const incrimentValue = () => dispatch => {
   //Return an action
   //console.log("inside im")
   dispatch({type:"INCRIMENT_VALUE",payload:1})
   
};

export const signIn = (user) => async dispatch =>{
   const response = await signInURL.post('/login',{user});
   dispatch({ type:'FETCH_SIGN',payload:response.data })
};

export const secure = (token,user) => async dispatch =>{
   const response = await signInURL.get('/secure',{ headers: { "x-access-token":token }});
   if(response.data.error===false){
      dispatch({ type:'FETCH_SECURE',payload:response.data})
      
   }
   else{
     const newToken = await signInURL.post('/token',user);
     dispatch({ type:'FETCH_TOKEN',payload:newToken.data})
   }
   
};