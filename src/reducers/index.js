import {combineReducers} from 'redux';
import postReducer from './postReducer';
import buttonReducer from './buttonReducer';
import signInReducer from './signinReducer';
import secureReducer from './secureReducer';
import tokenReducer from './tokenReducer';
import incrimentReducer from './incrimentreducer';


export default combineReducers({
    posts:postReducer,
    buttons:buttonReducer,
    signDetails:signInReducer,
    secureDetails:secureReducer,
    newToken:tokenReducer,
    incrimentValue:incrimentReducer
});