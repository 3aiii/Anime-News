import { DashBoardFormPosts } from '../../component/dashboard_form_posts/DashBoardFormPosts'
import { DashBoardMenu } from '../../component/dashboard_menu/DashBoardMenu'
import './DashBoardUser.css'

export const DashBoardUser = () => {
  return (
    <div className='DashBoardUser'>
      <div className='DashBoardAdmin-header'>
        <span className='DashBoardAdmin-span'>Anime <b>News</b></span>
        <div className='DashBoardAdmin-header-container'>
          <div className='DashBoardAdmin-info'>
            <div className='DashBoardAdmin-box'>
              <i className="IconChange fa-solid fa-sun active"></i>
              <i className="IconChange fa-solid fa-moon " id='moon'></i>
            </div>
          </div>
          <div className='DashBoardAdmin-info'>
            <span className='DashBoardAdmin-info-span'>Hey,<span className='DashBoardAdmin-b'> Mai</span></span>
            <p className='DashBoardAdmin-info-p'>Admin</p>
          </div>
          <div className='DashBoardAdmin-info'>
            <img className='DashBoardAdmin-img' src='https://staticg.sportskeeda.com/editor/2023/01/eaaac-16729719475191-1920.jpg' alt=''/>
          </div>
        </div>
      </div>
      <div className='DashBoardAdmin-content'>
        <DashBoardMenu/>
        <DashBoardFormPosts/>
      </div>
    </div>
  )
}
