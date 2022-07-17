import React from 'react';
import me from '../../assets/me.jpg'
import './Me.css';

const Me = ()=> {
  return (
    <div className='m-bg'>
        <div className='metext'>
            <h1 className='me-h1 animate__fadeInUp'>سلام</h1>
            <p className='me-p'>من محمد افراـم،
    برنامه نویس وب و گرافیک دیزاینر و گاهی موشن دیزاینر
    من وقتی 13 سالم بود فتوشاپو و ایلاستریتور رو دانلود کردم و یادگیری و کار باهاشو شروع کردم
    یه مدت بعد به افترافکت هم علاقه مند پس اونم دانلود کردم و یادگیری شو شروع کردم
    اوایل سال 1400 یا 2021 وارد دنیای وب و برنامه نویسی وب شدم
    برای قدم اول سی اس اس و اچ تی ام ال رو یادگرفتم بعدش رفتم سراغ جاوا اسکریپت و
    الان درخال مسلط شدن توی ری اکت هستم درکنار این مقداری نود جی اس برای بکند و تعداد زیادی
    از ابزار ها و فریم ورک های مختلف دیگه هم یادگرفتم وهنوز هم دنبال یادگیری چیز های جدیدم
             </p>
        </div>
        <div className='meimg'>
            <h4 className='wata'>アフラ</h4>
            <img src={me} alt='white' className='aboutme' />
        </div>

    </div>
  )
}

export default Me;