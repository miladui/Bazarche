import DemoSlider from "@/components/swiper";
import Image from "next/image";
import dataSlider from "./slider-data.json"
import Swiper from "@/components/swiper";
import Link from "next/link";
// import MySwiper from "@/components/MySwiper";

export default function Home() {
  const productCount = 200;
  const customerCount = 999;
  const projectCount = 450;
  return (
    <main className="flex flex-col" style={{ justifyContent: 'center' }}>
      <div style={{ borderBottom: '2px solid white' }} className="box1 flex justify-between w-full">
        <div className="div1 w-1/4 mr-8 mt-8">
          <div className="flex flex-row gap-5 items-center mt-10">
            <div className="col1 mr-4">
              <span className="text-white text-7xl">لایتو</span>
            </div>
            <div className="col2">
              <img src="https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/logo-1.svg" alt="" width={200} height={150} />
            </div>
          </div>
          <div className="items-center mt-7">
            <div className="col1 mr-8">
              <span className="text-white text-4xl">سبک مدرن نورپردازی</span>
            </div>
          </div>
          <div className="items-center mt-3">
            <div className="col1 mr-8">
              <span className="text-white text-1xl">برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</span>
            </div>
          </div>
          <div className="items-center mt-10">
            <div className="col1 mr-8">
              <span className="text-white text-1xl">
                <a href="/product" >
                  <button type="button" className="bg-[#e85f33] p-5 rounded-[30px] transition-colors duration-1000 hover:bg-[#c03104]">

                    {`مشاهده محصولات >`}
                  </button>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="div2 w-2/4 flex justify-center">
          <img
            fetchPriority="high"
            decoding="async"
            width="620"
            height="820"
            src="https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/lamp.png"
            alt="Lamp"
            srcSet="  
            https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/lamp.png 814w,  
            https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/lamp-245x300.png 245w,  
            https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/lamp-768x942.png 768w,  
            https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/lamp-600x736.png 600w,  
            https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/lamp-150x184.png 150w"
            sizes="(max-width: 814px) 100vw, 814px"
          />
        </div>
        <div className="div3 w-1/4 mt-10">
          <div className="row1 flex pt-10 gap-9 text-2xl">
            <div className="col1 text-[#e85f33] text-5xl">
              {productCount}+
            </div>
            <div className="col2 text-[#c8c8c9]">
              محصول با کیفیت
            </div>
          </div>
          <div className="row2  flex pt-10 gap-9 text-2xl">
            <div className="col1 text-[#e85f33] text-5xl">
              {customerCount}+
            </div>
            <div className="col2 text-[#c8c8c9]">
              مشتری وفادار
            </div>
          </div>
          <div className="row3 flex pt-10 gap-9 text-2xl">
            <div className="col1 text-[#e85f33] text-5xl">
              {projectCount}+
            </div>
            <div className="col2 text-[#c8c8c9]">
              پروژه موفق
            </div>
          </div>
          <div className="row4 flex flex-row mt-9 gap-[30px]">
            <div className="col1 w-[50px] h-[50px] bg-[#312e35] rounded-full flex justify-center items-center">
              <a href="">
                <img alt="Logo" loading="lazy" width="30" height="30" decoding="async" data-nimg="1" className="change-my-color" style={{ color: "transparent" }} src="/img/instagram-svgrepo-com.svg" />
              </a>
            </div>
            <div className="col1 w-[50px] h-[50px] bg-[#312e35] rounded-full flex justify-center items-center">
              <a href="">
                <img alt="Logo" loading="lazy" width="30" height="30" decoding="async" data-nimg="1" className="change-my-color" style={{ color: "transparent" }} src="/img/youtube-svgrepo-com.svg" />
              </a>
            </div>
            <div className="col1 w-[50px] h-[50px] bg-[#312e35] rounded-full flex justify-center items-center">
              <a href="">
                <img alt="Logo" loading="lazy" width="30" height="30" decoding="async" data-nimg="1" className="change-my-color" style={{ color: "transparent" }} src="/img/linkedin-svgrepo-com.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="box2 flex flex-col justify-between w-full">
        <div className="row1 flex flex-row mr-8 mt-9">
          <div className="col1">
            <img decoding="async" width="35" height="35" src="https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/star-35x35.png" className="attachment-35x35 size-35x35" alt="" srcSet="https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/star-35x35.png 35w, https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/star-150x150.png 150w, https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/star-50x50.png 50w, https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/star-45x45.png 45w, https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/star.png 181w" sizes="(max-width: 35px) 100vw, 35px"></img>
          </div>
          <div className="col2 mr-4">
            <span className="text-white text-3xl">
              دسته بندی محصولات
            </span>
          </div>
        </div>
        <div className="row2 flex flex-row justify-center mt-9 mb-8">
          <div className="col1 m-5">
            <img decoding="async" width="550" height="875" src="https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/banner1-1.jpg" className="attachment-large size-large wp-image-503 rounded-tr-[50px] rounded-tl-lg rounded-br-lg rounded-bl-lg" alt="" srcSet="https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/banner1-1.jpg 700w, https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/banner1-1-240x300.jpg 240w, https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/banner1-1-600x750.jpg 600w, https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/banner1-1-150x188.jpg 150w" sizes="(max-width: 700px) 100vw, 700px" />
          </div>
          <div className="col2 flex flex-col m-5">
            <div className="row1">
              <img loading="lazy" decoding="async" width="750" height="270" src="https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/banner-3-1024x437.jpg" className="attachment-large size-large wp-image-512 rounded-lg" alt="" srcSet="https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/banner-3-1024x437.jpg 1024w, https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/banner-3-300x128.jpg 300w, https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/banner-3-768x328.jpg 768w, https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/banner-3-600x256.jpg 600w, https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/banner-3-150x64.jpg 150w, https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/banner-3.jpg 1506w" sizes="(max-width: 1024px) 100vw, 1024px" />
            </div>
            <div className="row2 flex flex-row justify-between mt-8">
              <div className="col1">
                <img loading="lazy" decoding="async" width="335" height="335" src="https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/banner-2.jpg" className="attachment-large size-large wp-image-508 rounded-lg" alt="" srcSet="https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/banner-2.jpg 500w, https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/banner-2-300x300.jpg 300w, https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/banner-2-150x150.jpg 150w" sizes="(max-width: 500px) 100vw, 500px" />
              </div>
              <div className="col2">
                <img loading="lazy" decoding="async" width="335" height="335" src="https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/banner5.jpg" className="attachment-large size-large wp-image-514 rounded-tr-lg rounded-tl-lg rounded-br-lg rounded-bl-[50px]" alt="" srcSet="https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/banner5.jpg 396w, https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/banner5-300x300.jpg 300w, https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/banner5-150x150.jpg 150w" sizes="(max-width: 396px) 100vw, 396px" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row2 flex flex-row justify-center mt-9 mb-8 bg-[#232027]">
        <div className="col1 m-5 mt-[100px] mb-[110px]">
          <img loading="lazy" decoding="async" width="505" height="578" src="https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/7678678-1.png" className="attachment-large size-large wp-image-426" alt="" srcSet="https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/7678678-1.png 669w, https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/7678678-1-283x300.png 283w, https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/7678678-1-600x635.png 600w, https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/7678678-1-150x159.png 150w" sizes="(max-width: 669px) 100vw, 669px" />
        </div>
        <div className="col2 flex flex-col m-5 mt-[100px] mb-[110px]">
          <div className="row1 flex flex-row mt-2">
            <div className="col1">
              <img decoding="async" width="35" height="35" src="https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/star-35x35.png" className="attachment-35x35 size-35x35" alt="" srcSet="https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/star-35x35.png 35w, https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/star-150x150.png 150w, https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/star-50x50.png 50w, https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/star-45x45.png 45w, https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/star.png 181w" sizes="(max-width: 35px) 100vw, 35px"></img>
            </div>
            <div className="col2 mr-4">
              <span className="text-white text-2xl">
                چرا باید لایتو را انتخاب کنیم ؟!
              </span>
            </div>
          </div>
          <div className="row1 flex flex-row justify-between mt-[60px]">
            <div style={{ border: '3px solid #302d38' }} className="col1 w-[390px] h-[200px] text-white rounded-lg flex flex-col justify-center items-center">
              <h3 className="text-2xl mt-5">محصولات باکیفیت</h3>
              <p className="m-5 text-[#bebdbf]" style={{ textAlign: 'center' }}>
                دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم با استفاده از طراحان گرافیک است.
              </p>
            </div>
            <div style={{ border: '3px solid #302d38' }} className="col1 w-[390px] h-[200px] text-white rounded-lg flex flex-col justify-center items-center">
              <h3 className="text-2xl mt-5">تنوع بالای محصولات</h3>
              <p className="m-5 text-[#bebdbf]" style={{ textAlign: 'center' }}>
                دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم با استفاده از طراحان گرافیک است.
              </p>
            </div>
          </div>
          <div className="svg absolute mt-[280px] mr-[367px] w-[70px] h-[70px] rounded-[50%] bg-[#2d2933] flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="m13.73 3.51 1.76 3.52c.24.49.88.96 1.42 1.05l3.19.53c2.04.34 2.52 1.82 1.05 3.28l-2.48 2.48c-.42.42-.65 1.23-.52 1.81l.71 3.07c.56 2.43-.73 3.37-2.88 2.1l-2.99-1.77c-.54-.32-1.43-.32-1.98 0l-2.99 1.77c-2.14 1.27-3.44.32-2.88-2.1l.71-3.07c.13-.58-.1-1.39-.52-1.81l-2.48-2.48c-1.46-1.46-.99-2.94 1.05-3.28l3.19-.53c.53-.09 1.17-.56 1.41-1.05l1.76-3.52c.96-1.91 2.52-1.91 3.47 0Z" stroke="#FF8A65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </div>
          <div className="svg absolute mt-[70px] mr-[155px] w-[70px] h-[70px] rounded-[50%] bg-[#2d2933] flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M4.26 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73c-.71-.41-1.87-.41-2.58 0L5.98 8.04C4.26 9.2 4.26 9.2 4.26 11.02Z" stroke="#FF8A65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.5 7.63V5c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56M12.63 10.99l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0Z" stroke="#FF8A65" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </div>
          <div className="svg absolute mt-[70px] mr-[560px] w-[70px] h-[70px] rounded-[50%] bg-[#2d2933] flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M20.78 13.65v4.94H3.22v-4.94c0-4.82 3.9-8.72 8.72-8.72h.12c4.82 0 8.72 3.9 8.72 8.72ZM12 2v2.93M15.65 18.59A3.661 3.661 0 0 1 12 22c-1.93 0-3.52-1.5-3.65-3.41h7.3Z" stroke="#FF8A65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </div>
          <div style={{ border: '3px solid #302d38' }} className="col1 mt-5 w-[800px] h-[200px] text-white rounded-lg flex flex-col justify-center items-center">
            <h3 className="text-2xl">سبک نور پردازی مدرن</h3>
            <p className="m-5 text-[#bebdbf]" style={{ textAlign: 'center' }}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
            </p>
          </div>
        </div>
      </div>
      <div className="contain1 flex flex-row w-full h-[700px]">
        <div className="row w-[80%] h-[380px] rounded-3xl absolute border border-[6px] border-[#232027] mr-[140px] mt-[150px]" style={{ transform: 'rotate(-8deg)', transformOrigin: 'center' }}></div>
        <div className="col2 flex z-[100] absolute mr-[850px] mt-[70px]">
          <img loading="lazy" decoding="async" width="500" height="500" src="https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/76876785.png" className="attachment-large size-large wp-image-224" alt="" srcSet="https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/76876785.png 509w, https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/76876785-300x276.png 300w, https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/76876785-150x138.png 150w" sizes="(max-width: 509px) 100vw, 509px" />
        </div>
        <div className="container w-full flex justify-center mt-[150px] z-[50]">
          <div className="row w-[90%] h-[380px] bg-[#232027] rounded-3xl flex flex-row">
            <div className="col1 flex flex-col w-1/2 mr-5 mt-5">
              <p className="text-white text-[50px]">با مشاورین لایتو</p>
              <p className="text-white text-[50px]">در ارتباط باشید</p>
              <p className="text-white">برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
              </p>
              <div className="items-center mt-10">
                <div className="col1 mr-8">
                  <span className="text-white text-1xl">
                    <button type="button" className="bg-[#e85f33] p-4 pr-9 pl-9 rounded-[30px] transition-colors duration-1000 hover:bg-[#c03104]">
                      {`ارتباط با مشاورین >`}
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row2 flex flex-col justify-center mt-9 mb-8 bg-[#232027]">
        <div className="text-white text-[50px] flex justify-center mt-9">
          <img src="https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/logo-1.svg" alt="" width={70} height={50} />
        </div>
        <div className="text-white text-[30px] flex justify-center mt-8">پروژه های انجام شده</div>
        <div className="flex justify-center mt-8">
          <Swiper Data={dataSlider} />
        </div>
        {/* <div className="container w-full flex justify-center mt-[150px] z-[50] w-full">
          <div className="row flex flex-row justify-center w-full">
            <div className="col1 flex flex-col w-1/2 justify-center">
              <div className="text-white text-[50px] flex justify-center">
              <img src="https://demo.i-wp.ir/woodland/lighto/wp-content/uploads/2024/05/logo-1.svg" alt="" width={70} height={50} />
              </div>
              <div className="text-white text-[30px] flex justify-center mt-8">پروژه های انجام شده</div>
              <div className="text-white flex justify-center mt-8">
              <Swiper />
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/* <MySwiper /> */}
    </main>
  );
}