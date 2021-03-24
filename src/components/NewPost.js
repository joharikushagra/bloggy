import React from 'react'
import '../styles/NewPost.css';

function NewPost() {
    return (
        <div className="div__container">
        {/* <div > */}
        <h4 className="form__containerHeading">*Share Your Interview Experience*</h4>
        <form className="form__container">
           <div className="form__postTitle">
            <label>Post Title:</label>
            <input required type="text" placeholder="Enter Title.."/>
           </div>
           <div className="form__postRole">
            <label>Role Interviewed For:</label>
            <input required type="text" placeholder="Enter Role"/>
           </div>
           <div className="form__company">
            <label>Company Interviewed At:</label>
            <input required type="text" placeholder="Enter Company.."/>
           </div>
           <div className="form__skills">
            <label>Required Skills:</label>
            <input required type="text" placeholder="Enter Skills"/>
           </div>
           <div className="form__experience">
            <label>Interview experience Details:</label>
            <textarea required maxLength={200} placeholder="Enter Description"/>
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

export default NewPost
