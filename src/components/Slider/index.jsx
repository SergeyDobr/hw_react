import './Slider.module.css';
import React, { useState } from 'react';


const images = [
   'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
   'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg',
   'https://cdn.pixabay.com/photo/2019/02/19/08/43/milky-way-4006343_1280.jpg',
   'https://www.recordnet.com/gcdn/presto/2021/03/22/NRCD/9d9dd9e4-e84a-402e-ba8f-daa659e6e6c5-PhotoWord_003.JPG?width=660&height=425&fit=crop&format=pjpg&auto=webp',
   'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg'
];

const Slider = () => {
   const [currentImage, setCurrentImage] = useState(0);

   const nextSlide = () => setCurrentImage((currentImage + 1) % images.length)

   const prevSlide = () => setCurrentImage((currentImage - 1 + images.length) % images.length);

   return (
      <div className="slider">
         <button onClick={prevSlide}>before</button>
         <img src={images[currentImage]} alt={`Slide ${currentImage + 1}`} />
         <button onClick={nextSlide}>after</button>
      </div>
   );
}

export default Slider;