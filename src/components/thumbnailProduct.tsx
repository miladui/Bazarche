import React from 'react';
import Image from 'next/image';

const ThumbnailProduct = () => {
    return (
        <div>
            <div
                className="thumbnail-product cursor-pointer mt-[8px] flex flex-col bg-base-color-two p-[1.2rem] h-[440px] rounded-b-[10px] rounded-t-[200px]">
                <div className="img relative flex justify-center">
                    <Image src="/img/product-01.jpg" className="w-full rounded-t-[200px] rounded-b-[10px]" alt="Logo"
                           width={100} height={300} layout="responsive"/>
                    <div
                        className="discount absolute left-[10px] text-[11px] bottom-[10px] rounded-[15px] flex items-center h-[24px] px-[13px] text-white bg-base-color">
                        22%-
                    </div>
                    <div className="box-hover  z-20 bg-black absolute px-[12px] justify-center bottom-[10px] w-[40%] h-[45px] rounded-[10px] flex items-center gap-[10px]">
                        <Image src="/img/favorite.svg" alt="Logo" width={25} height={25}/>
                        <Image src="/img/search.svg" alt="Logo" width={19} height={19}/>
                        <Image src="/img/cart.svg" alt="Logo" width={23} height={23}/>
                    </div>

                </div>
                <h3 className="w-full  flex items-center mt-[9px]">
                    <a className="w-full text-[14px] text-white" href="">چراغ سقفی مینیمال برنز</a>
                </h3>
                <div className="category w-full flex justify-start mt-1">
                    <span className="text-gray-c text-[13px]">چراغ سقفی</span>
                </div>
                <div className="prices mt-[6px] w-full flex flex-col items-end">
                    <del className="before-price text-[15px] text-gray-c">1,900,000 </del>
                    <div className="after-price mt-[2px] flex items-center gap-[4px]">
                        <strong className="text-[20px] text-white">1,760,000 </strong>
                        <span className="text-[15px] text-white">تومان</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThumbnailProduct;