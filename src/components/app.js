import React from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import PostList from './PostList';
import SignIn from './signin';



const App = () => {
  return (
    <div>
    <BrowserRouter>
     <Switch>
     <Route path="/" component={SignIn} exact/> 
    < Route path="/home" component={PostList}  />    
    </Switch>
    </BrowserRouter>
    </div>
  );
};

export default App;