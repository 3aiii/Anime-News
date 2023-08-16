import './TopBar.css'
import {
  Link,
} from "react-router-dom";

export const TopBar = () => {
  return (
    <div className='Main-Topbar-container'>
        <div className='Sub-Topbar-contaniner'>
            <Link className='Topbar-iconic' to= '/'> ANIME NEWS</Link>
            <ul className='Topbar-ul'>
                <li><Link to= '/people' className='Topbar-li'>People</Link></li>
                <li><Link to= '/anime' className='Topbar-li'>Anime</Link></li>
                <li><Link to= '/game' className='Topbar-li'>Game</Link></li>
                <li><Link to= '/podcast' className='Topbar-li'>Podcast</Link></li>
                <li><Link to= '/event' className='Topbar-li'>Event</Link></li>
            </ul>
            <div className='Topbar-search'>
                <input type='text' className='Topbar-input-text' placeholder='search anime right here !'/>
                <span className='IconTopbar'><i class="TopbarIconSearch fa-solid fa-magnifying-glass"></i></span>
            </div>
        </div>
    </div>
  )
}
