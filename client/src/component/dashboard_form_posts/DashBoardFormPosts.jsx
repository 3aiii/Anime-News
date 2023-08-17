import './DashBoardFormPosts.css'

export const DashBoardFormPosts = () => {
  return (
    <div className='DashBoardFormPosts'>
      <div className='DashBoardFormPosts-Main'>
        <form className='DashBoardFormPosts-form'>
          <div className='DashBoardAdmin-span-box'>
            <span className='DashBoardFormPosts-span'>CREATE POST</span>
            <p className='DashBoardPosts-p'>Create a New Post</p>
          </div>
          <label className='DashBoardFormPosts-label'>Topic</label>
          <input 
            type='text'
            placeholder='Topic'
            className='DashBoardFormPosts-topic'
          />
          <label className='DashBoardFormPosts-label'>Image</label>
          <input 
            type='file' 
            className='DashBoardFormPosts-Image'
          />
          <label className='DashBoardFormPosts-label'>Description</label>
          <textarea 
            placeholder='Description'
            className='DashBoardFormPosts-desc'
          ></textarea>
          <label className='DashBoardFormPosts-label'>Category</label>
          <select 
            className='DashBoardFormPosts-select'
          >
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
          </select>
          <div className='DashBoardPosts-box-submit'>
            <button
              className='DashBoardFormPosts-submit'
              type='submit'
            >CREATE NEW POST
            </button>
          </div>
        </form>
        <div className='DashBoardFormPosts-img-mock'>
          <img className='DashBoardFormPosts-img' src='https://anitrendz.net/news/wp-content/uploads/2022/02/kijin-gentoushou-manga-cover.jpg' alt=''/>
        </div>
      </div>
    </div>
  )
}
