import { Footer } from '../../component/footer/Footer'
import { PostsEvent } from '../../component/posts_event/PostsEvent'
import { TopBar } from '../../component/topbar/TopBar'
import './EventPage.css'

export const EventPage = () => {
  return (
    <div className='EventPage'>
        <TopBar/>
        <div className='EventPage-Posts'>
            <PostsEvent/>
        </div>
        <Footer/>
    </div>
  )
}
