import './PostGame.css'

export const PostGame = () => {
  return (
    <div className='PostGame'> 
        <div className='Main-Post'>
            <a href='/' className='Post-a'>
                <img className='Post-img' src='https://inwfile.com/s-dj/5nxnoz.jpg' alt=''/>
                {
                    Date === 5 ? (
                        <span className='Post-img-span'>News</span>
                    ) : (
                        <span></span>
                    )
                }
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
  )
}
