import { useState } from "react";
import { SendOutlined, PictureOutlined } from "@ant-design/icons";
import { sendMessage, isTyping } from "react-chat-engine";

const MessageForm = (props)=>{
    const [value,setvalue] = useState('');
    const {chatId, creds} = props;

    const handleChange = (event)=>{
        setvalue(event.target.value);
        isTyping(props,chatId);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const text = value.trim();

        if(text.length>0){
            sendMessage(creds,chatId, {text});
        }
        setvalue('');
    };

    const handleUpload = (event) => {
        sendMessage(creds, chatId, {files: event.target.files, text: ''});
    }
    return (
        <form action="" className="message-form" onSubmit={handleSubmit}>
            <div style={{display: "flex"}}>
            <input type="text" 
                className="message-input"
                placeholder="Send a message..."
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
                width={'80%'}
            />
            <label htmlFor="upload-button" style={{width: '15%'}}>
                <span className="image-button">
                    <PictureOutlined className="picture-icon"/>
                </span>
            </label>

            <input type="file" name="" id="upload-button" 
                multiple={false}
                style={{display: 'none'}}
                onChange={handleUpload.bind(this)}
            />

            <button type="submit" className="send-button" style={{width: '15%'}}>
                <SendOutlined className="send-icon"/>
            </button>
            </div>
        </form>
    );
}

export default MessageForm;