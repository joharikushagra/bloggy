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
        case 'ADD_COMMENT':
            console.log(action.payload)
            return {
                ...state,
                loading:false,
                comments:[{...action.payload,id:state.comments.length+1},...state.comments],
            }
        case 'UPDATE_COMMENT':
            return {
                ...state,
                loading:false,
                comments:[...state.comments.map(c => {
                    if(c.id !== action.payload.id) {
                        return c
                    }
                    return { ...c, body: action.payload.body}
                })],
            }
        case 'DELETE_COMMENT':
            return {
                ...state,
                loading:false,
                comments:[...state.comments.filter(c=>c.id!==action.payload)],
            }
        default:return state
    }
}

export default commentReducer