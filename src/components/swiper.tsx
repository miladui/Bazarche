"use client";

import React, { useState } from "react";
import ThumbnailProduct from "./thumbnailProduct";

export default function Swiper({ Data }: { Data: any[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;

    const next = () => {
        if (currentIndex + itemsPerPage < Data.length) {
            setCurrentIndex(currentIndex + itemsPerPage);
        }
    };
    const prev = () => {
        if (currentIndex - itemsPerPage >= 0) {
            setCurrentIndex(currentIndex - itemsPerPage);
        }
    };

    return (
        <div className="main w-[90%] overflow-hidden">
            <div className="container w-full h-[560px]">
                <div className="w-full flex flex-row  gap-[1rem]">
                                {
                                    Data.map((item: any) => <ThumbnailProduct key={item.id} dataItem={item}/>
                                )}
                            </div>
                <div className="flex absolute">
                    <button onClick={prev} disabled={currentIndex === 0} className="px-4 py-2 bg-[#d03306] text-white rounded-full hover:bg-[#d03306] disabled:bg-[#e85e32]">
                        {`<`}
                    </button>
                </div>
                <div className="flex absolute mr-[1315px]">
                    <button onClick={next} disabled={currentIndex + itemsPerPage >= Data.length} className="px-4 py-2 bg-[#d03306] text-white rounded-full hover:bg-[#d03306] disabled:bg-[#e85e32]">
                        {`>`}
                    </button>
                </div>
            </div>
        </div>
    );
}