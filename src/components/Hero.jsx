import './Hero.css';

export default function Hero() {

  return (
    <div className='flex flex-col justify-end bg-[url("./src/assets/img/LINE_ALBUM_CRESTFACTOR_230831_36.jpg")] h-96 w-full bg-cover bg-center p-20'>
      <div className="flex flex-col items-center justify-center">
          <h1 className="mb-2 text-4xl font-bold text-8xl text-center">
            Welcome to Our Store
          </h1>
          <p className="text-2xl text-center text-black">
            Discover the latest trends and find your perfect style with us.
          </p>
      </div>
    </div>
  )
}