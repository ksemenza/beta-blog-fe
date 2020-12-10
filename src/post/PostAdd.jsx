import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {addPost} from './post-action'
import {connect} from 'react-redux'

const PostAdd = props => {

    console.log(props)

    const USER_ID = localStorage.getItem('user_id')
    const USERNAME = localStorage.getItem('username')

    const history = useHistory()

    const[newPost, setNewPost] = useState(
        {
            author:USERNAME,
            title:'',
            content:'',
            topic:'',
            user_id:USER_ID
        }
    )


    
    // Handle add new post submit
    const handleSubmitPost = (e) => {
        // e.preventDefault()
        props.addPost(newPost)
        props.toggleAddPost()
        setTimeout(() => {
            e.target.reset()
        }, 1500)
        }

    const handleChangePost = e => {
        setNewPost({...newPost, [e.target.name]: e.target.value})

        }

        return(
            <div className='post-add-cta'>
                <div className='post-add-form-cta'>
                    <form onSubmit={handleSubmitPost}>
                      
                        <div className='input-label-wrap'>
                            <label htmlFor='title'>
                                Title
                            </label>
                            <input
                            required
                            className='post-input-title'
                            type='text'
                            name='title'
                            id='title'
                            placeholder='Title'
                            onChange={handleChangePost}
                            value={newPost.title}
                            />                  
                        </div>

                        <div className='input-label-wrap'>
                            <label htmlFor='topic'>
                                topics
                            </label>
                            <input
                            required
                            className='post-input'
                            required
                            type='text'
                            name='topic'
                            id='topic'
                            placeholder='Post Entry'
                            onChange={handleChangePost}
                            value={newPost.topic}
                            />                  
                        </div>
                      
                        <div className='input-label-wrap'>
                            <label htmlFor='content'>
                                Content
                            </label>
                            <textarea
                            required
                            className='post-textarea'
                            required
                            type='textarea'
                            name='content'
                            id='content'
                            placeholder='Post Entry'
                            onChange={handleChangePost}
                            value={newPost.content}
                            />                  
                        </div>
                      
                 
                        <button type='submit'>Submit</button>

                    </form>
                </div>

            </div>
        )
}


const mapStateToProps = state => {
    return state;
  };
  
  export default connect(
    mapStateToProps,
    { addPost }
  )(PostAdd);