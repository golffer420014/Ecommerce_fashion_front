/* eslint-disable no-dupe-keys */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Btn from "./Btn";

const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        // dots: false,
    };
    const data = [
        {
            name: "test1",
            desc: "desc1",
            image: "https://www.cougar.com.pk/cdn/shop/articles/men_s_wear_1080x.webp?v=1663242281",
        },
        {
            name: "test2",
            desc: "desc2",
            image: "https://www.cougar.com.pk/cdn/shop/articles/New_Women_s_Collection_1080x.jpg?v=1662637654",
        },
    ];
    return (
        <div className="w-full ">
            <Slider {...settings}>
                {data.length > 0
                    ? data.map((item, index) => (
                          <div key={index}>
                              <div className="h-[200px] md:h-[400px]  flex justify-center items-center  ">
                                  <div className="  w-full  h-full flex justify-center items-center ">
                                      <div className="flex flex-col gap-3">
                                          <div className="text-5xl text-primary font-bold">{item.name}</div>
                                          <div className="text-xl">{item.desc}</div>
                                          <div className="text-xl"><Btn title={'Shop Now'}/></div>
                                      </div>
                                  </div>
                                  <div className="  w-full  h-full flex justify-center items-center ">
                                      <img src={item.image} className=" object-fill" />
                                  </div>
                              </div>
                          </div>
                      ))
                    : null}
            </Slider>
        </div>
    );
};

export default Banner;
