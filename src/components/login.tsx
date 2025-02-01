import React, { useEffect, useState } from 'react';

const Login = () => {
    const [onSms, setOnSms] = useState(false);
    const [onTimer, setOnTimer] = useState(false);
    const [seconds, setSeconds] = useState(120);

    function smsStatus(event: any) {
        setOnSms(true);
    }

    useEffect(() => {
        if (seconds > 0) {
            const interval = setInterval(() => {
                setSeconds(prev => prev - 1);
            }, 1000);

            return () => clearInterval(interval);
        } else {
            setOnTimer(true);
        }
    }, [seconds]);

    const formatTime = (secs: any) => {
        const minutes = Math.floor(secs / 60);
        const remainingSeconds = secs % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };


    return (
        <div className="bg-black w-[300px] h-[150px] mt-2 rounded-lg">{
            onSms ? <div className="container flex flex-col justify-center items-center">
                <div className="row2 w-[90%] h-[55px] text-white flex flex-col justify-center mt-[15px]">
                    <div className="col"><label className='label text-[12px] w-full'>پیامک ارسال شده را وارد نمایید<span className='text-[#E01020]'>*</span></label></div>
                    <input
                        style={{ borderRadius: 5, height: 32 }}
                        className='bg-transparent border border-[#3f3f3f] w-full mt-[5px] py-2 px-3 placeholder:text-white p-2'
                        type='text'
                    />
                </div>
                <div className="row4 w-[90%] h-[55px] text-white flex justify-center items-center mt-[6px]">
                    {onTimer ? <button style={{ borderRadius: 5, height: 32, transition: 'background-color 0.4s ease-in-out' }} className='w-full bg-base-color text-[13px] hover:bg-[#cf3104]'>
                        ارسال مجدد کد
                    </button> :
                        <button style={{ borderRadius: 5, height: 32, transition: 'background-color 0.4s ease-in-out' }} className='w-full bg-base-color text-[13px] hover:bg-[#cf3104]'>
                            {formatTime(seconds)}
                        </button>}
                </div>
            </div> :
                <div className="container flex flex-col justify-center items-center">
                    <div className="row2 w-[90%] h-[55px] text-white flex flex-col justify-center mt-[15px]">
                        <div className="col"><label className='label text-[12px] w-full'>شماره تلفن<span className='text-[#E01020]'>*</span></label></div>
                        <input
                            style={{ borderRadius: 5, height: 32 }}
                            className='bg-transparent border border-[#3f3f3f] w-full mt-[5px] py-2 px-3 placeholder:text-white p-2'
                            type='text'
                        />
                    </div>
                    <div className="row4 w-[90%] h-[55px] text-white flex justify-center items-center mt-[6px]">
                        <button style={{ borderRadius: 5, height: 32, transition: 'background-color 0.4s ease-in-out' }} onClick={smsStatus} className='w-full bg-base-color text-[13px] hover:bg-[#cf3104]'>
                            ارسال پیامک
                        </button>
                    </div>
                </div>}
        </div>
    );
};

export default Login;