import React, {useMemo, useState} from "react";
import './App.css'
import './components/posts/PostItem.jsx'

import PostList from "./components/postList/PostList";
import PostForm from "./components/UI/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "A JavaScript", body: 'ZZ Description'},
        {id: 2, title: "G JavaScript 2", body: 'HH Description'},
        {id: 3, title: "B JavaScript 3", body: 'AA Description'}
    ]);


    const [selectedSort, setSelectedSort] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const sortedPosts = useMemo(() => {
            if (selectedSort) {
            return [...posts.sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))]
        }
        return posts;
    }, [selectedSort, posts]);

    const sortedAndSearchedPosts = useMemo( () => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
    },[searchQuery, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const sortPosts = (sort) => {
        setSelectedSort(sort);
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px'}}/>
            <div>
                <MyInput
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder='...Поиск'
                />
                <MySelect
                    value = {selectedSort}
                    onChange = {sortPosts}
                    defaultValue = 'Сортировка по'
                    options = {[
                        {value: 'title', name: 'По названию'},
                        {value: 'body', name: 'По описанию'}
                    ]}
                />

            </div>

            {sortedAndSearchedPosts.length
                ?
                <PostList remove={removePost} posts={sortedAndSearchedPosts} title='JS posts 1'/>
                :
                <h2 style={{textAlign: 'center'}}>
                    'Посты не найдены'
                </h2>}
        </div>
    );
}

export default App;


