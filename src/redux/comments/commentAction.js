import axios from "axios"

export const fetchRequest =()=>{
    return {
        type:'FETCH_COMMENT_REQUEST'
    }
}
export const fetchSuccess =(payload)=>{
    return {
        type:'FETCH_COMMENT_SUCCESS',
        payload
    }
}
export const fetchFailure =(error)=>{
    return {
        type:'FETCH_COMMENT_FAILURE',
        payload:error
    }
}

export const fetchComments = ()=>{
    return (dispatch)=>{
        dispatch(fetchRequest);
        axios.get('https://jsonplaceholder.typicode.com/comments').then((res)=>{
            const comments= res.data;
            dispatch(fetchSuccess(comments));
        }).catch(err=>{
            const error= err.message;
            dispatch(fetchFailure(error));
        })
    }
}