const initalState={
    value:20
}



export default (state = initalState,action)=>{
        const newState ={...state};
        
    if(action.type === "INCRIMENT_VALUE_ASYNC"){
        newState.value += action.payload;
        return newState;
        //return action.payload;
    };
   return state; 
};