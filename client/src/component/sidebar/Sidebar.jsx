import { SideBarRec } from '../sidebarrec/SideBarRec'
import './Sidebar.css'

export const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <div className='Main-Sidebar'>
        <span className='Sidebar-Topic'>Recommend News</span>
      </div>
      <div className='Sidebar-text'>
        <SideBarRec/>
        <SideBarRec/>
        <SideBarRec/>
        <SideBarRec/> 
        <SideBarRec/> 
      </div>
    </div>
  )
}
