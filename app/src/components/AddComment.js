import React from "react";

import '../style/AddComment.css'

function AddComment({store, setStore}) {

    let data = {
        name: 'Виталий',
        text: ''
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
        if (name != '' && text != '') {
            store.dispatch({
                type: 'ADD',
                placeholder: {name, text}
            })
    
            setStore(store);            
            let commentInput = document.querySelector(".input_comment")
            commentInput.value = '';
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <input className='input_comment' placeholder='Add Comment' onChange={handlerChange} onSubmit={handlerInputSubmit}/>
            </div>
        </form>
)
}
  
export default AddComment;