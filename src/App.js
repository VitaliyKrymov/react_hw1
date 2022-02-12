import React, {useEffect, useState} from "react";

import './App.css'
import './components/posts/PostItem.jsx'

import PostList from "./components/postList/PostList";
import PostForm from "./components/UI/PostForm";
import PostFilter from "./components/postFilter/PostFilter";
import MyModal from "./components/UI/myModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./components/hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/loader/Loader";
import {useFetching} from "./components/hooks/useFetching";
import {getPageCount, getPagesArray} from "./components/utils/pages";
import Pagination from "./components/UI/pagination/pagination";


function App() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages]= useState(0);
    const [limit, setLimit]= useState(10);
    const [page, setPage]= useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    let pagesArray = getPagesArray(totalPages)
    console.log([pagesArray])

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit,page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount,limit));
    })
    console.log(totalPages)

    useEffect(() => {
        fetchPosts(limit,page)
    }, [])

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
      setPage(page);
    fetchPosts(limit, page)
    }

    return (
        <div className="App">

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
            {postError &&
                <h1>Произошла ошибка ${postError}</h1>
            }

            {isPostsLoading
                ? <div style={{display: "flex", justifyContent: "center",marginTop:"50px"}}> <Loader/></div>
                :<PostList remove={removePost} posts={sortedAndSearchedPosts} title='JS posts 1'/>
            }

           <Pagination
               page = {page}
               changePage={changePage}
               totalPages = {totalPages}
           />


        </div>
    );
}

export default App;


