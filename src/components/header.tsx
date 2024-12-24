import React from 'react';
import Image from 'next/image';

const Header = () => {
    return (
        <div>
            <div className="c-container">
                <header className="header px-[1.5rem] w-full mt-[2rem] h-[100px] bg-base-color-two rounded-[100px] flex items-center justify-between">
                    <div className="flex items-center start justify-start w-[70%]">
                        <a href="" className="logo w-[18%]">
                            <Image src="/img/logo.png" alt="Logo" width={100} height={100} />
                        </a>
                        <div className="links flex w-[70%] items-center gap-[2rem] justify-start">
                            <a href="" className="link text-[15px] text-white">صفحه اصلی</a>
                            <a href="" className="link text-[15px] text-white">محصولات</a>
                            <a href="" className="link text-[15px] text-white">بلاگ ها</a>
                            <a href="" className="link text-[15px] text-white">تماس با ما</a>
                            <a href="" className="link text-[15px] text-white">درباره ما</a>
                        </div>
                    </div>
                    <div className="end w-[28%] flex items-center justify-end gap-[1rem]">
                        <button className="btn-search">
                            <Image src="/img/search.svg" alt="Logo" width={25} height={25} />

                        </button>
                        <div className="btn-cart relative w-[44px] h-[44px] rounded-[50%] bg-base-color flex items-center justify-center">
                            <span className="absolute  w-[16px] h-[16px] top-[-3px] text-[12px] left-[-3px] bg-white flex items-center justify-center rounded-[50%] text-base-color">0</span>
                            <Image src="./img/cart.svg" alt="Logo" width={22} height={22}  />

                        </div>
                        <a href="" className="btn-auth text-[15px] rounded-[100px] gap-[10px] bg-base-color text-white flex items-center px-[12px] h-[44px]">
                            <Image src="/img/userr.svg" alt="Logo" width={25} height={25} />

                            ورود / ثبت نام
                        </a>
                    </div>
                </header>
            </div>
        </div>
    );
};

export default Header;