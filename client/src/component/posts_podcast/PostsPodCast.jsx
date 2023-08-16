import { PodCastWelcome } from '../podcast_welcome/PodCastWelcome'
import { SideBarPodCast } from '../sidebar_podcast/SideBarPodCast'
import { PostPeople } from '../../component/post_people/PostPeople'
import './PostsPodCast.css'

export const PostsPodCast = () => {
  return (
    <>
    <div className='Main-PostsPodCast-Container'>
      <div className='PostsPodCast-content'>
        <div className='PostsPodCast-welcome'>
          <PodCastWelcome/>
          <PodCastWelcome/>
          <PodCastWelcome/>
          <PodCastWelcome/>
        </div>
        <div className='PostsPodCast-Topic'>
          <span className='PostsPodCast-span'>All Podcast News</span>
        </div>
        <div className='PostsPodCast-post'>
          <PostPeople/>
          <PostPeople/>
          <PostPeople/>
          <PostPeople/>
          <PostPeople/>
          <PostPeople/>
          <PostPeople/>
        </div>
      </div>
      <SideBarPodCast/>
    </div>
    </>
  )
}
