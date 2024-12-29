import React, {useState} from 'react';

const Login = () => {
    return (
        <div className="bg-black w-[300px] h-[300px] mt-2 rounded-lg">{ }
            <div className="container flex flex-col justify-center items-center">
                <div className="row1 w-[90%] h-[55px] text-white flex justify-center  border-b border-[#3f3f3f] pb-1">
                    <div className="col1 ml-auto pt-[20px]">ورود</div>
                    <a href='#' title='ایجاد حساب کاربری' >
                        <div style={{transition: 'color 0.4s ease'}} className="col2 pt-[26px] text-base-color text-[12px] hover:text-[#e99445]">ایجاد حساب کاربری</div>
                    </a>
                </div>
                <div className="row2 w-[90%] h-[55px] text-white flex flex-col justify-center mt-[15px]">
                    <div className="col"><label className='label text-[12px] w-full'>نام کاربری یا آدرس ایمیل<span className='text-[#E01020]'>*</span></label></div>
                    <input
                        style={{ borderRadius: 5, height: 32 }}
                        className='bg-transparent border border-[#3f3f3f] w-full mt-[5px] py-2 px-3 placeholder:text-white p-2'
                        type='text'
                    />
                </div>
                <div className="row3  w-[90%] h-[55px] text-white flex flex-col justify-center mt-[15px]">
                    <div className="col">
                        <label className='label text-[12px] w-full' >رمز عبور
                            <span className='text-[#E01020]'>*
                        </span>
                        </label>
                        </div>
                    <input
                        style={{ borderRadius: 5, height: 32 }}
                        className='bg-transparent border border-[#3f3f3f] w-full mt-[5px] py-2 px-3 placeholder:text-white p-2'
                        type='password'
                    />
                </div>
                <div className="row4 w-[90%] h-[55px] text-white flex justify-center items-center mt-[6px]">
                    <button style={{ borderRadius: 5, height: 32, transition: 'background-color 0.4s ease-in-out' }} className='w-full bg-base-color text-[13px] hover:bg-[#cf3104]'>
                        ورود
                    </button>
                </div>
                <div className="row5 w-[90%] h-[20px] text-white flex justify-center items-center">
                    <div className="col1 ml-auto pt-[20px] text-[12px]">
                    <input type="checkbox"/>
                    <span className='mr-[5px]'>مرا به خاطر بسپار</span>
                    </div>
                    <a href='#' >
                        <div style={{transition: 'color 0.4s ease'}} className="col2 pt-[23px] text-base-color text-[12px] hover:text-[#e99445] hover:underline"> رمز عبور را فراموش کرده اید؟ </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;