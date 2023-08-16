import { PostPeople } from '../post_people/PostPeople'
import './PostsPeople.css'

export const PostsPeople = () => {
  return (
    <>
        <div className='PostsPeople-already-main'>
            <div className='PostsPeople'>
                <div className='Post-slide'>
                    <span className='Posts-span'>All People news</span>
                </div>
                <div className='Posts-main'>
                    <PostPeople/>
                    <PostPeople/>
                    <PostPeople/>
                    <PostPeople/>
                </div>
            </div>
        </div>
    </>
  )
}
