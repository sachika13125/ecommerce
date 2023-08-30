import React, { useState, useEffect } from 'react'
import './Popup.css'

const Popup = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [props.showFlag]);
  


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

    if (currentIndex < props.productImages.length - 1) {
      setCurrentIndex(currentIndex + 1);
      console.log('Current Index:', currentIndex);
    };
  };


  

  return (
    <>
      {props.showFlag ? (
        <div id="overlay" onClick={() => { props.setShowModal(false) }}>

          <div id="modalContent" onClick={handleModalContentClick}>

            <div className="images-container">
              <div className='img-section'>
                <img
                  src={props.productImages[currentIndex]} // 現在のcurrentIndexに対応する画像を表示
                  alt={`Product Image ${currentIndex}`}
                  className="current-image"
                />
                <button id="prev" onClick={goToPreviousImage}>&laquo;</button>
                <button id="next" onClick={goToNextImage}>&raquo;</button>
              </div>

              <div className='describe-section'>
                <p>{props.productTitles}</p>
                <p>CAD: {props.productPrices}</p>
                <p>{props.productDescription}</p>
              </div>  
            </div>
            <button onClick={() => { props.setShowModal(false) }} className='x-btn'>x</button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Popup;