import React from "react";

import '../style/AddComment.css'

const baseUrl = 'http://127.0.0.1:8000/api/'

function AddComment({comments, setComments, isLogin, user}) {
    let data = {
        login: '',
        text: ''
    }
    if (isLogin) {
        data.login = user.username
    }
    
    const handlerChange = (event)=>{
        const key = event.target.name;
        const value = event.target.value;
        data.text = value;
    }
    
    const handlerInputSubmit = (event)=>{
        event.target.value = '';
    }
    
    const submitHandler = (event)=>{
        event.preventDefault();
        const {name, text} = data;
        if (isLogin) {
            let commentInput = document.querySelector(".input_comment")
            commentInput.value = '';
            
            const create = async (data)=>{
                const response = await fetch(baseUrl + 'create/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(data)
                })
                if (response.ok) {
                    const fetchComments = async () => {
                        const response = await fetch(baseUrl + "get_all/");
                        const comments_json = await response.json();
                        setComments(comments_json);
                    };
                    fetchComments();
                }
            }
            create(data)
        }
    }
    
    return (
        <form onSubmit={submitHandler}>
            <div>
                <input type='text' className='input_comment' placeholder='Add Comment' onChange={handlerChange} onSubmit={handlerInputSubmit}/>
            </div>
        </form>
    )
}
  
export default AddComment;