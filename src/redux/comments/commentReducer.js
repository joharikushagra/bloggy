const initState= {
    loading:false,
    comments:[],
    error:''
}

const commentReducer = (state=initState,action)=>{
    switch(action.type){
        case 'FETCH_COMMENT_REQUEST':
            return {
                ...state,
                loading:true,
            }
        case 'FETCH_COMMENT_SUCCESS':
            return {
                ...state,
                loading:false,
                comments:action.payload,
                error:''
            }
        case 'FETCH_COMMENT_FAILURE':
            return {
                ...state,
                loading:false,
                comments:[],
                error:action.payload
            }
        default:return state
    }
}

export default commentReducer