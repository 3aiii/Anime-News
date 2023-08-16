import './SideBarRec.css'

export const SideBarRec = () => {
  return (
    <div className='SideBarRec'>
        <div className='Sidebar-box'>
            <a href='/'>
                <img className='Sidebar-img' src='https://cdn.vox-cdn.com/thumbor/g3kQHbQgw7dvPOY3izDN8rMPgQc=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/23669451/solo_lvling.jpg' alt=''/>
            </a>
            <div className='Sidebar-desc'>
              <a href= '/' className='Sidebar-desc-a'>SOLO Leveling</a>
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
