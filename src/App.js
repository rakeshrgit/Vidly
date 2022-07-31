import React, { Component } from 'react';
import axios from 'axios';
const apiEndpoint="https://jsonplaceholder.typicode.com/posts"; 
class App extends Component {
  state = { 
    posts:[]
   } 
  
  async componentDidMount() {
    const {data:posts} = await axios.get('https://jsonplaceholder.typicode.com/posts');
    this.setState({posts})
    //console.log('response', response)
  }
  
  // handleUpdate = (async post) =>{
  //   post.title = "UPDATED";
  //   const {data} = await axios.put(apiEndpoint + '/' + post.id, post); 
  // }

  handleDelete = async post => {
    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({posts});
    
    await axios.delete(apiEndpoint + '/' + post.id);

    
  }
  render() { 
    return (
      <main className="container">
         <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
               {this.state.posts.map(post=>(
                  <tr key={post.id}>
                      <td>{post.body}</td>  
                      <td>{post.title}</td>
                      <td><button className="btn btn-danger btn-sm" onClick={() => this.handleDelete(post)}>Delete</button></td>
                  </tr>
               ))} 

            </tbody>
         </table>
      </main>
    );
  }
}
 
export default App;