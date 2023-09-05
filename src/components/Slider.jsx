import React, {useState} from 'react'

export const Slider = () => {
    const slides = [
        {
            url: 'src/assets/img/slide2.jpg'
        },
        {
            url: 'src/assets/img/slide3.jpg'
        },
        {
            url: 'src/assets/img/slide1.jpg'
        },
        {
            url: 'src/assets/img/slide4.jpg'
        },
        {
            url: 'src/assets/img/slide5.jpg'
        }
    ]

const [currentIndex, setCurrentIndex] = useState(0)

const prevSlide = () => {
    const firstSlide = currentIndex === 0
    const newIndex = firstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
}

const nextSlide = () => {
    const lastSlide = currentIndex === slides.length - 1
    const newIndex = lastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
}

  return (
    <div className='h-[680px] w-full m-auto relative'>
        <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full bg-center bg-cover duration-500'></div>
        <button onClick={prevSlide}
            className="absolute bottom-0 left-0 top-0 z-[1] flex w-[5%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            data-te-target="#carouselExampleIndicators"
            data-te-slide="prev">
            <span className="inline-block h-8 w-8">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6">
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            </span>
            <span
            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Previous</span>
        </button>
        <button onClick={nextSlide}
            className="absolute bottom-0 right-0 top-0 z-[1] flex w-[5%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            data-te-target="#carouselExampleIndicators"
            data-te-slide="next">
            <span className="inline-block h-8 w-8">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6">
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            </span>
            <span
            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Next</span>
        </button>
    </div>
  )
}
