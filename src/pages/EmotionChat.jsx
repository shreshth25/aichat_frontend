import React, { useEffect, useState, useRef } from "react";
import { postAPI } from "../helpers/api";
import gif from '/30.gif'

const EmotionChat = () => {
  const url = import.meta.env.VITE_REACT_APP_IMAGE_URL;
  const ref = useRef(null);
  const [messages, setMessages] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chat, setChat] = useState("");

const submitChat = async (e) => {
    setChat("");
    setIsLoading(true)
    e.preventDefault();
    const data = {
        text:chat 
    }

    try {
        const res = await postAPI("chat/analyze", data);
        console.table(res.message)
        setMessages(res.message)
        setChat("");
        setIsLoading(false)

    } catch (error) {
        console.error("Error during API call:", error);
        setIsLoading(false)
    }
};



  return (
    <div className="card card-danger card-outline" style={{ height: "80vh"}}>
     <div className="card-header">Riktam AI Emotion Analyzer</div>
      <div
        className="card-body"
        style={{ height: "100%", overflow: "scroll", overflowX:"hidden" }}
      >
      <div>
      {messages}
      </div>
        {isLoading?<img src={gif}></img>:''}
      </div>
      <div className="card-footer">
        <form onSubmit={(e) => submitChat(e)} method="post">
          <div className="input-group">
            <input
              type="text"
              name="message"
              placeholder="Type Message For Emotion Analyzer..."
              className="form-control"
              value={chat}
              onChange={(e) => {
                setChat(e.target.value);
              }}
            />
            <span className="input-group-append">
              <button type="submit" className="btn btn-primary" disabled={isLoading}>
                {isLoading?'Wait':'Send'}
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmotionChat;
