import React from 'react'
import classes from "./Message.module.css";


type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={classes.Messages}>
            <div className={classes.bg}>
                <div className={classes.userPic}>
                    <img src={props.avatar} alt="UserAvatar"/>
                </div>
            </div>
            <div className={classes.messagesBox}>
                <p><a href="#">{props.name}</a></p>
                <p>{props.message}</p>
                <span>{props.time}</span>
            </div>


        </div>
    )
}

export default Message
