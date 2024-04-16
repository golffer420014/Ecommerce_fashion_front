/* eslint-disable no-dupe-keys */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        dots: false,
    };
    const data = [
        {
            name: "test1",
            image: "image1",
        },
        {
            name: "test2",
            image: "image2",
        },
        {
            name: "test3",
            image: "image3",
        },
    ];
    return (
        <div className="w-full ">
            <Slider {...settings}>
                {data.length > 0
                    ? data.map((item, index) => (
                          <div key={index}>
                              <div className="h-[200px] md:h-[400px]  grid grid-cols-2 ">
                                  <div className="border h-full">{item.name}</div>
                                  <div className="border h-full">{item.image}</div>
                              </div>
                          </div>
                      ))
                    : null}
            </Slider>
        </div>
    );
};

export default Banner;
