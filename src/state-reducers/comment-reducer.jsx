import {
    COMMENT_REQ,
    COMMENT_SUC,
    COMMENT_FAIL
} from '../state-actions/comment-action'

// const USER_ID = localStorage.getItem('user_id');

const initialState = {
    id: '',
    author:'',
    comment:'',
    post_id:'',
 
}

const commentReducer = (state = initialState, action) => {
    switch(action.type) {
        case COMMENT_REQ:
            console.log(state, action, 'comment req 20 ')
            return{
                ...state,
                isLoadingComments:true
            }
            case COMMENT_SUC:
                console.log(state, action, 'comment suc 28')
                return {
                    ...state,
                    isLoadingComments:false,
                    hasLoadedComments:true,
                    id:action.payload.comments.id,
                    author:action.payload.comments.author,
                    comment:action.payload.comments.title,
           
                }
            case COMMENT_FAIL:
                console.log(state, action, 'comment fail 39')
                return {
                    ...state,
                    error:'Failure to Load User Comments 42'
                }
                default:
                    return state;
            }
    }
    
export default commentReducer