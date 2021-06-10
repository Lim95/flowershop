import React from "react";
import { Carousel } from 'react-responsive-carousel';
import data from "../../pages/data"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const CarouselPage = () => {
  return (
    <div className="carousel-wrapper">
        <div className="carousel-cont">
            <Carousel showArrows autoPlay showThumbs={false} infiniteLoop={true}>
                {data.products.map((product) => (
                <div key={product._id}>

                    <img src={product.image} alt={product.name} width="500" height="500"/>
                    <p className="legend">{product.name}</p>

                </div>
                ))}
            </Carousel>        
        </div>
    </div>

  );
}

export default CarouselPage;