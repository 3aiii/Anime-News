import { Link } from 'react-router-dom'
import './Footer.css'

export const Footer = () => {
  return (
    <div className='Footer'>
        <div className='Footer-main'>
            <ul className='ul-footer'>
                <span className='footer-span'>Follows Me</span>
                <li><Link to='/' className='link-footer'><i class="IconFooter fa-brands fa-facebook"></i></Link></li>
                <li><Link to='/' className='link-footer'><i class="IconFooter fa-brands fa-twitter"></i></Link></li>
                <li><Link to='/' className='link-footer'><i class="IconFooter fa-brands fa-instagram"></i></Link></li>
            </ul>
            <div className='footer-bar'>
                <ul className='ul-footer'>
                    <li><Link to= '/' className='footer-li'>Home</Link></li>
                    <li><Link to= '/people' className='footer-li'>People</Link></li>
                    <li><Link to= '/anime' className='footer-li'>Anime</Link></li>
                    <li><Link to= '/game' className='footer-li'>Game</Link></li>
                    <li><Link to= '/podcast' className='footer-li'>Podcast</Link></li>
                    <li><Link to= '/event' className='footer-li'>Event</Link></li>
                </ul>
            </div>
            <div className='footer-text'>
                All material Copyright © 2023 Anime News Create by Sirapat Wongphatsawek.
            </div>
        </div>
    </div>
  )
}
