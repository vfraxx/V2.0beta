import React from 'react';
import { Link } from 'react-router-dom';
import './Dev.css';
import noskhe from '../../assets/noskhe.jpg';
import noskhe2 from '../../assets/noskhe2.jpg';
import dash from '../../assets/dashboard.png';
import portv1 from '../../assets/portv1.png';
import cart from '../../assets/cart.mp4';
import rim from '../../assets/rimakki.png';
import mob1 from '../../assets/mob1.png';
import mob2 from '../../assets/mob2.png';



const Dev = ()=> {
  return (
    <div className='d-bg'>
        <div className='devbg'><h1 className='dev-h1'>Web Develope</h1></div>
        <spna className='d-span'>- 01</spna>
        <div className='noskhe'>
            <div className='noskhe-co'>
                <h1 className='d-h1'>ری دیزاین پیش فروش البوم نسخه</h1>
                <p className='d-p'>یه پرانتز کوچیک باز کنم من مخاطب موزیک هیپ هاپ و رپ هستم و
                   زمانی سروش پیشفروش اولین البومشو اعلام کرد من سایت پیش فروش باز کردم و اولین چیزی گغتم قطعا پتانسیل
                   این وبسایت خیلی بیشتره پس دست به کار شدم و طرح خودمو از وبسایت زدم خروجی رو میتونید مشاهده کنید
                </p>
                <Link to='#'><button className='d-bt pey d-mt'>مشاهده</button></Link>
            </div>
            <img src={noskhe2} alt='noskheimg-2' className='noskheimg2' />
            <img src={noskhe} alt='noskheimage' className='noskheimg' />
        </div>
        <spna className='d-span'>- 02</spna>
        <div className='noskhe rev'>
            <div className='noskhe-co'>
                <h1 className='d-h1 eng'>React Dashboard</h1>
                <p className='d-p expad'>یکی دیگه از پروژه هایی که انجام دادم ساختن یک
                داشبورد ادمین بود این اپ هم از تم لایت و دارک استفاده میکنید و میتونید 
                رنگ های جانبی رو به انتخاب خودتون تغییر بدین بهتون پیشنهاد میکنم یه سر
                بهش بزنید
                </p>
                <a href='https://afra-dashboard.netlify.app/'><button className='d-bt pey d-mt'>مشاهده</button></a>
            </div>
            <img src={dash} alt='reactdash' className='noskheimg nobr' />


        </div>
        <spna className='d-span span-top'>- 03</spna>
        <div className='noskhe co-rev'>
            <div className='noskhe-co d-mt'>
                <h1 className='d-h1 eng'>Portofolio Ver 1.0</h1>
                <p className='d-p expad d-pp'>این وبسایت ورژن اول پورتوفولیو من هست که یو ای ساده و جذابی داره از لینک پایین میتونید وبسایت کامل رو مشاهده کنید</p>
                <a href='https://afra0.netlify.app'><button className='d-bt pey d-mt'>مشاهده</button></a>
            </div>
            <img src={portv1} alt='portv1' className='noskheimg d-m' />


        </div>
        <spna className='d-span'>- 04</spna>
        <div className='noskhe'>
            <div className='noskhe-co'>
                <h1 className='d-h1 eng'> React Cart</h1>
                <p className='d-p expad'>یه پروژه کوچیک که یک شبیه وب سایت فروشگاهی ساده ست 
                   که داخل صفحه اصلی تعدادی محصول هست که میتونید به سبد خرید
                   اضافه شون کنید و داخل صفحه سبد خرید هم میتونید تعداد بیشتری
                   از اون محصول سفارش بدید یا از سبد خرید حذفش کنید و در نهایت 
                   تسویه حساب کنید</p>
                   <a href='https://afra-cart.netlify.app'><button className='d-bt pey d-mt'>مشاهده</button></a>

            </div>
            <video src={cart} alt='cart' className='noskheimg' loop autoPlay />

        </div>
        <spna className='d-span'>- 05</spna>
        <div className='noskhe'>
            <div className='noskhe-co'>
                <h1 className='d-h1 eng'>Ecommerce Ui</h1>
                <p className='d-p expad'>این قسمت طرح های من برای برند های مختلف میتونید مشاهده کنید
                دیزاین کامل با فیگما انجام شده و درحال توسعه با ری اکت هستند</p>
            </div>
            <img src={rim} alt='noskheimage' className='noskheimg' />

        </div>
        <spna className='d-span'>- 06</spna>
        <div className='noskhe'>
            <div className='noskhe-co mob-con'>
                <h1 className='d-h1 eng'>Mobile UI</h1>
                <p className='d-p expad'>اینجا هم میتونید طرح های من برای یک وبسایت فروشگاهی دیگه مشاهده کنید
                  دیزاین رسپانسیو و یو ای جذاب موبایل</p>
            </div>
            <img src={mob1} alt='noskheimage' className='mobimg2' />
            <img src={mob2} alt='noskheimage' className='mobimg' />
        </div>
        <spna className=''>::</spna>
        <div className='d-end'>
            <Link to='/'><button className='d-bt'>Home</button></Link>
            <Link to='/contact'><button className='d-bt'>Contact</button></Link>
        </div>







    </div>
  )
}

export default Dev;