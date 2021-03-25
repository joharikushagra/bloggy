import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { addPost } from '../redux/posts/postAction';
import '../styles/NewPost.css';

function NewPost() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [post, setPost] = useState({
        title: "",
        role: "",
        at: "",
        body: "",
        skills: ""
    });

     const submitHandler = (e) => {
         e.preventDefault();
        dispatch(addPost(post));
        e.target.value='';
        alert("Your Post has been added!");
        history.push("/")
     }

     const changeHandler = (e) => {
         setPost((ps => ({...ps, [e.target.name]: e.target.value})))
     }

    return (
        <div className="div__container">
        {/* <div > */}
        <h4 className="form__containerHeading">*Share Your Interview Experience*</h4>
        <form className="form__container" onSubmit={submitHandler}>
           <div className="form__postTitle">
            <label>Post Title:</label>
            <input required type="text" name="title" onChange={changeHandler} placeholder="Enter Title.."/>
           </div>
           <div className="form__postRole">
            <label>Role Interviewed For:</label>
            <input required type="text" name="role" onChange={changeHandler} placeholder="Enter Role"/>
           </div>
           <div className="form__company">
            <label>Company Interviewed At:</label>
            <input required type="text" name="at" onChange={changeHandler} placeholder="Enter Company.."/>
           </div>
           <div className="form__skills">
            <label>Required Skills:</label>
            <input required type="text" name="skills" onChange={changeHandler} placeholder="Enter Skills"/>
           </div>
           <div className="form__experience">
            <label>Interview experience Details:</label>
            <textarea required maxLength={200} name="body" onChange={changeHandler} placeholder="Enter Description"/>
           </div>
            <div className="form__submit">
            <div className="form__anonymousConfirm">
            <input type="checkbox"/><span>Post Anonymously</span>
            </div>
            <button>Submit</button>
            </div>
        </form>
        {/* </div> */}
        </div>
    )
}

// const mapDispatchToProps = dispatch =>{
//     return {
//         addPost : dispatch(addPost)
//     }
// }

// export default connect(null,mapDispatchToProps)(NewPost)
export default NewPost
