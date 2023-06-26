import Pagina from '@/components/Pagina'
import React from 'react'
import { Carousel } from 'react-bootstrap'
import styles from '@/styles/index.module.css';

const index = () => {
  return (
    <>
    <Pagina>

    <Carousel data-bs-theme="dark" >
      <Carousel.Item className={`${styles.carouselImage}`}>
        <img
          src="https://images.adsttc.com/media/images/6013/8f05/f91c/8125/1500/02d2/large_jpg/Roby_Salao_Beleza-3774.jpg?1611894525"
          alt="First slide"
        />
       </Carousel.Item>
      <Carousel.Item className={`${styles.carouselImage2}`}>
        <img
          src="https://images.adsttc.com/media/images/6013/8ec4/f91c/8125/1500/02c8/slideshow/Roby_Salao_Beleza-3701.jpg?1611894456"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className={`${styles.carouselImage3}`}>
        <img
         
          src="https://images.adsttc.com/media/images/6013/8f1b/f91c/8196/0900/032c/slideshow/Roby_Salao_Beleza-3801.jpg?1611894546"
          alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item className={`${styles.carouselImage4}`}>
        <img
          
          src="https://images.adsttc.com/media/images/6013/8e33/f91c/8196/0900/0314/slideshow/Roby_Salao_Beleza--6.jpg?1611894312"
          alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
        <img
          
          src="https://images.adsttc.com/media/images/6013/8e33/f91c/8196/0900/0314/slideshow/Roby_Salao_Beleza--6.jpg?1611894312"
          alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item className={`${styles.carouselImage5}`}>
        <img
          
          src="https://images.adsttc.com/media/images/6013/8ec3/f91c/8196/0900/0324/slideshow/Roby_Salao_Beleza-3699.jpg?1611894454"
          alt="Third slide" />
        </Carousel.Item>
    </Carousel>
 

    </Pagina>
    </>
  )
}

export default index