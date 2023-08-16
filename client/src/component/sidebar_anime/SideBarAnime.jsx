import { SidebarAnime_coin } from '../sidebar_animecontent/SidebarAnime_coin'
import './SideBarAnime.css'

export const SideBarAnime = () => {
  return (
    <div className='SideBarAnime'>
      <img className='SideBarAnime-img' src='https://www.momstudio.co/wp-content/uploads/2022/02/ads-marketing.png'/>
      <div className='SideBarAnime-content'>
        <SidebarAnime_coin/>
        <SidebarAnime_coin/>
        <SidebarAnime_coin/>
        <SidebarAnime_coin/>
      </div>
    </div>
  )
}
