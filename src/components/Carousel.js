import Image from "next/image";

function Carousel() {
  return (
    <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* Carousel Images */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div style={{ position: "relative", height: "1000px" }}>
            <Image
              src="/assets/carousel1.jpg" // Path to your image in public/images folder
              alt="Slide 1"
              layout="fill"
              objectFit="cover" // Ensures full-width image scaling
            />
          </div>
        </div>
        <div className="carousel-item">
          <div style={{ position: "relative", height: "1000px" }}>
            <Image
              src="/assets/carousel2.jpg"
              alt="Slide 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="carousel-item">
          <div style={{ position: "relative", height: "1000px" }}>
            <Image
              src="/assets/carousel3.jpg"
              alt="Slide 3"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
