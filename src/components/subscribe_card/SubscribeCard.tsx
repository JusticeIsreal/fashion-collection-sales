import { TextInput } from '@mantine/core'
import React from 'react'
import style from "../../assets/styles/modules/subscribe.module.css"
function SubscribeCard() {
    return (
        <>
            <div className={style.subscribe_container}>
                <h1>Subscribe</h1>
                <p>you wanna get notified about hawf latest styles</p>
                <form action="">
                    <TextInput placeholder="Email address" />
                    <button color="black">Subscribe</button>
                </form>
            </div>
        </>
    )
}

export default SubscribeCard
