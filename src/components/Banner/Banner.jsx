import BannerImg from '../../assets/women/women2.jpg'
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5' 
import { GiFoodTruck } from 'react-icons/gi' 

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12
    sm:py-0">
      <div className="conatainer">
        <div className="grid grid-cols-1
        sm:grid-cols-2 gap-6 items-center">
          {/* Image section */}
          <div data-aos="zoom-in">
            <img src={BannerImg} alt="BannerImg"
            className='max-w-[500px] h-[350px] w-full
            mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
            object-fill' />
          </div>
          {/* text details section */}
          <div className='flex flex-col justify-center
          gap-6 sm:pt-0'>
            <h1 className='text-3xl sm:text-4xl
          font-bold' data-aos="fade-up">Winter Sale upto 50% Off</h1>
            <p className='text-sm text-gray-500 
            tracking-wide leading-5' data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione impedit rerum voluptatem ea beatae cupiditate.</p>
            {/* text 2 */}
            <div className='flex flex-col gap-4'>
              <div className='flex items-center gap-4'
              data-aos="fade-up">
                <GrSecure className='text-4xl h-12 w-12 shadow-sm
                p-4 rounded-full bg-violet-100 dark:bg-violet-400'/>
                <p>Quality Products</p>
              </div>
              <div className='flex items-center gap-4'
              data-aos="fade-up">
                <IoFastFood className='text-4xl h-12 w-12 shadow-sm
                p-4 rounded-full bg-orange-100 dark:bg-orange-400'/>
                <p>Fast Delivery</p>
              </div>
              <div className='flex items-center gap-4'
              data-aos="fade-up">
                <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm
                p-4 rounded-full bg-yellow-100 dark:bg-yellow-400'/>
                <p>Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Banner