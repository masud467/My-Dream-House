const SliderBanner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full h-[600px] ">
        <img
          src="https://i.ibb.co/h8gQqZM/night-architecture-outdoors-dusk-building-exterior-tree-grass-illuminated-generative-ai.jpg"
          className="w-full rounded-lg "
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full h-[600px]">
        <img
          src="https://i.ibb.co/g94rDkk/modern-residential-building.jpg"
          className="w-full rounded-lg"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full h-[600px]">
        <img
          src="https://i.ibb.co/mtbmpDc/21561.jpg"
          className="w-full rounded-lg"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full h-[600px]">
        <img
          src="https://i.ibb.co/Gd8HL1F/light-garden-luxury-pool-nature.jpg"
          className="w-full rounded-lg"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default SliderBanner;
