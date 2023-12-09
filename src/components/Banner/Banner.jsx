
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


import job1 from '../../assets/job/job1.jpg'
import job2 from '../../assets/job/job2.jpg'
import job3 from '../../assets/job/job3.jpg'
import job4 from '../../assets/job/job4.jpg'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className='mx-auto max-w-screen-xl'>
        <Carousel 
      spaceBetween={10}
  slidesPerView={3}
  navigation
  pagination={{ clickable: true }}
  scrollbar={{ draggable: true }}
  onSwiper={(swiper) => console.log(swiper)}
  onSlideChange={() => console.log('slide change')}
    >
    <div className='-mt-36 opacity-90'>
        <img src={job1} />
        <p className='text-purple-500	 uppercase -mt-96'>We Are here...</p>
     
     <h2 className='text-6xl text-white	 uppercase mt-15 font-bold'>A place for job seekers and </h2>

     <h1 className='text-7xl  text-white	 uppercase mt-15 font-bold	 py-2'>Difference</h1>

     <p className='text-white'>communities to grow and network </p>
     <div className='py-2 mt-2'>
     <button className="btn btn-secondary">
     
     <Link to='/login'>Login</Link>
     
     
     </button>
     </div>
   
     
     
    </div>
    <div className='-mt-24'>
        <img src={job2} />
       
     
   
    </div>
    <div className='-mt-28'>
        <img src={job3} />

     
   
    </div>
    <div className='-mt-32'>
        <img src={job4} />
     
     
     
    </div>
   
</Carousel>
    </div>
    );
};

export default Banner;