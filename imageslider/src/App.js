import React from 'react';
import ImageSlider from './ImageSlider'; // Assuming the component is in the same directory

const App = () => {
  // Define your images array
  const images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
  ];

  // Set custom values for parallaxIntensity and transitionSpeed
  const parallaxIntensity = 15;
  const transitionSpeed = 700;

  return (
    <div>
      <h1>Custom Image Slider</h1>
      <ImageSlider
        images={images}
        parallaxIntensity={parallaxIntensity}
        transitionSpeed={transitionSpeed}
      />
    </div>
  );
};

export default App;
