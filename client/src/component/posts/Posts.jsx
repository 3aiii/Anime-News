import { Post } from '../post/Post'
import { Sidebar } from '../../component/sidebar/Sidebar'
import './Posts.css'

export const Posts = () => {
  return (
    <>  
      <div className='Posts-Topic'>
        <p className='Post-Topic-text'>Saturday, August 5</p>
      </div>
      <div className='Posts'>
        <div className='Posts-box'>
            <Post/>
            <Post/>
            <Post/>         
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>                                                    
        <Sidebar/>                                                    
      </div>
    </>
  )
}
