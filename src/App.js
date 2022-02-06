import React, {useState} from "react";
import './App.css'
import './components/posts/PostItem.jsx'

import PostList from "./components/postList/PostList";
import PostForm from "./components/UI/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript", body: 'Description'},
        {id: 2, title: "JavaScript 2", body: 'Description'},
        {id: 3, title: "JavaScript 3", body: 'Description'}
    ]);

    const createPost=(newPost)=>{
        setPosts([...posts,newPost])
    }


    return (
        <div className="App">
           <PostForm create={createPost}/>

            <PostList posts={posts} title='JS posts 1'/>

        </div>
    );
}

export default App;


