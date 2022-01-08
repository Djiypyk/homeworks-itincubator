import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string

}

function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>
            <div className={s.img_icon}><img width={50} height={50} src={props.avatar} alt={'Icon Avatars'}/></div>
            <div className={s.message_item}>
                <div>
                    <div className={s.name}>{props.name}</div>
                    <div className={s.text}>{props.message}</div>
                </div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
