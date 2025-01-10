"use client";
import React, {useEffect, useState} from 'react';
import ThumbnailProduct from "@/components/thumbnailProduct";
import {Slider} from "@mui/material";
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {useData} from "@/services/dataProvider";

function valuetext(value: number) {
    return `${value}°C`;
}

const Page = () => {
    const {dataState, fetchData, setDataState} = useData();
    const [searchTerm, setSearchTerm] = useState("");


    useEffect(() => {
        fetchData();

    }, []);


    if (dataState.error) {
        return <p>Error: {dataState.error}</p>;
    }

    if (dataState.loading) {
        return <p>Loading...</p>;
    }



    function priceS() {
        const sortedProducts = [...dataState.data].sort((a, b) => a.price - b.price);
        setDataState({...dataState, data: sortedProducts});
    }

    function priceB() {
        const sortedProducts = [...dataState.data].sort((a, b) => b.price - a.price);
        setDataState({...dataState, data: sortedProducts});
    }
    const filteredProducts = searchTerm
        ? dataState.data.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase())) // {{ edit_2 }}
        : dataState.data;
    return (
        <div>
            <section className="s-products">
                <div className="c-container">
                    <div className="w-full row-title-page">
                        <h2 className="text-white pb-[12px] mt-[2rem] border-b-[1px] border-white text-[22px]">
                            لیست محصولات
                        </h2>
                    </div>
                    <div className="w-full flex justify-center my-[2rem]">
                        <input   value={searchTerm}
                                 onChange={(e) => setSearchTerm(e.target.value)} // {{ edit_4 }}
                            className="bg-slate-100 text-[14px] px-[1rem] rounded-[8px] w-[70%] h-[40px]" type="text"
                               placeholder="جستجو کنید..."/>
                    </div>
                    <div className="p-products mt-[4rem] flex items-start justify-between gap-[1rem]">
                        <div className="filtering  flex flex-col w-[25%] gap-[2rem]">
                            <div
                                className="filter-range w-full bg-base-color-two flex flex-col items-start rounded-[10px] p-[1.2rem]">
                                <span className="text-white text-[16px]">فیلتر براساس قیمت:</span>
                                <div className="range w-full my-[1.5rem]">
                                    <Box>
                                        <Slider valueLabelDisplay="auto"/>
                                    </Box>
                                </div>
                                <div className="flex w-full items-start">
                                    <span className="text-gray-c text-[13px]">قیمت : </span>
                                </div>
                                <button
                                    className="btn-filter-price bg-base-color text-base-color-two h-[38px] px-[12px] text-[13px] mt-2 rounded-[6px]">
                                    فیلتر
                                </button>
                            </div>
                            <div
                                className="filter-inventory w-full bg-base-color-two flex flex-col items-start rounded-[10px] p-[1.2rem]">
                                <span className="text-white text-[16px]">وضعیت موجودی </span>
                                <div className="inventory w-full my-[1.5rem]">
                                    <FormGroup>
                                        <FormControlLabel className="text-gray-c hover:text-white mr-0 text-[13px]"
                                                          control={<Checkbox
                                                              style={{
                                                                  color: "#646464",
                                                              }} defaultChecked/>} label="فروش ویژه"/>
                                        <FormControlLabel className="text-gray-c mr-0 hover:text-white text-[13px]"
                                                          required control={<Checkbox style={{
                                            color: "#646464",
                                        }}/>} label="موجود در انبار"/>
                                    </FormGroup>
                                </div>
                            </div>
                            <div
                                className="filter-category w-full bg-base-color-two flex flex-col items-start rounded-[10px] p-[1.2rem]">
                                <span className="text-white text-[16px]">دسته‌های محصولات </span>
                                <div className="flex mt-[1rem] w-full flex-col items-start gap-[12px]">
                                    <a className="text-gray-c text-[14px]" href="">چراغ سقفی</a>
                                    <a className="text-gray-c text-[14px]" href="">چراغ سقفی</a>
                                    <a className="text-gray-c text-[14px]" href="">چراغ سقفی</a>
                                </div>
                            </div>

                        </div>
                        <div className="list-product w-[73%] flex flex-col">
                            <div className="top-row w-full flex justify-between items-center">
                                <div className="addressBar gap-[12px] flex items-center">
                                    <a className="text-gray-c text-[13px]" href="">خانه</a>
                                    <span className="text-gray-c text-[13px]">/</span>
                                    <span className="text-white text-[14px]">لیست محصولات</span>

                                </div>
                                <div className="sort">
                                    {/*<select className="bg-dark text-white text-[13px] pb-2 border-b-gray-500 border-b-2"*/}
                                    {/*        name="" id="">*/}
                                    {/*    <option selected value="">مرتب سازی پیش فرض</option>*/}
                                    {/*    <option value="">مرتب‌سازی بر اساس محبوبیت</option>*/}
                                    {/*    <option value="">مرتب‌سازی بر اساس امتیاز</option>*/}
                                    {/*    <option value="">مرتب‌سازی بر اساس جدیدترین</option>*/}
                                    {/*    <option value="">مرتب‌سازی بر اساس ارزانترین</option>*/}
                                    {/*    <option value="">مرتب‌سازی بر اساس گرانترین</option>*/}
                                    {/*</select>*/}
                                    <button onClick={() => priceS()} className="text-white text-[16px]">ارزانترین
                                    </button>
                                    <button onClick={() => priceB()} className="text-white text-[16px]">گرانترین
                                    </button>

                                </div>

                            </div>
                            <div className="bottom-row mt-[1.5rem] w-full grid grid-cols-3 gap-[1rem]">
                                {filteredProducts && filteredProducts.length > 0 ? ( // {{ edit_3 }}
                                    filteredProducts.map(item => <ThumbnailProduct key={item.id} dataItem={item}/>)
                                ) : (
                                    <h1 className="text-white text-[40px]">محصولی یافت نشد</h1> // {{ edit_4 }}
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page;