import React, { useState } from 'react';
import styles from './Galleri.module.css'; // Импортируем стили как объект

const Galleri = () => {
   const [currentSlide, setCurrentSlide] = useState(0);
   const images = [
      'https://carnetwork.s3.ap-southeast-1.amazonaws.com/file/36346b90e9ed41209ec6b093b61c21ef.jpg',
      'https://www.trustford.co.uk/img/electric-and-hybrid/mild-hybrid.jpg',
      'https://images.clickdealer.co.uk/vehicles/4277/4277170/full/95432536.jpg',
      'https://s3.eu-central-1.amazonaws.com/v3-ncg.motory.com/vehicle-new/575x431/l-1691052368.5844-64cb69508eacf.webp'
   ];

   const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
   };

   const prevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
   };

   return (
      <div className={styles.sliderContainer}>
         <div className={styles.slider}>
            {images.map((image, index) => (
               <div
                  className={index === currentSlide ? `${styles.slide} ${styles.active}` : styles.slide}
                  key={index}
               >
                  <img src={image} alt={`Slide ${index + 1}`} />
               </div>
            ))}
            <button className={styles.prevButton} onClick={prevSlide}>
               &lt;
            </button>
            <button className={styles.nextButton} onClick={nextSlide}>
               &gt;
            </button>
         </div>
         <div className={styles.thumbnailsContainer}>
            {images.map((image, index) => (
               <div
                  className={index === currentSlide ? `${styles.thumbnail} ${styles.active}` : styles.thumbnail}
                  key={index}
                  onClick={() => setCurrentSlide(index)}
               >
                  <img src={image} alt={`Thumbnail ${index + 1}`} />
               </div>
            ))}
         </div>
      </div>
   );
};

export default Galleri;
