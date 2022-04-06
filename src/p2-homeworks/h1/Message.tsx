import * as React from 'react';
import './Message.css'

type MessegeData = {
    avatar: string
    name: string
    message: string
    time: string

}


function Message(props: MessegeData) {
    return (
        <div className='homeWork'>
            <div className='myAvatar'>
                <img src='https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg' />

            </div>

             <div className='myMessage'>  <div>{props.name}</div>
                <div>{props.message}</div>
                 <div>{props.time}</div></div>
            </div>



)
}

export default Message
