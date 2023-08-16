import { SideBarRec } from '../sidebarrec/SideBarRec'
import './SinglePostSideBar.css'

export const SinglePostSideBar = () => {
  return (
    <div className='SinglePostSideBar'>
        <div className='SinglePostSideBar-Topic'>
            <span className='SinglePostSideBar-span'>- Another Topic -</span>
        </div>
        <div className='SinglePostSideBar-Content'>
            <SideBarRec/>
            <SideBarRec/>
            <SideBarRec/>
            <SideBarRec/>
            <SideBarRec/>
            <SideBarRec/>
        </div>
    </div>
  )
}
