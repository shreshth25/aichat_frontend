import React, { useEffect, useState, useRef } from "react";
import { postAPI } from "../helpers/api";
import gif from '/30.gif'

const AIChat = () => {
  const url = import.meta.env.VITE_REACT_APP_IMAGE_URL;
  const ref = useRef(null);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [chat, setChat] = useState("");

const submitChat = async (e) => {
    const new_message = chat
    setChat("");
    setIsLoading(true)
    e.preventDefault();
    setMessages((prevstate) => [...prevstate, { content: new_message, role: "user" }]);
    const data = {
        chat: [...messages, { content: new_message, role: "user" }]
    };

    try {
        const res = await postAPI("chat", data);
        if (res && res.content) {
            setMessages((prevstate) => [...prevstate, { content: res.content, role: "assistant" }]);
        } else {
            console.error("Invalid API response:", res);
        }
        setChat("");
        setIsLoading(false)

    } catch (error) {
        console.error("Error during API call:", error);
        setIsLoading(false)
    }
};



  return (
    <div className="card card-primary card-outline" style={{ height: "80vh"}}>
    <div className="card-header">Riktam AI Chat</div> 
    <div
        className="card-body"
        style={{ height: "100%", overflow: "scroll", overflowX:"hidden" }}
      >
        {messages.map((item, index) => (
          <div key={index} className="my-2 border p-2" ref={ref}>
            {item.role === "user" ? (
              <div className="text-right">
                <img
                  src={
                    "dist/img/AdminLTELogo.png"
                  }
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                />
                {item.content}
              </div>
            ) : (
              <div>
                <img
                  src="/download.png"
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                />
                {item.content}
              </div>
            )}
          </div>
        ))}
        {isLoading?<img src={gif}></img>:''}
      </div>
      <div className="card-footer">
        <form onSubmit={(e) => submitChat(e)} method="post">
          <div className="input-group">
            <input
              type="text"
              name="message"
              placeholder="Type Message ..."
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

export default AIChat;
