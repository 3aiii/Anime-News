import './SideBarPodCast.css'
import { SideBarRec } from '../../component/sidebarrec/SideBarRec'
import { Link } from 'react-router-dom'

export const SideBarPodCast = () => {
  return (
    <div className='SideBarPodCast'>
      <div className='SideBarPodCast-box'>
        <span className='SideBarPodCast-span'>interesting Podcast</span>
      </div> 
      <div className='SiderBarPodCast-content'>
        <SideBarRec/>
        <SideBarRec/>
        <SideBarRec/>
        <SideBarRec/>
        <SideBarRec/>
        <SideBarRec/>
        <SideBarRec/>
        <div className='SideBarPodCast-contact'>
          <div className='SideBarPodCast-follow-main'>
            <span className='SideBarPodCast-follows'>- Follows ME -</span>
          </div>
          <ul className='SideBarPodCast-ul'>
            <li><Link to='/' className='link-footer'><i class="IconFooter fa-brands fa-facebook"></i></Link></li>
            <li><Link to='/' className='link-footer'><i class="IconFooter fa-brands fa-twitter"></i></Link></li>
            <li><Link to='/' className='link-footer'><i class="IconFooter fa-brands fa-instagram"></i></Link></li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}
