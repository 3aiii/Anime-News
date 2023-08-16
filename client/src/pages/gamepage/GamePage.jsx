import { Footer } from '../../component/footer/Footer'
import { GamePage_Posts } from '../../component/gamepage_posts/GamePage_Posts'
import { TopBar } from '../../component/topbar/TopBar'
import './GamePage.css'

export const GamePage = () => {
  return (
    <div className='GamePage'>
      <TopBar/>
      <div className='Main-GamePage-Container'>
        <GamePage_Posts/>
      </div>
      <Footer/>
    </div>
  )
}