import React from 'react'
// Styled Components
import { ProjectTitle } from './Project.styled'
// Components
import FlipCard from '../cards/FlipCard'
// Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './project-swiper.css' // SwiperJS custom styles CSS
// ID generator
import { generate as id } from 'shortid'

const ProjectSwiper = ({ title, projects, className }) => {
  return (
    <section className={className}>
      <ProjectTitle>{title}</ProjectTitle>

      <Swiper
        className='swiper-projects'
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop
        spaceBetween={30}
        slidesPerView='auto'
        centeredSlides
      >
        {projects.map((project) => (
          <SwiperSlide key={id()}>
            <FlipCard config={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default ProjectSwiper
