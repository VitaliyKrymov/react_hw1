import React, {useState} from "react";
import './App.css'
import './components/posts/PostItem.jsx'

import PostList from "./components/postList/PostList";
import PostForm from "./components/UI/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript", body: 'Description'},
        {id: 2, title: "JavaScript 2", body: 'Description'},
        {id: 3, title: "JavaScript 3", body: 'Description'}
    ]);
    const [selectedSort, setSelectedSort] = useState('');
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const sortPosts = (sort) => {
      setSelectedSort(sort);
     //todo 1:10:51
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin:'15px'}}/>
            <div>
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts()}
                    defaultValue='Сортировка по'
                    options={[
                        {value:'title', name: 'По названию'},
                        {value:'body', name: 'По описанию'}
                    ]}
                />

            </div>

            {posts.length
                ? <PostList remove={removePost} posts={posts} title='JS posts 1'/>
                : <h2 style={{textAlign: 'center'}}>
                    'Посты не найдены'
                </h2>}
        </div>
    );
}

export default App;


