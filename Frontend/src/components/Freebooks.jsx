import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
import Cards from './Cards';
function Freebooks() {
    const filterData = list.filter((data) => data.category === "Free");

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
     return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
        <h1 className="font-semibold text-xl pb-2">Free Books For Reading</h1>
        <p>
        Discover the joy of reading with our collection of free books!
        At LeafLit, we believe that everyone should have access to great stories and knowledge without any cost. 
        Browse our carefully curated selection of free books and start your next reading adventure today.
        Dive into timeless classics, modern thrillers, and everything in between—completely free!
        </p>
        </div>
    
    <div>
    <Slider {...settings}>
        {filterData.map((item)=>(
            <Cards item = {item} key={item.id} />
        ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebooks;
