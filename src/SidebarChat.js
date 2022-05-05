import { Avatar } from "@mui/material";
import { doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import db from "./firebasefile";
import "./SidebarChat.css";

function SidebarChat({ id, name, addNewChat }) {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState('')
  
  useEffect(() => {
    if (id) {
      db.collection('rooms').doc(id).collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
        setMessages(snapshot.docs.map((doc) => doc.data()))
      ))
    }
  } ,[id])

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  const createChat = () => {
    const roomName = prompt("Please enter name for chat room");
    if (roomName) {
      //   do some databae stuff later
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };
  return !addNewChat ? (
    <NavLink to = {`rooms/${id}`}>
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/:${seed}.svg`} />
      <div className="sidebarChat__info">
        <h3>{name}</h3>
          <p>{ messages[0]?.message }</p>
      </div>
    </div>
  </NavLink>
  ) : (
    <div className="addNewChat" onClick={createChat}>
      <h3>Add New Chat</h3>
    </div>
  );
}

export default SidebarChat;
