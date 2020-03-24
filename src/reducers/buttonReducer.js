export default (state = [],action)=>{
    if(action.type === "BUTTON_SELECTED"){
        return action.payload;
    };
   return state; 
};