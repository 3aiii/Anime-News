import './SubPostAnime.css'

export const SubPostAnime = () => {
    // const Date = 5
    return (
        <div className='SubPostAnime'>
            <div className='Sub-PostsAnime-2'>
                <a href='/anime' className='Sub-PostsAnime-2-a'>
                    <img className='Sub-PostsAnime-2-img' src='https://a.storyblok.com/f/178900/1440x2048/ff6d0dfdb4/24729958fbd4f8dcd0f0e32e71ef8f801666797103_main.jpg' alt=''/>
                    {
                        Date === 5 ? (
                            <span className='Sub-PostsAnime-2-img-span'>News</span>
                        ) : (
                            <span></span>
                        )
                    }
                </a>
                <div className='Sub-PostsAnime-2-text'>
                    <a href='/anime' className='Sub-PostsAnime-2-Topic'>1914 translation by H. Rackham</a>
                    <div className='Sub-PostsAnime-2-blog-DateAndCategory'>
                        <p className='Post-Date'>Aug 5,11:44</p>
                        <div className='Post-Cats'>
                            <a href='/' className='Post-Cat'>anime</a>
                        </div>
                    </div>
                    <p className='Sub-PostsAnime-2-desc'>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "Lorem ipsum dolor sit amet, consectetur adipiscing               
                    </p>
                </div>
            </div>
        </div>
    )
}
