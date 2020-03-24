import React, { Component } from 'react'
import {connect} from 'react-redux';
import { fetchPosts,secure,fetchPostsSaga} from '../actions';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ClickComponent from './button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Appbar from './appbar';
import decode from 'jwt-decode';
import File from './fileupload';
import List from '@material-ui/core/List';
import { Divider } from '@material-ui/core';
import Posts from './posts';
//import Pagination from './pagination';
import Pagination from "react-js-pagination";
//require("bootstrap/less/bootstrap.less");


const user ={
    "username":sessionStorage.getItem("username"),
    "refreshToken":sessionStorage.getItem("refreshToken")

}
 class PostList extends React.Component {

    constructor(props){
        super(props);
        this.state={
            postsarray : [],
            currentPage:1,
            postsPerPage:10
        }
    }
      
     componentDidMount(){
       
        this.props.secure(sessionStorage.getItem("token"),user);
   
            this.props.fetchPostsSaga();
           
    
     };

    
     componentDidUpdate(prevProps) {

        if (this.props.newToken.length !== 0) {
           // console.log(this.props.newToken[0].token,"new token array");
            sessionStorage.removeItem("token");
            sessionStorage.setItem("token",this.props.newToken[0].token)
        }
        if(this.props.posts.length !== 0){
            if (this.props.posts !== prevProps.posts) {
                this.setState({postsarray:this.props.posts});
            }
            sessionStorage.setItem( 'data', JSON.stringify(this.props.posts) );

        }


        
     }


    //  renderList(){
        
    //         return currentPost.map(post =>{
    //             return(
    //                 <div>
    //                 <List>
    //                 <div key={post.id}>{post.title}</div>
    //                 </List>
    //                 <Divider/>
    //                 </div>
    //                     );
    //                 });
                    
    //     };


        // renderListCache(){          
        //         var dataCache = JSON.parse(sessionStorage.getItem("data"));   
        //           return dataCache.map(post =>{
        //               return(
        //                 <div>
        //                 <List>
        //                 <div key={post.id}>{post.title}</div>
        //                 </List>
        //                 <Divider/>
        //                 </div>
        //                     );
        //                   });
        //    };
        handlePageChange=(pageNumber)=> {
            //console.log(`active page is ${pageNumber}`);
            this.setState({currentPage: pageNumber});
          }


    render() {
       //console.log(this.state.postsarray,"values inside render")
        const indexOfLastPost = this.state.currentPage*this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const currentPost = this.state.postsarray.slice(indexOfFirstPost,indexOfLastPost);

        // Change page
       //const paginate = pageNumber => this.setState({currentPage:pageNumber});

        return (
            <Grid container>
            <Grid item xs={12}>
             <Appbar/>
            </Grid>

            <Grid item xs={6} style={{paddingTop:"100px",paddingLeft:"20px"}}>
             <Posts posts={currentPost}/>
             {/* <Pagination
                postsPerPage={this.state.postsPerPage}
                totalPosts={this.state.postsarray.length}
                paginate={paginate}
            /> */}
            <div style={{display:"flex",justifyContent:"center"}}>
            <Pagination
            activePage={this.state.currentPage}
            itemsCountPerPage={this.state.postsPerPage}
            totalItemsCount={this.state.postsarray.length}
            pageRangeDisplayed={10}
            onChange={this.handlePageChange}
            />
            </div>
            </Grid>

            <Grid item xs={3} style={{paddingTop:"100px",paddingLeft:"20px"}}>
                  <ClickComponent/>         
            </Grid>

            <Grid item xs={3}style={{paddingTop:"100px",paddingLeft:"20px"}}>
               <File/>
            </Grid>
            
            </Grid>
        )
    };
};

const mapToStateProps=(state)=>{
    //console.log(state,"secure value inside postlist")
   // console.log(ownProps,"ownprops here")
  
    return {
        posts:state.posts,
        newToken:state.newToken,
        
    }
    
};

export default connect(mapToStateProps,{secure,fetchPostsSaga})(PostList);
