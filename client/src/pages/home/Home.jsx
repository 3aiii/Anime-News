import { AllPosts } from '../../component/allposts/AllPosts'
import { Footer } from '../../component/footer/Footer'
import { Posts } from '../../component/posts/Posts'
import { TopBar } from '../../component/topbar/TopBar'
import { Welcome } from '../../component/welcome/Welcome'
import './Home.css'

export const Home = () => {
  return (
    <div className='Main-Home-container'>
    dwdw
        <TopBar/>
        <Welcome/>
        <div className='Home-Post'>
          <Posts />
          <span className='space'>All News</span>
          <AllPosts/>
        </div>
        <Footer/>
    </div>
  )
}
