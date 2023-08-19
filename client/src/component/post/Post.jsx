import './Post.css'
import {Link} from 'react-router-dom'

export const Post = () => {
    // Date is a present date gonna put <span></span>
    // let Date = 5
    
    return (
        <div className='Post'>
            <div className='Main-Post'>
                <Link to={`/SinglePost/1`} className='Post-a'>
                    <img className='Post-img' src='https://inwfile.com/s-dj/5nxnoz.jpg' alt=''/>
                    {
                        Date === 5 ? (
                            <span className='Post-img-span'>News</span>
                        ) : (
                            <span></span>
                        )
                    }
                </Link>
                <div className='Post-text'>
                    <Link to={`/SinglePost/1`} className='Post-Topic'>1914 translation by H. Rackham</Link>
                    <div className='Post-blog-DateAndCategory'>
                        <p className='Post-Date'>Aug 5,11:44</p>
                        <div className='Post-Cats'>
                            <Link to={`/category`} className='Post-Cat'>people</Link>
                            <Link to={`/category`} className='Post-Cat'>anime</Link>
                            <Link to={`/category`} className='Post-Cat'>game</Link>
                            <Link to={`/category`} className='Post-Cat'>podcast</Link>
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
