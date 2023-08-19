import '../post/Post.css'
import {Link} from 'react-router-dom'

export const AllPost = () => {
  // const Date = 5
  return (
    <div className='AllPost'>
      <div className='Main-AllPost-container'>
        <Link to={`/SinglePost/1`} className='Post-a'>
            <img className='Post-img' src='https://cdn.animenewsnetwork.com/thumbnails/max600x600/cms/news.6/199021/vis-t2.webp' alt=''/>
            {
                Date === 5 ? (
                    <span className='Post-img-span'>News</span>
                ) : (
                    <span></span>
                )
            }
        </Link>
        <div className='Post-text'>
            <Link to={`/SinglePost/1`} className='Post-Topic'>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</Link>
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
  )
}
