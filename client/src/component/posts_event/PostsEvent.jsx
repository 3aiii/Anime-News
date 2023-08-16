import { AllPost } from '../allpost/AllPost'
import { Post } from '../post/Post'
import './PostsEvent.css'

export const PostsEvent = () => {
  return (
    <div className='PostsEvent'>
        <div className='PostsEvent-Posts'>
            <div className='PostsEvent-welcome'>
                <img className='PostsEvent-img' src='https://blog.admatter.co/wp-content/uploads/2019/12/00-Nov-_-4-%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A2%E0%B8%B4%E0%B8%87%E0%B9%82%E0%B8%86%E0%B8%A9%E0%B8%93%E0%B8%B2-Facebook-Ads-%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%82%E0%B8%B2%E0%B8%A2%E0%B8%94%E0%B8%B5%E0%B8%81%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B9%80%E0%B8%94%E0%B8%B4%E0%B8%A1-01.jpg' alt=''/>
            </div>
            <div className='PostsEvent-Topic'>
                <span className='PostsEvent-span'>ALL EVENT NEWS</span>
            </div>
            <div className='PostsEvent-post'>
                <AllPost/>
                <AllPost/>
                <AllPost/>
                <AllPost/>
                <AllPost/>
                <AllPost/>
                <AllPost/>
                <AllPost/>
            </div>
        </div>
    </div>
  )
}
