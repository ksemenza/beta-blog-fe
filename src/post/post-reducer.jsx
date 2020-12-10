import {
    POST_REQ,
    POST_SUC,
    POST_FAIL
} from './post-action'

const USER_ID = localStorage.getItem('user_id');

const initialState = {
    id: '',
    author:'',
    title:'',
    content:'',
    topic:'',
    user_id:USER_ID,
    isLoadingPosts:false,
    hasLoadedPosts:false,
}

const postReducer = (state = initialState, action) => {
    switch(action.type) {
        case POST_REQ:
            console.log(state, action, 'post req 20 ')
            return{
                ...state,
                isLoadingPosts:true
            }
            case POST_SUC:
                console.log(state, action, 'post suc 28')
                return {
                    ...state,
                    isLoadingPosts:false,
                    hasLoadedPosts:true,
                    id:action.payload.posts.id,
                    author:action.payload.posts.author,
                    title:action.payload.posts.title,
                    content:action.payload.posts.content,
                    topic:action.payload.posts.topic,
                }
            case POST_FAIL:
                console.log(state, action, 'post fail 39')
                return {
                    ...state,
                    error:'Failure to Load User Posts 42'
                }
                default:
                    return state;
            }
    }
    
export default postReducer