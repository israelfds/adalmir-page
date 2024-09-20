import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ imagePath, imageCount }) => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const loadImages = () => {
      const imageArray = [];

      for (let i = 1; i <= imageCount; i++) {
        const imgNum = String(i).padStart(3, '0'); // Formata como 001, 002, etc.
        const imgUrl = `${process.env.PUBLIC_URL}/images/${imagePath}/${imgNum}.jpg`; // URL da imagem na pasta public
        imageArray.push(imgUrl);
      }

      //console.log('Imagens carregadas:', imageArray); // Log para depuração
      setImages(imageArray);
    };

    loadImages();
  }, [imagePath, imageCount]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Detecta se é mobile
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);

      return () => clearInterval(interval); // Limpa o intervalo ao desmontar
    }
  }, [images.length]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleImageClick = (index) => {
    setCurrentIndex((currentIndex + index) % images.length);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="image-slider">
      <button className="slider-button prev" onClick={prevImage}>←</button>
      <div className="slider-images">
        {images.length > 0 && (
          <>
            {isMobile
              ? (
                <img
                  src={images[currentIndex]}
                  alt={`Slide ${currentIndex}`}
                  className="slider-image"
                  onClick={() => handleImageClick(currentIndex)}
                />
              )
              : (
                [0, 1, 2].map((offset) => (
                  <img
                    key={offset}
                    src={images[(currentIndex + offset) % images.length]}
                    alt={`Slide ${currentIndex + offset}`}
                    className="slider-image"
                    onClick={() => handleImageClick(offset)}
                  />
                ))
              )
            }
          </>
        )}
      </div>
      <button className="slider-button next" onClick={nextImage}>→</button>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={images[currentIndex]} alt="Zoomed" className="modal-image" />
            <button className="modal-close" onClick={closeModal}>✖</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
