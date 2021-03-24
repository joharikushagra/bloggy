const initState= {
    loading:false,
    posts:[],
    error:''
}

const postReducer = (state=initState,action)=>{
    switch(action.type){
        case 'FETCH_POST_REQUEST':
            return {
                ...state,
                loading:true,
            }
        case 'FETCH_POST_SUCCESS':
            return {
                ...state,
                loading:false,
                posts:action.payload,
                error:''
            }
        case 'FETCH_POST_FAILURE':
            return {
                ...state,
                loading:false,
                posts:[],
                error:action.payload
            }
        case 'ADD_POST': 
        return {
            ...state,
            loading:false,
            posts:[{...action.payload, id: state.posts.length+101}, ...state.posts],
        }
        default:return state
    }
}

export default postReducer