import './PodCastWelcome.css'

export const PodCastWelcome = () => {
  return (
    <div className='PodCastWelcome'>
        <a href='/podcast'>
            <img className='PodCastWelcome-img' src='https://storage.buzzsprout.com/variants/cdf5dgo9dw9vqjvvysb008dnul9z/8f7f06331cff08a387efa0e733c272e7ce673aa2561f97e9992b78dbac247e7a.JPG' alt=''/>
        </a>
        <div className='PodCastWelcome-text'>
            <a href='/podcast' className='PodCastWelcome-span'>My Dress-Up Darling: An Interview with the Director, Part 1</a>
            <p className='PodCastWelcome-p'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <div className='PodCastWelcome-Author-Detail'>
                <span className='PodCastWelcome-Date'>Aug 5,11:44</span>
                <span className='PodCastWelcome-Author'>By <b>Sirapat</b></span>
                <div className='Post-Cats'>
                    <a href='/' className='Post-Cat'>podcast</a>
                </div>
            </div>
        </div>
    </div>
  )
}
