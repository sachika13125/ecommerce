import React, { useState, useEffect } from 'react'
import './Popup.css'

const Popup = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {showFlag, setShowModal, product} = props;
  
  useEffect(() => {
    setCurrentIndex(0);
  }, [showFlag]);
  


  const handleModalContentClick = (event) => {
    event.stopPropagation();
  };

  const goToPreviousImage = () => {
    console.log('Previous Image Clicked');
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNextImage = () => {
    console.log('Next Image Clicked');

    if (currentIndex < product.images.length - 1) {
      setCurrentIndex(currentIndex + 1);
      console.log('Current Index:', currentIndex);
    };
  };


  

  return (
    <>
      {showFlag ? (
        <div id="overlay" onClick={() => { setShowModal(false) }}>

          <div id="modalContent" onClick={handleModalContentClick}>

            <div className="images-container">
              <div className='img-section'>
                <img
                  src={product.images[currentIndex]} // 現在のcurrentIndexに対応する画像を表示
                  alt={`Product Image ${currentIndex}`}
                  className="current-image"
                />
                <button id="prev" onClick={goToPreviousImage}>&laquo;</button>
                <button id="next" onClick={goToNextImage}>&raquo;</button>
              </div>

              <div className='describe-section'>
                <p>{product.title}</p>
                <p>CAD: {product.price}</p>
                <p>{product.description}</p>
              </div>  
            </div>
            <button onClick={() => { setShowModal(false) }} className='x-btn'>x</button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Popup;