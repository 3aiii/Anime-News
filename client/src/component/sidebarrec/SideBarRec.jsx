import './SideBarRec.css'
import {Link} from 'react-router-dom'


export const SideBarRec = () => {
  return (
    <div className='SideBarRec'>
        <div className='Sidebar-box'>
            <Link to={`/SinglePost/1`}>
                <img className='Sidebar-img' src='https://cdn.vox-cdn.com/thumbor/g3kQHbQgw7dvPOY3izDN8rMPgQc=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/23669451/solo_lvling.jpg' alt=''/>
            </Link>
            <div className='Sidebar-desc'>
              <Link to={`/SinglePost/1`} className='Sidebar-desc-a'>SOLO Leveling</Link>
              <p className='Sidebar-desc-p'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                  eniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                  velit esse
              </p>
            </div>
        </div>
    </div>
  )
}
