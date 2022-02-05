import React from 'react';
import PostItem from "../posts/PostItem";

const PostList = ({posts,title}) => {
    console.log({posts});
    return (
        <div>
            <h1 style={{textAlign:'center'}}>
                {title}
            </h1>
            {posts.map(post =>
                <PostItem post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;