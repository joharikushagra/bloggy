import axios from "axios"

export const fetchRequest =()=>{
    return {
        type:'FETCH_POST_REQUEST'
    }
}
export const fetchSuccess =(payload)=>{
    return {
        type:'FETCH_POST_SUCCESS',
        payload
    }
}
export const fetchFailure =(error)=>{
    return {
        type:'FETCH_POST_FAILURE',
        payload:error
    }
}

export const addPost = (payload) => {
    return {
        type: "ADD_POST",
        payload: payload
    }
}

export const fetchPosts = ()=>{
    return (dispatch)=>{
        dispatch(fetchRequest);
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
            const posts= res.data.slice(0,10);
            dispatch(fetchSuccess(posts));
        }).catch(err=>{
            const error= err.message;
            dispatch(fetchFailure(error));
        })
    }
}