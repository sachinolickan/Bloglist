

export default (state =[],action) => {
   if(action.type === "FETCH_POSTS_ASYNC"){
       return action.payload;
   }
   return state;
};