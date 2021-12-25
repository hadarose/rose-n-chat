export const Message = ({ text, uid, auth }) => {
  const sentOrReceived = uid === auth.currentUser.uid ? "sent" : "received";
  return (
    <div className={`message ${sentOrReceived}`}>
      <img
        className="chat-img"
        src={auth.currentUser.photoURL || "../user-icon.png"}
      />
      <p>{text}</p>
    </div>
  );
};

export default Message;
