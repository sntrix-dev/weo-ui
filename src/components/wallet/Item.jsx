const WalletItem = ({ icon, title, top, bottom, right, left }) => {
  return (
    <div
      className="w-40 h-40 flex flex-col items-center justify-center gap-4 bg-white rounded-full absolute"
      style={{
        boxShadow: "0px 0px 20px 4px rgba(203, 200, 234, 0.6)",
        top,
        bottom,
        right,
        left,
      }}
    >
      {icon}
      <h3>{title}</h3>
    </div>
  );
};

export default WalletItem;
