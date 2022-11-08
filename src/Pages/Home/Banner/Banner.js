import React from 'react';
import img1 from '../../../assets/banner/1.png';
import img2 from '../../../assets/banner/2.png';
import img3 from '../../../assets/banner/3.png';
import BannerDetails from './BannerDetails';

const Banner = () => {
    const bannerData = [
        {
            image: img1,
            prev: 6,
            id: 1,
            next: 2
        },
        {
            image: img2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: img3,
            prev: 2,
            id: 3,
            next: 1
        },
        
    ]
    return (
        <div className="carousel w-full py-10">
                {
                    bannerData.map(slide => <BannerDetails
                        key={slide.id}
                        slide={slide}
                    > </BannerDetails>)
                }
        </div>
    );
};

export default Banner;