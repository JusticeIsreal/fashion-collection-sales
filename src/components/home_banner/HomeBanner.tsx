import React from 'react'
import Image from 'next/image'
import style from "../../assets/styles/modules/home_banner.module.css"
function HomeBanner() {
    return (
        <>
            <div className={style.home_banner}>
                <div className={style.img}>
                    <div className={style.overlay}></div>
                    <Image fill src="https://images.pexels.com/photos/8979070/pexels-photo-8979070.jpeg" alt="wer" />
                </div>
                <div className={style.text}>
                    <h1>It&apos;s your time</h1>
                    <h1>It&apos;s your style</h1>
                    <button>Shop now</button>
                </div>
            </div>
        </>
    )
}

export default HomeBanner
