import React, { useRef, useEffect } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bn1 from "../assets/banner/bn1.jpg"
import bn2 from "../assets/banner/bn2.jpg"
import bn3 from "../assets/banner/bn4.jpg"
import bn4 from "../assets/banner/bn5.jpg"

interface Props {
    
}

const Banner: React.FC<Props> = () => {
    const sliderRef = useRef<Slider>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (sliderRef.current) {
                const currentSlide = sliderRef.current.innerSlider.state.currentSlide;
                if (currentSlide === 3) {
                    sliderRef.current.slickGoTo(0);
                } else {
                    sliderRef.current.slickNext();
                }
            }
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0 // Thay đổi slide ban đầu nếu cần
    };

    return (
        <div className='banner'>
            <Slider ref={sliderRef} {...settings}>
                <div>
                    <img src={bn1} alt="Banner 1" style={{ width: '100%', borderRadius: "10px" }} />
                </div>
                <div>
                    <img src={bn2} alt="Banner 2" style={{ width: '100%', borderRadius: "10px" }} />
                </div>
                <div>
                    <img src={bn3} alt="Banner 3" style={{ width: '100%', borderRadius: "10px" }} />
                </div>
                <div>
                    <img src={bn4} alt="Banner 4" style={{ width: '100%', borderRadius: "10px" }} />
                </div>
            </Slider>
        </div>
    );
};

export default Banner;
