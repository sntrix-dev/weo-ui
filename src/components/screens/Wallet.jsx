import { useRef } from "react";
import { ChevronDownIcon, TriangleIcon } from "../../design/Icons";
import WalletItem from "../wallet/Item";
import Circle from "../wallet/Circle";

const walletData = [
  {
    icon: <img src="/images/stakes.png" width={32} height={32} />,
    title: "Stakes",
  },
  {
    icon: <img src="/images/balance.png" width={32} height={32} />,
    title: "Add Balance",
  },
  {
    icon: <img src="/images/history.png" width={32} height={32} />,
    title: "History",
  },
  {
    icon: <img src="/images/top-ups.png" width={32} height={32} />,
    title: "Top Up Os",
  },
  {
    icon: <img src="/images/statistics.png" width={32} height={32} />,
    title: "Statistics",
  },
  {
    icon: <img src="/images/withdraw.png" width={32} height={32} />,
    title: "Withdraw",
  },
];

const WalletScreen = () => {
  return (
    <div className="w-full lg:h-screen relative flex-1 flex flex-col items-center justify-center">
      <div className="absolute top-[5.5rem] left-0 w-full z-10 flex items-center justify-between px-4">
        <h2 className="text-2xl font-bold poppins-bold">Wallet</h2>
        <select
          className="bg-white py-1 px-2 text-[#72738D] rounded-full text-sm cursor-pointer "
          style={{
            boxShadow: "-2px -2px 4px 0px rgba(95, 95, 95, 0.2) inset",

            boxShadow: "3px 3px 3px 0px rgba(255, 255, 255, 1) inset",
          }}
        >
          <option>USD</option>
          <option>AUD</option>
          <option>CAD</option>
          <option>INR</option>
        </select>
        {/* <button
          className="bg-white py-1 px-2 text-[#72738D] rounded-full text-sm cursor-pointer flex items-center gap-2"
          style={{
            boxShadow: "-2px -2px 4px 0px rgba(95, 95, 95, 0.2) inset",
            boxShadow: "3px 3px 3px 0px rgba(255, 255, 255, 1) inset",
          }}
        >
          <span>USD</span>
          <ChevronDownIcon />
        </button> */}
      </div>
      <div
        className="lg:w-[60rem] lg:h-[60rem] mt-[7.5rem] pb-[10rem] lg:pb-0 lg:mt-0 rounded-full relative grid grid-cols-2 lg:flex items-center gap-4 justify-center"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 43%, rgba(255, 255, 255, 0.5) 54%, rgba(253, 255, 252, 0.5) 63.5%, rgba(228, 255, 228, 0.5) 90.5%, rgba(255, 255, 255, 0.5) 99.5%)",
          boxShadow: "0px 4px 100px 0px rgba(205, 213, 229, 1)",
        }}
      >
        <Circle />
        {walletData.map((item, index) => {
          const positions = {};
          const lineUp = index + 1;

          if (lineUp % 2 === 0) {
            positions["right"] = lineUp === 4 ? 32 : 116;
          } else {
            positions["left"] = lineUp === 3 ? 32 : 116;
          }

          if (lineUp === 1 || lineUp === 2) {
            positions["top"] = 160;
          }

          if (lineUp === 5 || lineUp === 6) {
            positions["bottom"] = 160;
          }

          return (
            <WalletItem
              key={index}
              icon={item.icon}
              title={item.title}
              {...positions}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WalletScreen;
