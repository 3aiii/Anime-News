import './PostAnime.css'

export const PostAnime = () => {
  return (
    <div className='PostAnime'>
        <div className='Main-PostAnime-container'>
          <a  href='/anime' className='box-PostAnime-1'>
            <img className='img-PostAnime' alt='' src='https://m.media-amazon.com/images/M/MV5BYmU2MzEyMjAtOTQ5Yy00NGMxLTg0NmItMTQ0ZTM5OGY0NjUzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg'/>
            <div className='PostAnime-text'>
              <span href='/' className='Post-Topic'>1914 translation by H. Rackham</span>
              <div className='PostAnimeDateandCat'>
                <span className='PostAnime-date'>Aug 5,11:44</span>              
                <div className='Post-Cats'>
                  <a href='/' className='Post-Cat'>anime</a>
                </div>
              </div>
              <p href='/anime' className='PostAnime-p'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
              </p>
            </div>
          </a>
        </div>
    </div>
  )
}
