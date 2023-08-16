import './Welcome.css'

export const Welcome = () => {
  return (
    <div className='Main-Welcome-container'>
      <div className='welcome-Topic'>
        <span className='welcome-Topic-text'>- Welcome to Anime News -</span>
      </div>
      <div className='Sub-welcome-container'>
        <a href="/" className='item-1'>
          <img src='https://i0.wp.com/akibatan.com/wp-content/uploads/2022/10/oshi-no-ko-anime-debuts-in-2023-with-90-minute-1st-episode-02.jpg?ssl=1' className='img-item'/>
          <div className='item-text'>
            <span span className='item-span-header'>
              The standard Lorem Ipsum passage, used since the 1500s
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </div>
        </a>
        <a href="/" className='item-2'>
          <img src='https://static.bangkokpost.com/media/content/20200710/c1_1949056_200710094854.jpg' className='img-item-low'/>
          <div className='item-sub-text'>
            <span span className='item-span-sub-header'>
              The standard Lorem Ipsum passage, used since the 1500s
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            </span>
          </div>
        </a>
        <a href="/" className='item-2'>
          <img src='https://i0.wp.com/doublesama.com/wp-content/uploads/2022/04/Attack-on-Titan-Final-Season-Part-2-cover.jpg?resize=640%2C905' className='img-item-low'/>
          <div className='item-sub-text'>
            <span span className='item-span-sub-header'>
              The standard Lorem Ipsum passage, used since the 1500s
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            </span>
          </div>
        </a>
        <a href="/" className='item-2'>
          <img src='https://im.uniqlo.com/global-cms/spa/res5275fe1bbcf43ed0ef37283f495cb40dfr.jpg' className='img-item-low'/>
          <div className='item-sub-text'>
            <span span className='item-span-sub-header'>
              The standard Lorem Ipsum passage, used since the 1500s
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            </span>
          </div>
        </a>
        <a href="/" className='item-2'>
          <img src='https://i0.wp.com/akibatan.com/wp-content/uploads/2023/04/suzume-anime-film-tops-china-s-korea-box-office-in-2nd-4th-weekend-01.jpg?ssl=1' className='img-item-low'/>
          <div className='item-sub-text'>
            <span span className='item-span-sub-header'>
              The standard Lorem Ipsum passage, used since the 1500s
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            </span>
          </div>
        </a>
      </div>
    </div>
  )
}
