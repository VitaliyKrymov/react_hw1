import React from 'react';
import MyButton from "../UI/button/MyButton";
import {useHistory, useNavigate} from "react-router";


const PostItem = (props) => {
    const navigate = useNavigate();

    return (
        <div>
            <div className='post'>
                <div className= 'post__content'>
                    <strong> {props.post.id}. {props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                </div>
                <div className='post__btn'>
                    <MyButton onClick ={()=> path.push(`/posts/${props.post.id}`)} >
                        Открыть
                    </MyButton>
                    <MyButton onClick ={()=>props.remove(props.post)} >
                        Удалить
                    </MyButton>
                </div>
            </div>
        </div>


    );
};

export default PostItem;