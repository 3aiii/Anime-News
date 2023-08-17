import './SinglePost.css'
import { TopBar } from '../../component/topbar/TopBar'
import { Footer } from '../../component/footer/Footer'
import { SinglePostSideBar } from '../../component/singlepost_sidebar/SinglePostSideBar'

export const SinglePost = () => {
  return (
    <div className='Main-SinglePost'>
        <TopBar/>
        <div className='SinglePost-ads'>
            <img className='SinglePost-ads-img' src='https://www.searchenginejournal.com/wp-content/uploads/2020/01/responsive-display-ads-5e260c98e00db.jpg' alt=''/>
        </div>
        <div className='SinglePost-blog'>
            <div className='SinglePost-setblog'>
                <div className='SinglePost-flex'>
                    <div className='SinglePost-Topic'>
                        <span className='SinglePost-span'>Travis King: North Korea says US soldier fled because of racism in army</span>
                        <p className='SinglePost-date'><span className='SinglePost-span-p'><i class="IconContentDate fa-regular fa-clock"></i>posted on 2023-08-16 15:44</span> </p>
                    </div>
                    <div className='SinglePost-Content'>
                        <img className='SinglePost-Content-img' src='https://anime.atsit.in/th/wp-content/uploads/2023/04/oshi-no-ko-anime-e0b980e0b8a3e0b8b4e0b988e0b8a1e0b8aae0b895e0b8a3e0b8b5e0b8a1e0b89ae0b899-netflix-e0b8ade0b8b4e0b899e0b980e0b894e0b8b5e0b8a2.jpg' alt=''/>
                        <div className='SinglePost-Content-main'>
                            <p className='SinglePost-Content-p'>
                                It is a long established fact that a reader will be distracted by the readable content o
                                f a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-
                                less normal distribution of letters, as opposed to using 'Content here, content here', making i
                                t look like readable English. Many desktop publishing packages and web page editors now use Lore
                                m Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites s
                                ill in their infancy. Various versions have evolved over the years, sometimes by accident, sometime
                                s on purpose (injected humour and the like).
                            </p>
                        </div>
                    </div>
                </div>
                <SinglePostSideBar/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
