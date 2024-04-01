import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import ChatMsg from "./ChatMsg";
import { generateRandomMessages, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const apiPollingInterval = setInterval(() => {
      //Api polling
      //   console.log("Api polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessages(),
        })
      );
    }, 1500);

    return () => clearInterval(apiPollingInterval);
  }, []);
  return (
    <>
      <div className="p-2 bg-slate-100 rounded-t-lg border border-x-black border-t-black h-[400px] w-full  overflow-y-scroll flex flex-col-reverse">
        {/* <h1 className="font-semibold text-lg ">Live Chat</h1> */}
        {chatMessages.map((c, i) => (
          <ChatMsg key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="w-full border rounded-b-lg border-x-black border-b-black bg-slate-100"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Ankit",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="ml-4 p-1 bg-yellow-50 border-2 w-72 border-black rounded-lg"
          type="text"
          placeholder="Message"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="ml-2 rounded-xl border-2 p-1 w-20 border-black active:bg-black active:text-white">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
