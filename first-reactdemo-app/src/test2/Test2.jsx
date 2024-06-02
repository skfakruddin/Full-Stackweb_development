import './Test2.css';
import { useState,useEffect} from 'react';

function Test2(){
 let [posts,setPosts]=useState([])
 async function getPosts(){
    let response= await fetch('https://jsonplaceholder.typicode.com/posts')
    let data= await response.json();
    setPosts(data);
     
 }
 useEffect(()=>{getPosts()},[])
 
return(
  <div className='apitable'> 
    <h1>test2 component</h1>
    <table>
        <thead>
            <tr>
                <th>userId</th>
                <th>id</th>
                <th>title</th>
                <th>body</th>
            </tr>
        </thead>
        <tbody>
            {
                posts.map(post=><tr>
                    <td>{post.userId}</td>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                </tr>)
            }
        </tbody>
    </table>
  </div>
)
}
export default Test2;

