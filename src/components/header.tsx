"use client";

import React, { useEffect } from 'react';
import { useState } from 'react'
import Image from 'next/image';
import Login from './login';
import Link from 'next/link';

const Header = () => {
    const [showLogin, setShowLogin] = useState(false);

    const handleDocumentClick = (event: any) => {
        const component = document.getElementById('login');
        if (component && !component.contains(event.target)) {
            setShowLogin(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick);
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);
    
    return (
        <div>
            <div className="c-container">
                <header className="header px-[1.5rem] w-full mt-[2rem] h-[100px] bg-base-color-two rounded-[100px] flex items-center justify-between">
                    <div className="flex items-center start justify-start w-[70%]">
                        <a href="" className="logo w-[18%]">
                            <Image src="/img/logo.png" alt="Logo" width={100} height={100} />
                        </a>
                        <div className="links flex w-[70%] items-center gap-[2rem] justify-start">
                            <div className="head-custom">
                                <p><Link className="link text-[15px] text-white hover:text-[#ffffffb3]" href="/">صفحه اصلی</Link></p>
                            </div>
                            <div className="head-custom">
                                <p><Link className="link text-[15px] text-white hover:text-[#ffffffb3]" href="/product">محصولات</Link></p>
                            </div>
                            <div className="head-custom">
                                <a href="" className="link text-[15px] text-white hover:text-[#ffffffb3]">بلاگ ها</a>
                            </div>
                            <div className="head-custom">
                                <a href="" className="link text-[15px] text-white hover:text-[#ffffffb3]">تماس با ما</a>
                            </div>
                            <div className="head-custom">
                                <a href="" className="link text-[15px] text-white hover:text-[#ffffffb3]">درباره ما</a>
                            </div>
                        </div>
                    </div>
                    <div className="end w-[28%] flex items-center justify-end gap-[1rem]">
                        <button title='جستجو' className="btn-search">
                            <Image src="/img/search.svg" alt="Logo" width={25} height={25} />
                        </button>
                        <div title='سبد خرید' className="btn-cart relative w-[44px] h-[44px] rounded-[50%] bg-base-color flex items-center justify-center ">
                            <span className="absolute  w-[16px] h-[16px] top-[-3px] text-[12px] left-[-3px] bg-white flex items-center justify-center rounded-[50%] text-base-color">0</span>
                            <Image src="./img/cart.svg" alt="Logo" width={22} height={22} />
                        </div>
                        <div id="login" style={{ position: 'relative' }}
                            onMouseEnter={() => setShowLogin(true)}
                        >
                            <a
                                href=""
                                title='حساب کاربری من'
                                className="btn-auth text-[15px] rounded-[100px] gap-[10px] bg-base-color text-white flex items-center px-[12px] h-[44px]">
                                <Image src="/img/userr.svg" alt="Logo" width={25} height={25} />
                                ورود / ثبت نام
                            </a>
                            {showLogin && (
                                <div style={{
                                    position: 'absolute',
                                    left: '5px',
                                }}>
                                    <Login />
                                </div>
                            )}
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
};

export default Header;