import React from 'react'
import bannerImg from '../../assets/banner.png'

export const Banner = () => {
  return (
        <div className = 'flex flex-col md:flex-row-reverse py-16 justify justify-between items-center gap-12'>
            <div className='md:w-1/2 w-full flex items-center md:justify-end'>
            <img src={bannerImg} alt = ""/>
    </div>
             <div className = 'md:w-1/2 w-full'>
                    <h1 className = 'md:text-5xl text-2xl font-medium mb-7'>New Release this week </h1>
                    
                    <p className = 'mb-10'>Its time to update your reading list with some of the latest and gratest 
                        releases in the literary world. From heart-pumping thrillers to captavating memoirs, this week's
                        new release offer something for everyone.                   
                    </p>
                    <button className='btn-primary'>Subscribe</button>
            </div>
        
</div>
  )
}

export default Banner