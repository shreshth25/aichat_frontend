import React, { useEffect, useState, useRef } from "react";
import { postAPI } from "../helpers/api";
import gif from '/30.gif'

const StoryChat = () => {
  const url = import.meta.env.VITE_REACT_APP_IMAGE_URL;
  const ref = useRef(null);
  const [messages, setMessages] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chat, setChat] = useState("");

const submitChat = async (e) => {
    setChat("");
    setMessages("")
    setIsLoading(true)
    e.preventDefault();
    const data = {
        text:chat 
    }

    try {
        const res = await postAPI("chat/story", data);
        setMessages(res.message)
        setIsLoading(false)

    } catch (error) {
        console.error("Error during API call:", error);
        setIsLoading(false)
    }
};



  return (
    <div className="card card-warning card-outline" style={{ height: "80vh"}}>
     <div className="card-header">Riktam AI Story Teller</div>
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
              placeholder="Type Message For Story..."
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

export default StoryChat;
