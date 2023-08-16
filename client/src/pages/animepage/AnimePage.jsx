import { Footer } from '../../component/footer/Footer'
import { PostsAnime } from '../../component/posts_anime/PostsAnime'
import { TopBar } from '../../component/topbar/topbar'
import './AnimePage.css'

export const AnimePage = () => {
  return (
    <div className='AnimePage'>
      <TopBar/>
      <div className='Main-AnimePage-Container'>
        <PostsAnime/>
      </div>
      <Footer/>
    </div>
  )
}
