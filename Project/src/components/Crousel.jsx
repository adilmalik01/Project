// components/DemoCarousel.js
"use client";


import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the styles
import './DemoCarousel.css'; // Import custom CSS
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';


const DemoCarousel = () => {

    return (
        <div className="carouselContainer">
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000,  // Adjust as needed
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}  // Include Autoplay in the modules array
                className="mySwiper carouselContainer"
            >
                <SwiperSlide>
                    <div className="CustomDiv w-full min-h-full flex flex-col md:flex-row ">
                        <div className="leftSideSlide w-full md:w-[50%] h-full flex items-center justify-center md:justify-start">
                            <div className="w-[90%] flex flex-col justify-center gap-5 items-start py-5 px-6 md:px-12 h-full md:h-[90vh]">
                                <div className="text flex flex-col justify-center gap-2 items-start text-left">
                                    <h1 className='text-[6vw] md:text-[3vw] fontawesome'>Hihi Digitizing Services</h1>
                                    <h1 className='text-[48px] md:text-[65px] poppinEbold'>
                                        3D Puff <br /> Logos
                                    </h1>
                                    <p className='fontawesome text-gray-700 text-[14px] md:text-[16px]'>
                                        Transform your designs into stunning, high-quality appliques with Hihi Digitizing! Our skilled team specializes in precise and vibrant applique digitizing, ensuring your creations stand out with sharp details and flawless execution.
                                    </p>
                                </div>
                                <div className="btnDiv w-full gap-4 md:gap-5 flex justify-start items-start">
                                    <button className='w-[120px] md:w-[150px] text-[14px] md:text-[16px] font-medium h-[45px] md:h-[50px] border border-black/75'>Order Now</button>
                                    <button className='w-[120px] md:w-[150px] text-[14px] md:text-[16px] font-medium h-[45px] md:h-[50px] border border-black/75'>Contact Us</button>
                                </div>
                            </div>
                        </div>

                        <div className="rightSideSlide w-[50%]  max-md:justify-center  flex justify-center items-center md:w-[50%]  min-h-[70vh]  max-md:items-center">
                            <div className="bgImage w-[70%] md:w-[80%] h-[50vh] md:h-[60vh] flex items-end">
                                {/* Background image or content goes here */}
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="CustomDiv w-full min-h-full flex flex-col md:flex-row ">
                        <div className="leftSideSlide w-full md:w-[50%] h-full flex items-center justify-center md:justify-start">
                            <div className="w-[90%] flex flex-col justify-center gap-5 items-start py-5 px-6 md:px-12 h-full md:h-[90vh]">
                                <div className="text flex flex-col justify-center gap-2 items-start text-left">
                                    <h1 className='text-[6vw] md:text-[3vw] fontawesome'>Hihi Digitizing Services</h1>
                                    <h1 className='text-[48px] md:text-[65px] poppinEbold'>
                                        3D Puff <br /> Logos
                                    </h1>
                                    <p className='fontawesome text-gray-700 text-[14px] md:text-[16px]'>
                                        Transform your designs into stunning, high-quality appliques with Hihi Digitizing! Our skilled team specializes in precise and vibrant applique digitizing, ensuring your creations stand out with sharp details and flawless execution.
                                    </p>
                                </div>
                                <div className="btnDiv w-full gap-4 md:gap-5 flex justify-start items-start">
                                    <button className='w-[120px] md:w-[150px] text-[14px] md:text-[16px] font-medium h-[45px] md:h-[50px] border border-black/75'>Order Now</button>
                                    <button className='w-[120px] md:w-[150px] text-[14px] md:text-[16px] font-medium h-[45px] md:h-[50px] border border-black/75'>Contact Us</button>
                                </div>
                            </div>
                        </div>

                        <div className="rightSideSlide w-[50%]  max-md:justify-center  flex justify-center items-center md:w-[50%]  min-h-[70vh]  max-md:items-center">
                            <div className="bgImage w-[70%] md:w-[80%] h-[50vh] md:h-[60vh] flex items-end">
                                {/* Background image or content goes here */}
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="CustomDiv w-full min-h-full flex flex-col md:flex-row ">
                        <div className="leftSideSlide w-full md:w-[50%] h-full flex items-center justify-center md:justify-start">
                            <div className="w-[90%] flex flex-col justify-center gap-5 items-start py-5 px-6 md:px-12 h-full md:h-[90vh]">
                                <div className="text flex flex-col justify-center gap-2 items-start text-left">
                                    <h1 className='text-[6vw] md:text-[3vw] fontawesome'>Hihi Digitizing Services</h1>
                                    <h1 className='text-[48px] md:text-[65px] poppinEbold'>
                                        3D Puff <br /> Logos
                                    </h1>
                                    <p className='fontawesome text-gray-700 text-[14px] md:text-[16px]'>
                                        Transform your designs into stunning, high-quality appliques with Hihi Digitizing! Our skilled team specializes in precise and vibrant applique digitizing, ensuring your creations stand out with sharp details and flawless execution.
                                    </p>
                                </div>
                                <div className="btnDiv w-full gap-4 md:gap-5 flex justify-start items-start">
                                    <button className='w-[120px] md:w-[150px] text-[14px] md:text-[16px] font-medium h-[45px] md:h-[50px] border border-black/75'>Order Now</button>
                                    <button className='w-[120px] md:w-[150px] text-[14px] md:text-[16px] font-medium h-[45px] md:h-[50px] border border-black/75'>Contact Us</button>
                                </div>
                            </div>
                        </div>

                        <div className="rightSideSlide w-[50%]  max-md:justify-center  flex justify-center items-center md:w-[50%]  min-h-[70vh]  max-md:items-center">
                            <div className="bgImage w-[70%] md:w-[80%] h-[50vh] md:h-[60vh] flex items-end">
                                {/* Background image or content goes here */}
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="CustomDiv w-full min-h-full flex flex-col md:flex-row ">
                        <div className="leftSideSlide w-full md:w-[50%] h-full flex items-center justify-center md:justify-start">
                            <div className="w-[90%] flex flex-col justify-center gap-5 items-start py-5 px-6 md:px-12 h-full md:h-[90vh]">
                                <div className="text flex flex-col justify-center gap-2 items-start text-left">
                                    <h1 className='text-[6vw] md:text-[3vw] fontawesome'>Hihi Digitizing Services</h1>
                                    <h1 className='text-[48px] md:text-[65px] poppinEbold'>
                                        3D Puff <br /> Logos
                                    </h1>
                                    <p className='fontawesome text-gray-700 text-[14px] md:text-[16px]'>
                                        Transform your designs into stunning, high-quality appliques with Hihi Digitizing! Our skilled team specializes in precise and vibrant applique digitizing, ensuring your creations stand out with sharp details and flawless execution.
                                    </p>
                                </div>
                                <div className="btnDiv w-full gap-4 md:gap-5 flex justify-start items-start">
                                    <button className='w-[120px] md:w-[150px] text-[14px] md:text-[16px] font-medium h-[45px] md:h-[50px] border border-black/75'>Order Now</button>
                                    <button className='w-[120px] md:w-[150px] text-[14px] md:text-[16px] font-medium h-[45px] md:h-[50px] border border-black/75'>Contact Us</button>
                                </div>
                            </div>
                        </div>

                        <div className="rightSideSlide w-[50%]  max-md:justify-center  flex justify-center items-center md:w-[50%]  min-h-[70vh]  max-md:items-center">
                            <div className="bgImage w-[70%] md:w-[80%] h-[50vh] md:h-[60vh] flex items-end">
                                {/* Background image or content goes here */}
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="CustomDiv w-full min-h-full flex flex-col md:flex-row ">
                        <div className="leftSideSlide w-full md:w-[50%] h-full flex items-center justify-center md:justify-start">
                            <div className="w-[90%] flex flex-col justify-center gap-5 items-start py-5 px-6 md:px-12 h-full md:h-[90vh]">
                                <div className="text flex flex-col justify-center gap-2 items-start text-left">
                                    <h1 className='text-[6vw] md:text-[3vw] fontawesome'>Hihi Digitizing Services</h1>
                                    <h1 className='text-[48px] md:text-[65px] poppinEbold'>
                                        3D Puff <br /> Logos
                                    </h1>
                                    <p className='fontawesome text-gray-700 text-[14px] md:text-[16px]'>
                                        Transform your designs into stunning, high-quality appliques with Hihi Digitizing! Our skilled team specializes in precise and vibrant applique digitizing, ensuring your creations stand out with sharp details and flawless execution.
                                    </p>
                                </div>
                                <div className="btnDiv w-full gap-4 md:gap-5 flex justify-start items-start">
                                    <button className='w-[120px] md:w-[150px] text-[14px] md:text-[16px] font-medium h-[45px] md:h-[50px] border border-black/75'>Order Now</button>
                                    <button className='w-[120px] md:w-[150px] text-[14px] md:text-[16px] font-medium h-[45px] md:h-[50px] border border-black/75'>Contact Us</button>
                                </div>
                            </div>
                        </div>

                        <div className="rightSideSlide w-[50%]  max-md:justify-center  flex justify-center items-center md:w-[50%]  min-h-[70vh]  max-md:items-center">
                            <div className="bgImage w-[70%] md:w-[80%] h-[50vh] md:h-[60vh] flex items-end">
                                {/* Background image or content goes here */}
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default DemoCarousel;
