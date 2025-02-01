'use client'
import React, {useContext, useState} from 'react';
import Image from "next/image";
import {CounterContext} from "@/services/dataCart";
import {removeCart} from "@/helpers/helper";


const Page = () => {
    const {state, dispatch} = useContext(CounterContext) || {
        state: {}, dispatch: () => {
        }
    };
    return (
        <div>
            <section className="s-cart">
                <div className="c-container">
                    <div className="w-full flex flex-col">
                        <div className="active-page flex items-center justify-start mt-5 w-full">
                            <a className="text-white text-[22px]" href="">سبد خرید</a>
                            <Image className="mx-3" src="../img/arrow-left.svg" alt="Logo" width={25} height={25}/>
                            <a className="text-[#cccc] text-[22px]" href="">تسویه حساب</a>
                            <Image className="mx-3" src="../img/arrow-left.svg" alt="Logo" width={25} height={25}/>
                            <a className="text-[#cccc] text-[22px]" href="">تکمیل سفارش</a>
                        </div>
                    </div>
                    <div className="w-full mt-[5rem] flex items-start justify-between">
                        <div className="start w-[65%]  flex flex-col items-start">
                            <div className="title-product-cart w-full grid border-b-[1px] pb-3 border-[#ffffff30]">
                                <span className="w-full text-white text-center">محصول</span>
                                <span className="w-full text-white text-right">قیمت</span>
                                <span className="w-full text-white text-center">تعداد</span>
                                <span className="w-full text-white text-left">جمع جزء</span>
                            </div>
                            {state.selectedItems.map(item =>

                                <div key={item.id}
                                     className="item-cart w-full grid border-b-[1px] py-5 border-[#ffffff30]">
                                    <div className="w-full flex items-center justify-start gap-[1rem]">
                                        <Image className="mx-3" src="../img/close.svg" alt="Logo" width={17}
                                               height={17}/>
                                        <div className="img w-[80px] h-[80px] rounded-[8px]">
                                            <img className="w-full h-full rounded-[8px]" src={item.category.image}
                                                 alt=""/>
                                        </div>
                                        <h3 className="text-white w-1/2 text-[14px]">{item.title}</h3>
                                    </div>
                                    <div className="w-full">
                                        <span
                                            className="text-right text-[#ffffffb3] text-[14px]">{item.price}
                                            <span className="mr-1">تومان</span>
                                        </span>
                                    </div>
                                    <div>
                                        <div className="count flex items-center">
                                            <button onClick={() => dispatch({type: "increase", payload: item?.id})}
                                                    className="btn-increase">+
                                            </button>
                                            <input onChange={(e) => e.target.value} value={state.itemCounter}
                                                   type="text"/>
                                            {
                                                removeCart(state, item?.id) ?

                                                    <button
                                                        onClick={() => dispatch({type: "decrease", payload: item?.id})}
                                                        className="btn-decrease">-</button>
                                                    :
                                                    <button onClick={() => dispatch({
                                                        type: "remove_item",
                                                        payload: item?.id
                                                    })}
                                                            className="btn-decrease">t</button>

                                            }
                                        </div>

                                    </div>
                                    <div className="w-full flex justify-end">
                                        <span
                                            className="text-left text-base-color text-[17px]">{state.total}
                                            <span className="mr-1">تومان</span>
                                        </span>
                                    </div>
                                </div>
                            )}

                        </div>
                        <div
                            className="end sticky top-[4px] w-[33%] h-[280px] p-[1.5rem] rounded-[10px] border-[#ffffff30] border-[2px]">
                            <h3 className="text-white mb-[2rem] text-[22px]">جمع کل سبد خرید</h3>
                            <div
                                className="item w-full pb-[13px] flex items-center justify-between border-[#ffffff30] border-b-[1px]">
                                <span className="text-white text-[13px]">جمع جزء</span>
                                <span className="text-[#ffffffb3] text-[13px]">{state.total} تومان</span>
                            </div>
                            <div className="item w-full py-[13px] flex items-center justify-between">
                                <span className="text-white text-[17px]">مجموع</span>
                                <span className="text-base-color text-[20px]">{state.total} تومان</span>
                            </div>
                            <button className="btn-base  mt-6 w-full">
                                ادامه جهت تسویه حساب
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page;