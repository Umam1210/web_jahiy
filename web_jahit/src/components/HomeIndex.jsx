import React from 'react'

export default function HomeIndex() {
    return (
        <div
        id="carouselExampleCrossfade"
        className="carousel slide carousel-fade relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active float-left w-full">
            <img
              src="https://ceklist.id/wp-content/uploads/2022/02/Model-Kebaya-Modern-Hijab-Terbaik.jpg"
              className="block w-screen h-screen"
              alt="image"
            />
          </div>
          <div className="carousel-item float-left w-full">
            <img
              src="https://res.cloudinary.com/sisternet-co-id/image/upload/q_auto:best,f_auto/article/ftbms6hiipuo57yf8azi.jpg"
              className="block w-screen h-screen"
              alt="image"
            />
          </div>
          <div className="carousel-item float-left w-full">
            <img
              src="https://akcdn.detik.net.id/visual/2016/03/10/666fe433-d285-45d6-8c50-5e26ccfd8468_169.jpg?w=650"
              className="block w-full h-screen"
              alt="image"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
}
