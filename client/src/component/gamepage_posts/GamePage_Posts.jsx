import { AllPostGame } from '../allpost_game/AllPostGame'
import { PostGame } from '../post_game/PostGame'
import './GamePage_Posts.css'

export const GamePage_Posts = () => {
   
    return (
        <div className='GamePage_Posts'>
            <div className='ads-block'>
                <img className='GamePage-ads-Post' src='https://www.lucidadvertising.com/wp-content/uploads/2021/09/diff_digi_ads.jpg' alt=''/>
            </div>
            <div className='GamePage_Posts-Main'>
                <div className='GamePage-Posts-welcome'>
                    <div className='Gamepage-Posts-img-box'>
                        <img className='GamePages-main-img-1' src='https://cdn.vox-cdn.com/thumbor/Qltjr_kLER1FvvhFLrSeqxHRCNs=/0x0:1600x900/1200x800/filters:focal(672x322:928x578)/cdn.vox-cdn.com/uploads/chorus_image/image/71741860/Jujutsu_Kaisen_season_2_01.6.jpg' alt=''/>
                        <div className='GamePages-body-img'>
                            <span className='GamePages-main-span'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</span>
                            <p className='GamePages-main-p'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                                Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                                printer took a galley of type and scrambled it to make a type specimen book. It has survived
                                not only five centuries, but also the leap into electronic
                            </p>
                            <a href='/game' className='GamePages-main-a'>READ MORE</a>
                        </div>
                    </div>
                    <div className='Gamepage-Posts-img-box-2'>
                        <a href='/game'>
                            <img className='GamePages-main-img-2' src='https://i0.wp.com/news.qoo-app.com/en/wp-content/uploads/sites/3/2023/03/Haikyu_Touch_The_Dream_Beginner_Tips_and_Reroll_Guide.jpg' alt=''/>
                        </a>
                        <div className='Post-text'>
                            <a href='/' className='Post-Topic'>1914 translation by H. Rackham</a>
                            <div className='Post-blog-DateAndCategory'>
                                <p className='Post-Date'>Aug 5,11:44</p>
                                <div className='Post-Cats'>
                                    <a href='/' className='Post-Cat'>people</a>
                                    <a href='/' className='Post-Cat'>anime</a>
                                    <a href='/' className='Post-Cat'>game</a>
                                    <a href='/' className='Post-Cat'>podcast</a>
                                </div>
                            </div>
                            <p className='Post-desc'>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing 
                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "Lorem ipsum dolor sit amet, consectetur adipiscing 
                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "Lorem ipsum dolor sit amet, consectetur adipiscing 
                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            </p>
                        </div>                   
                    </div>
                </div>
                <div className='GamePage-Posts-Topic'>
                    <span className='GamePage-Posts-span'>Saturday, August 5</span>
                </div>
                <div className='GamePage-Posts-content-current'>
                    <PostGame/>
                    <PostGame/>
                    <PostGame/>
                    <PostGame/>
                </div>
                <div className='GamePage-Posts-Topic'>
                    <span className='GamePage-Posts-span'>ALL GAME POST</span>
                </div>
                <div className='GamePage-Postss-content-all'>
                    <AllPostGame/>
                    <AllPostGame/>
                    <AllPostGame/>
                    <AllPostGame/>
                </div>
            </div>
        </div>
    )
}