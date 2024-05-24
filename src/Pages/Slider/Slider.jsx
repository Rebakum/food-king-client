import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "./Slider.css"
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Slider = () => {
    return (
        <div>

            <Swiper
                navigation={true}
                pagination={
                    { clickable: true }
                }
                modules={[Navigation, Autoplay, Pagination]}
                autoplay={
                    {
                        delay: 2500

                    }
                }

                className="mySwiper"
                loop={true}>
                <SwiperSlide >
                    <div className=" Slider slider1 flex text-center flex-col  text-white space-y-5 justify-center items-center ">
                        <h3 className="rancho text-2xl text-orange-500">Savoring Global Flavors</h3>
                        <h1 className="text-7xl rancho ">Recipes from Around the World</h1>
                        <p className=" lg:w-1/2 text-center rancho text-xl ">Experience the true essence of farm-to-table dining with our seasonal menu.  Sourced directly from local farms, our ingredients are bursting with flavor and nutrients, delivering a wholesome and delicious dining experience.</p>

                        
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Slider slider2 text-center  flex flex-col text-white space-y-5 justify-center items-center  ">
                        <h3 className="rancho text-2xl text-orange-500">Fresh Harvest, Fresh Taste</h3>
                        <h1 className="text-7xl rancho ">Farm-to-Table Delights</h1>
                        <p className=" lg:w-1/2 text-center rancho text-xl ">Experience the true essence of farm-to-table dining with our seasonal menu.  Sourced directly from local farms, our ingredients are bursting with flavor and nutrients, delivering a wholesome and delicious dining experience.</p>
                        

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Slider slider3 flex  rancho text-2xl text-center flex-col text-white justify-center space-y-5 items-center">
                        <h3 className=" rancho text-2xl text-orange-500">Sweet Temptations Await</h3>
                        <h1 className="text-7xl rancho  ">The Art of Dessert</h1>
                        <p className=" lg:w-1/2 text-center rancho text-xl ">Indulge your sweet tooth with our decadent desserts crafted with passion and precision. From creamy cheesecakes to flaky pastries, each bite is a symphony of flavors and textures that will leave you craving for more.</p>

                        
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Slider slider4 flex text-center flex-col  text-white space-y-5 justify-center items-center">
                        <h3 className="rancho text-2xl text-orange-500">Nourish Your Body, Nourish Your Sou</h3>
                        <h1 className="text-7xl rancho ">Healthy Eating Made Easy</h1>
                        <p className=" lg:w-1/2 text-center rancho text-xl ">Discover the joy of healthy eating with our nutritious and delicious recipes. Packed with wholesome ingredients and vibrant flavors, our dishes will fuel your body and uplift your spirit, making every meal a celebration of well-being.</p>
                        

                    </div>
                </SwiperSlide>


            </Swiper>







        </div>
    );
};

export default Slider;