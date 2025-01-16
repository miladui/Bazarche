'use client'
import React, {useEffect, useState} from 'react';
import {useData} from "@/services/dataProvider";
import {useRouter} from "next/navigation";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css/effect-creative';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import {FreeMode, Navigation, Thumbs, EffectCreative} from 'swiper/modules';
import Image from "next/image";


const ProductDetail = ({params}) => {
    const router = useRouter();
    const {id} = React.use(params);
    const {dataState, fetchData} = useData();
    const [info, setInfo] = useState<any>({})
    useEffect(() => {
        console.log(dataState)
    }, [dataState])
    useEffect(() => {
        fetchData();

    }, []);

    useEffect(() => {
        let salam = dataState?.data?.find(item => +item.id === +id)

        setInfo(salam)

    }, [dataState]);
    // if (!dataItem) return <div>Loading...</div>;
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div>
            <section className="s-product-info mt-[2rem]">
                <div className="c-container">
                    <div className="addressBar gap-[12px] flex items-center">
                        <a className="text-gray-c text-[13px]" href="">خانه</a>
                        <span className="text-gray-c text-[13px]">/</span>
                        <a className="text-gray-c text-[13px]" href="">{info?.category?.name}</a>
                        <span className="text-gray-c text-[13px]">/</span>
                        <span className="text-white text-[14px]">{info?.title}</span>

                    </div>
                    <div className="w-full flex items-start justify-between mt-[1rem]">
                        <div className="start relative top-[14px] gap-[1.5rem] flex w-[65%]">
                            <div className="swipers w-[50%]">
                                <div className=" flex items-center w-full gap-[10px]">
                                    <Swiper
                                        onSwiper={setThumbsSwiper}
                                        spaceBetween={10}
                                        direction={'vertical'}
                                        slidesPerView={3}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        className="mySwiper swiper-info-product-multi h-[300px] w-[29%]"
                                    >

                                        {info?.images?.map(img =>
                                            <SwiperSlide key={img.id}>
                                                <img className="w-full object-cover h-full rounded-[10px]" src={img}/>
                                            </SwiperSlide>
                                        )

                                        }
                                    </Swiper>
                                    <Swiper
                                        spaceBetween={10}
                                        effect={'creative'}
                                        creativeEffect={{
                                            prev: {
                                                shadow: true,
                                                translate: ['-120%', 0, -500],
                                            },
                                            next: {
                                                shadow: true,
                                                translate: ['120%', 0, -500],
                                            },
                                        }}
                                        navigation={true}
                                        thumbs={{swiper: thumbsSwiper}}
                                        modules={[FreeMode, Navigation, Thumbs, EffectCreative]}
                                        className="mySwiper2 swiper-single-img w-[70%]"
                                    >
                                        {
                                            info?.images?.map(img =>
                                                <SwiperSlide key={img.id}>
                                                    <img className="w-full h-[320px] rounded-[10px]" src={img}/>
                                                </SwiperSlide>
                                            )
                                        }


                                    </Swiper>

                                </div>
                            </div>
                            <div className="details w-1/2 flex flex-col items-start">
                                <div className="category flex items-center gap-[12px] justify-start">
                                    <span className="text-base-color text-[14px]">دسته :</span>
                                    <span className="text-[#ffffffcc] text-[14px]">{info?.category?.name}</span>
                                </div>
                                <div className="title-product mt-3 w-full">
                                    <h2 className="text-[17px] text-white">{info?.title}</h2>
                                </div>
                                <div className="options mt-7 gap-[6px] w-full flex flex-col items-start">
                                    <div className="item w-full flex items-center justify-start gap-[1px]">
                                        <span className="text-[12px] text-[#ffffffcc]"> مدل :</span>
                                        <span className="text-[12px] text-[#ffffffcc]">یقه باز</span>
                                    </div>
                                    <div className="item w-full flex items-center justify-start gap-[1px]">
                                        <span className="text-[12px] text-[#ffffffcc]">رنگ بدنه:</span>
                                        <span className="text-[12px] text-[#ffffffcc]"> سفید، مشکی (داخل طلایی)، طوسی و طلایی</span>
                                    </div>
                                    <div className="item w-full flex items-center justify-start gap-[1px]">
                                        <span className="text-[12px] text-[#ffffffcc]"> مدل :</span>
                                        <span className="text-[12px] text-[#ffffffcc]">یقه باز</span>
                                    </div>
                                    <div className="item w-full flex items-center justify-start gap-[1px]">
                                        <span className="text-[12px] text-[#ffffffcc]"> مدل :</span>
                                        <span className="text-[12px] text-[#ffffffcc]">یقه باز</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div
                            className="end p-[1.7rem] w-[30%] relative flex flex-col  h-[370px] rounded-[10px] bg-base-color-two">
                            <div className="prices w-full flex flex-col items-end">
                                <div className="before-price">
                                    <del className="text-[14px] text-[#cbcbcb]">1,900,000</del>
                                </div>
                                <div className="after-price">
                                    <strong className="text-base-color text-[20px]">{info?.price}</strong>
                                    <span className="text-base-color mr-1 text-[14px]">تومان</span>
                                </div>
                            </div>
                            <div className="row-buttons flex items-center justify-between mt-[1rem]">
                                <div className="count flex items-center">
                                    <button className="btn-increase">+</button>
                                    <input value="1" type="text"/>
                                    <button className="btn-decrease">-</button>
                                </div>
                                <button className="btn-base w-[74%]">افزودن به سبد خرید</button>
                            </div>
                            <div
                                className="row-favorite w-full h-[60px] mt-4 border-t-[1px]  border-b-[1px] flex items-center justify-start  border-[#ffffff20]">
                                <button className="text-[14px] flex items-center gap-[5px] text-white">
                                    <Image src="/img/favorite.svg" alt="Logo" width={25} height={25}/>
                                    افزودن به علاقه مندی
                                </button>
                            </div>
                            <div className="list-detail mt-4 w-full flex flex-col items-start">
                                <div className="item flex items-center justify-start gap-[5px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"
                                         fill="none">
                                        <path
                                            d="M10.49 2.23 5.5 4.11c-1.15.43-2.09 1.79-2.09 3.01v7.43c0 1.18.78 2.73 1.73 3.44l4.3 3.21c1.41 1.06 3.73 1.06 5.14 0l4.3-3.21c.95-.71 1.73-2.26 1.73-3.44V7.12c0-1.23-.94-2.59-2.09-3.02l-4.99-1.87c-.85-.31-2.21-.31-3.04 0Z"
                                            stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                        <path d="m9.05 11.87 1.61 1.61 4.3-4.3" stroke="#ffffff" stroke-width="1.5"
                                              stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                    <span className="text-white text-[13px]">گارانتی اصالت و سلامت فیزیکی کالا</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/*<h1>{info?.title}</h1>*/}
            {/*<img src={info?.category?.image} alt={info?.title}/>*/}
            {/*<p>{info?.description}</p>*/}
            {/*<strong>{info?.price} تومان</strong>*/}
        </div>
    )
        ;
};

export default ProductDetail;