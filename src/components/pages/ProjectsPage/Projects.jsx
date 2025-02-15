import { useState } from 'react'
import Card from '../../Card/Card'
import { projects } from '../../projectList'
import './Projects.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination,Scrollbar, Autoplay, A11y,FreeMode } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';



const Projects = () => {
const [projectsList, setProjectsList] = useState(projects)


  return (
    <div id='projects' >
      <h1>Projects</h1>

      <Swiper
       modules={[Navigation, Pagination, Scrollbar,Autoplay, A11y,FreeMode]}
       spaceBetween={20}
       centeredSlides={true}
      //  slidesPerView={3}
       navigation
       loop={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{delay:5000, disableOnInteraction:false, pauseOnMouseEnter:true}}
      freeMode={{enabled:true}}
      breakpoints= {{
        // when window width is >= 320px
        1120: {
          slidesPerView: 3,
          spaceBetween: 20},
        600: {
          slidesPerView: 2,
          spaceBetween: 10},
          480: {
            slidesPerView: 1,
            spaceBetween: 20}
        }}
       className="swiper">
        <nextEl/>
        { projectsList.map((project) =>   ( <SwiperSlide  key={project.id}> <Card project={project}/> </SwiperSlide> )    )}       
      <prevEl />
    </Swiper>
    </div>
  )
}

export default Projects
