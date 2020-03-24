export default (state = [],action)=>{
    if(action.type === "FETCH_SIGN"){
        return [...state,action.payload];
    };
   return state; 
};