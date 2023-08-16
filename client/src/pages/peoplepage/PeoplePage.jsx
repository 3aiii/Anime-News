import { TopBar } from '../../component/topbar/Topbar'
import './PeoplePage.css'
import { PeoplePageWelcome } from '../../component/peoplepage_welcome/PeoplePageWelcome'
import { PostsPeople } from '../../component/posts_people/PostsPeople'
import { Footer } from '../../component/footer/Footer'

export const PeoplePage = () => {
  return (
    <div className='PeoplePage'>
        <TopBar/>
        <PeoplePageWelcome/>
        <div className='Main-PeoplePage-container'>
          <PostsPeople/>
        </div>
        <Footer/>
    </div>
  )
}