import React, {useEffect, useMemo, useState} from "react";

import './App.css'
import './components/posts/PostItem.jsx'

import PostList from "./components/postList/PostList";
import PostForm from "./components/UI/PostForm";
import PostFilter from "./components/postFilter/PostFilter";
import MyModal from "./components/UI/myModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./components/hooks/usePosts";
import axios from "axios";


function App() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    useEffect(() => {
        fetchPosts()
    },[])

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false)
    }

    async function fetchPosts() {
        const response = await axios.get ('https://jsonplaceholder.typicode.com/posts')
       setPosts(response.data)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <button onClick={fetchPosts}>Get Posts</button>
            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
                Создать пользователя
            </MyButton>


            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>

            <hr style={{margin: '15px'}}/>

            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />

            <PostList remove={removePost} posts={sortedAndSearchedPosts} title='JS posts 1'/>

        </div>
    );
}

export default App;


