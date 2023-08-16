import { PostsPodCast } from '../../component/posts_podcast/PostsPodCast'
import { TopBar } from '../../component/topbar/TopBar'
import { Footer } from '../../component/footer/Footer'
import './PodCastPage.css'

export const PodCastPage = () => {
  return (
    <div className='PodCastPage'>
        <TopBar/>
        <div className='PodCastPage-content'>
          <PostsPodCast/>
        </div>
        <Footer/>
    </div>
  )
}
