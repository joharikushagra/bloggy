import axios from "axios"

export const fetchRequest =()=>{
    return {
        type:'FETCH_USER_REQUEST'
    }
}
export const fetchSuccess =(payload)=>{
    return {
        type:'FETCH_USER_SUCCESS',
        payload
    }
}
export const fetchFailure =(error)=>{
    return {
        type:'FETCH_USER_FAILURE',
        payload:error
    }
}

export const fetchUsers = ()=>{
    return (dispatch)=>{
        dispatch(fetchRequest);
        axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
            const users= res.data.slice(0,10);
            dispatch(fetchSuccess(users));
        }).catch(err=>{
            const error= err.message;
            dispatch(fetchFailure(error));
        })
    }
}