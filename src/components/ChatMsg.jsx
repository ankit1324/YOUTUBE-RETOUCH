const ChatMsg = ({ name, message }) => {
  return (
    <div className="flex">
      <img
        className="w-8 h-8"
        src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
        alt=""
      />
      <span className="p-1 font-semibold">{name}:</span>
      <span className="p-1">{message}</span>
    </div>
  );
};

export default ChatMsg;
