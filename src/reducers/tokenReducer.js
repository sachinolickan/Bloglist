export default (state = [],action)=>{
    if(action.type === "FETCH_TOKEN"){
        return [...state,action.payload];
    };
   return state; 
};