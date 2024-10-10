import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; 
import 'swiper/css'; 
import 'swiper/css/pagination'; 
import axios from 'axios';

const Feature = () => {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('https://dummyjson.com/products');
            setFeatures(res.data.products);
        };
        fetchData();
    }, []);

    return (
        <section className="mx-auto md:w-[90%] w-full my-10">
            <h2 className="text-2xl font-bold mb-6">Featured Products</h2>

            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                loop={true}  
                autoplay={{
                    delay: 2000, 
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 1 },  
                    768: { slidesPerView: 2 }, 
                    1024: { slidesPerView: 3 }, 
                    1280: { slidesPerView: 4 },
                }}
                modules={[Autoplay]}  
            >
                {features.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="relative">
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="w-full h-40 object-cover"
                            />
                            <div className="absolute inset-0 bg-[#f58515] bg-opacity-20 flex items-center justify-center">
                                <h3 className="text-white text-xl font-semibold">
                                    {product.title}
                                </h3>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Feature;
