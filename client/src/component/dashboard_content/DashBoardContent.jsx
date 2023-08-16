import { DashBoardContentPost } from '../dashboard_content_post/DashBoardContentPost'
import { DashboardContentUser } from '../dashboard_content_user/DashboardContentUser'
import './DashBoardContent.css'

export const DashBoardContent = () => {
  return (
    <div className='DashBoardContent'>
      <div className='DashBoardContent-box-main'>
        <div className='DashBoardContent-box'>
          <div className='DashBoardContent-text'>
            <span className='DashBoardContent-span'>Total Posts</span>
            <h2 className='DashBoardContent-h2'>215</h2>
          </div>
          <i class="IconContent fa-solid fa-envelopes-bulk"></i> 
        </div>
        <div className='DashBoardContent-box'>
          <div className='DashBoardContent-text'>
            <span className='DashBoardContent-span'>Total user</span>
            <h2 className='DashBoardContent-h2'>111</h2>
          </div>
          <i class="IconContent fa-solid fa-users"></i>        
        </div>
      </div>
      <div className='DashBoardContent-span-out'>
        <span className='DashBoardContent-span-user'>New User</span>
      </div>
      <div className='DashBoardContent-box-sub'>
        <DashboardContentUser/>
        <DashboardContentUser/>
        <DashboardContentUser/>
        <DashboardContentUser/>
      </div>
      <div className='DashBoardContent-span-out'>
        <span className='DashBoardContent-span-user'>Recent Posts</span>
      </div>
      <div className='DashBoardContent-posts'>
        <DashBoardContentPost/>
        <DashBoardContentPost/>
        <DashBoardContentPost/>
        <DashBoardContentPost/>
        <DashBoardContentPost/>
      </div>
    </div>
  )
}
