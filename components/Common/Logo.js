// https://react-svgr.com/playground/
import * as React from 'react'

const Logo = (props) => {
    // 定义一个包含图片文件路径的数组
    const images = [
        '/logo/1.png',
        '/logo/2.png',
        '/logo/3.png',
        '/logo/4.png',
        '/logo/5.png',
        '/logo/6.png',
        '/logo/7.png',
        '/logo/8.png',
        '/logo/9.png',
        '/logo/10.png',
        '/logo/11.png'
    ];

    // 随机选择一个图片路径
    const randomImage = images[Math.floor(Math.random() * images.length)];

    // 渲染图片
    return (
        <img src={randomImage} alt="Logo" />
    );
}

export default Logo