import { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase/app";
import Message from "./message";

export const Chat = ({ auth, firestore }) => {
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });
  const [userTextInput, setUserTextInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid } = auth.currentUser;

    await messagesRef.add({
      text: userTextInput,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
    });

    setUserTextInput("");
  };

  return (
    <div>
      <main>
        {messages &&
          messages.map((message) => {
            return (
              <Message
                key={message.id}
                text={message.text}
                uid={message.uid}
                auth={auth}
              />
            );
          })}
      </main>

      <form onSubmit={sendMessage}>
        <input
          placeholder="Write your message here"
          value={userTextInput}
          onChange={(e) => setUserTextInput(e.target.value)}
        />
        <button type="submit">🕊️</button>
      </form>
    </div>
  );
};

export default Chat;
