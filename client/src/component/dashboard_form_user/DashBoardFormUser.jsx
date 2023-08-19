import './DashBoardFormUser.css'

export const DashBoardFormUser = () => {
  return (
    <div className='DashBoardFormUser'>
      <div className='DashBoardFormUser-Main'>
        <form className='DashBoardFormUser-form'>
          <div className='DashBoardAdmin-span-box'>
            <span className='DashBoardFormPosts-span'>CREATE USER</span>
            <p className='DashBoardFormPosts-p'>Create a New User</p>
          </div>
          <div className='DashBoardFormUser-Form-Fullname'>
            {/* <label className='DashBoardFormUser-label'>FirstName</label> */}
            <input 
              type='text' 
              placeholder='FirstName'
              className='DashBoardFormUser-FirstName'
            />
            {/* <label className='DashBoardFormUser-label'>LastName</label> */}
            <input 
              type='text' 
              placeholder='LastName'
              className='DashBoardFormUser-LastName'
            />
          </div>
          <label className='DashBoardFormUser-label'>Username</label>
          <input 
            type='text'
            placeholder='Usename'
            className='DashBoardFormUser-Username'
          />
          <label className='DashBoardFormUser-label'>Password</label>
          <input 
            type='password' 
            placeholder='Password'
            className='DashBoardFormUser-Password'
          />
          <label className='DashBoardFormUser-label'>Email</label>
          <input 
            type='email' 
            placeholder='Email'
            className='DashBoardFormUser-email'
          />
          
          <div className='DashBoardFormUser-box-submit'>
            <button
              className='DashBoardFormUser-submit'
              type='submit'
            >CREATE NEW USER
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
