import './PostPeople.css'

export const PostPeople = () => {
  return (
    <div className='PostPeople'>
        <div className='Main-PostPeople'>
            <a href='/' className='PostPeople-a'>
                <img className='PostPeople-img' src='https://d.newsweek.com/en/full/1574816/bleach-20th-anniversary-anime-return.jpg' alt=''/>
                {
                    Date === 5 ? (
                        <span className='PostPeople-img-span'>News</span>
                    ) : (
                        <span></span>
                    )
                }
            </a>
            <div className='PostPeople-text'>
                <a href='/' className='PostPeople-Topic'>1914 translation by H. Rackham</a>
                <div className='PostPeople-blog-DateAndCategory'>
                    <p className='PostPeople-Date'>Yesterday, 10:19 AM <span className='PostPeople-Author'>by Hyperion_PS</span></p>
                    <div className='PostPeople-Cats'>
                        <a href='/' className='PostPeople-Cat'>people</a>
                        <a href='/' className='PostPeople-Cat'>anime</a>
                        <a href='/' className='PostPeople-Cat'>game</a>
                        <a href='/' className='PostPeople-Cat'>podcast</a>
                    </div>
                </div>
                <p className='PostPeople-desc'>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                </p>
            </div>
        </div>
        <div className='end-line'></div>
    </div>
    
  )
}
