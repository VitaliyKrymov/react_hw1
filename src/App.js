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

import {BrowserRouter, Route, Router} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";


function App() {
  return(
      <Router>>

          <Route path="/about">
              <About/>
          </Route>
          <Route path="/posts">
              <Posts/>
          </Route>

          Работает АРР
      </Router>
  )
}

export default App;


