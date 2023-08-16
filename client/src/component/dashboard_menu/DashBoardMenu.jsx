import './DashBoardMenu.css'
import {
  Link,
} from "react-router-dom";

export const DashBoardMenu = () => {
  return (
    <div className='DashBoardMenu'>
      <div className='DashBoardMenu-ul'>
        <div className='DashBoardMenu-link'>
          <Link to='/dashboardAdmin' className='DashBoardMenu-li'><i class="fa-solid fa-border-all"></i><span className='DashBoardMenu-li-span'>Dashboard</span></Link>
          <Link to='/dashboardAdmin/user' className='DashBoardMenu-li'><i class="fa-regular fa-user"></i><span className='DashBoardMenu-li-span'>User</span></Link>
          <Link to='/dashboardAdmin/posts' className='DashBoardMenu-li'><i class="fa-solid fa-cube"></i><span className='DashBoardMenu-li-span'>Post</span></Link>
        </div>
      </div>
      <div className='DashBoardMenu-logout'>
        <a className='DashBoardMenu-li'><i class="fa-solid fa-right-from-bracket"></i><span className='DashBoardMenu-li-span'>Logout</span></a>
      </div>
    </div>
  )
}
