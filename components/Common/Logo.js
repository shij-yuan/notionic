// https://react-svgr.com/playground/
import * as React from 'react'

const Logo = (props) => {
    // 定义一个包含图片文件路径的数组
    const images = [
        'public/logo/1.png',
        'public/logo/2.png',
        'public/logo/3.png',
        'public/logo/4.png',
        'public/logo/5.png',
        'public/logo/6.png',
        'public/logo/7.png',
        'public/logo/8.png',
        'public/logo/9.png',
        'public/logo/10.png',
        'public/logo/11.png'
    ];

    // 随机选择一个图片路径
    const randomImage = images[Math.floor(Math.random() * images.length)];

    // 渲染图片
    return (
        <img src={randomImage} alt="Logo" />
    );
}

export default Logo