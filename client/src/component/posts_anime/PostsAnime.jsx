import { Post } from '../post/Post'
import { PostAnime } from '../post_anime/PostAnime'
import { SideBarAnime } from '../sidebar_anime/SideBarAnime'
import { SubPostAnime } from '../subpostanime_2/SubPostAnime'
import './PostsAnime.css'

export const PostsAnime = () => {
  return (
    <>
      <div className='PostAnime-Topic'>
        <div className='PostAnime-line'></div>
          <span className='PostAnime-span'>Anime News</span>
        <div className='PostAnime-line'></div>
      </div>
      <div className='Main-PostAnime'>
          <SideBarAnime/>
          <div className='PostsAnime'>
            <div className='Sub-PostsAnime'>
              <div href='/anime' className='PostsAnime-posts'>
                <img className='PostsAnime-img' src='https://a.storyblok.com/f/178900/1440x2048/ff6d0dfdb4/24729958fbd4f8dcd0f0e32e71ef8f801666797103_main.jpg' alt=''/>
                <div className='PostsAnime-text'>
                    <span className='PostsAnime-Topic'>1914 translation by H.Rackhan</span>
                    <p className='PostsAnime-desc'>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "Lorem ipsum dolor sit amet, consectetur adipiscing                       
                    </p>
                    <a className='PostsAnime-a' href='/game'>READ MORE</a>
                </div>
              </div>
            </div>
            <div className='div-SubPostAnime'>
              <SubPostAnime/>
              <SubPostAnime/>
              <SubPostAnime/>
            </div>
          </div>
      </div>
      <div className='PostsAnime-header'>
        <span className='PostsAnime-current'>Saturday, August 5</span>
      </div>
      <div className='PostsAnime-Slider'>
        <PostAnime/>
        <PostAnime/>
        <PostAnime/>
        <PostAnime/>
      </div>
      <div className='PostsAnime-header'>
        <span className='PostsAnime-current'>All anime post</span>
      </div>
      <div className='PostsAnime-Allpost'>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </>
  )
}
