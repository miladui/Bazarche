import React from 'react';
import Image from 'next/image';


const Footer = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
                {}
            </div>
            <footer className="bg-base-color-two text-white py-4">
                <div className="container mx-auto flex justify-around mt-20 mb-20">
                    <div className="div1 w-1/4 flex flex-col">
                        <div className="head">درباره لایتو</div>
                        <div className="bottom pt-3 text-[14px]">برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</div>
                    </div>
                    <div className="div2 w-2/4 flex flex-col items-center text-center"> {}
                        <div className="head">
                            <a href="" className="logo w-[18%]">
                                <Image src="/img/logo.png" alt="Logo" width={100} height={100} />
                            </a>
                        </div>
                        <div className="head flex flex-row pt-3 text-[14px] items-center justify-center gap-2 text-center">

                            <a href="" className="logo w-[18%]">
                                <Image src="/img/instagram-svgrepo-com.svg" className='change-my-color' alt="Logo" width={40} height={40} />
                            </a>
                            <a href="" className="logo w-[18%]">
                                <Image src="/img/youtube-svgrepo-com.svg" alt="Logo" width={40} height={40} />
                            </a>
                            <a href="" className="logo w-[18%]">
                                <Image src="/img/linkedin-svgrepo-com.svg" alt="Logo" width={40} height={40} />
                            </a>
                            <a href="" className="logo w-[18%]">
                                <Image src="/img/facebook-svgrepo-com.svg" alt="Logo" width={40} height={40} />
                            </a>

                        </div>
                        <div className="bottom pt-2 text-[14px]">در شبکه های اجتماعی با لایتو همراه باشید!</div>
                    </div>
                    <div className="div3 w-1/4 flex flex-col">
                        <div className="head">دسترسی سریع</div>
                        <a href="" className="pt-2 link text-gray-c text-[13px] hover:text-white">درباره ما</a>
                        <a href="" className="pt-1 link text-gray-c text-[13px] hover:text-white">تماس با ما</a>
                        <a href="" className="pt-1 link text-gray-c text-[13px] hover:text-white">قوانین و مقررات</a>
                        <a href="" className="pt-1 link text-gray-c text-[13px] hover:text-white">پروژه های ما</a>
                        <a href="" className="pt-1 link text-gray-c text-[13px] hover:text-white">محصولات لایتو</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;