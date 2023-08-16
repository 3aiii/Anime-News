import './DashBoardFormPosts.css'

export const DashBoardFormPosts = () => {
  return (
    <div className='DashBoardFormPosts'>
      <div className='DashBoardFormPosts-Main'>
        <div className='DashBoardAdmin-span-box'>
          <div className='DashBoardFormPosts-line'></div>
          <span className='DashBoardFormPosts-span'>ADD POTS</span>
          <div className='DashBoardFormPosts-line'></div>
        </div>
        <form className='DashBoardFormPosts-form'>
          <img className='DashBoardFormPosts-img' src='' alt=''/>
          <label className='DashBoardFormPosts-label'>Image</label>
          <input 
            type='file'
            className='DashBoardFormPosts-Image'
          />
          <label className='DashBoardFormPosts-label'>Topic</label>
          <input 
            type='text'
            placeholder='Write topic here !'
            className='DashBoardFormPosts-topic'
          />
          <label className='DashBoardFormPosts-label'>Description</label>
          <textarea 
            placeholder='Write description here !'
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
        </form>
      </div>
    </div>
  )
}
