

import React from 'react'
import axios, { post } from 'axios';

class SimpleReactFileUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      file:null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }

  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    console.log(this.state.file,"file")
    // this.fileUpload(this.state.file).then((response)=>{
    //   console.log(response.data);
    // })
  }

  onChange(e) {
  var file = e.target.files[0];
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = (e)=> {
    // The file's text will be printed here
    console.log(e.target.result)
    this.setState({res:e.target.result})
  };
 
  }


  fileUpload(file){
    const url = 'http://example.com/file-upload';
    const formData = new FormData();
    formData.append('file',file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)
  }

  render() {
    return (
      <form  enctype="multipart/form-data" onSubmit={this.onFormSubmit}>
        <h1>File Upload</h1>
        <input type="file" multiple onChange={this.onChange} />
        <button type="submit">Upload</button>
      </form>
   )
  }
}



export default SimpleReactFileUpload