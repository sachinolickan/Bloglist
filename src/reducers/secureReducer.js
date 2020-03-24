export default (state = [],action)=>{
    if(action.type === "FETCH_SECURE"){
        return [...state,action.payload];
    };
   return state; 
};