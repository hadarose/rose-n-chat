export const Message = ({ text, uid, auth }) => {
  const sentOrReceived = uid === auth.currentUser.id ? "sent" : "received";
  return (
    <div className={`message ${sentOrReceived}`}>
      <img
        className="chat-img"
        src="https://media-exp1.licdn.com/dms/image/C4D03AQF4Jf4A757N5A/profile-displayphoto-shrink_800_800/0/1609870273940?e=1645660800&v=beta&t=E4ELGrkuRt7j86eXSkOIKHe3fa-w2tw01KUCbfsXdYk"
      />
      <p>{text}</p>
    </div>
  );
};

export default Message;
