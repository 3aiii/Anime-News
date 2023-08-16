import './PeoplePageWelcome.css'
import {
    Link
} from 'react-router-dom'
export const PeoplePageWelcome = () => {

  return (
    <div className='PeoplePage-welcome'>
        <div className='PeoplePage-welcome-width'>
            <div className='People-welcome-img'>
                <img className='People-welcome-img-true' src='https://s.isanook.com/ga/0/ud/234/1171930/onepiece_live_action_series_n.jpg' alt=''/>
                <img className='People-welcome-img-true' src='https://media.komchadluek.net/uploads/images/contents/w1024/2021/11/UxNCK560IAMpP9TsnSwg.jpg' alt=''/>
                <img className='People-welcome-img-true' src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRTt1QVYeQy8R-BAdgi4UUkyaQ-fSb2csy3BVhnbe9OMI1icv7K' alt=''/>
            </div>
            <div className='PeoplePage-welcome-header'>
                <span className='PeoplePage-iconic' to= '/people'> People News</span>
                <p className='PeoplePage-p'>
                    "people" in this context refers to news and information related to the live-action adaptations of various anime series. 
                    It could also include news about anime voice acting, or any news relevant to individuals involved in the anime industry.
                </p>
            </div>
        </div>
    </div>
  )

}
