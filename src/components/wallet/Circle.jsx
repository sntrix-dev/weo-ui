import { TriangleIcon } from "../../design/Icons";

const Circle = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-8 p-12 w-[32rem] h-[32rem] rounded-full overflow-hidden"
      style={{
        boxShadow: "0px 0px 20px 4px rgba(201, 234, 200, 1)",
      }}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <h4 className="text-base text-[#72738D] text-center">O Price</h4>
        <div className="flex items-center justify-center gap-4">
          <h3 className="text-2xl font-medium text-[#555669]">$0.0025</h3>
          <div className="w-[1px] h-4 bg-[#C9C9D8]" />
          <div className="text-[#8CC63F] flex items-center justify-center gap-2">
            <TriangleIcon />
            <h3 className="text-2xl font-medium">1.2%</h3>
          </div>
        </div>
      </div>
      <div
        className="bg-[#F6FFF5] p-4 rounded-full"
        style={{
          boxShadow: "0px 0px 20px 4px rgba(218, 234, 200, 0.6)",
        }}
      >
        <div
          className="flex flex-col items-center justify-center gap-4 p-4 w-48 h-48 rounded-full overflow-hidden"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #F8F8FF 39%, #D7F0CA 100%)",
          }}
        >
          <div className="flex flex-col items-center justify-center gap-1">
            <h4 className="text-base text-[#72738D] text-center">Balance</h4>
            <h3 className="text-[#555669] text-2xl font-bold text-center">
              $4925.21
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <h4 className="text-base text-[#72738D] text-center">Os</h4>
            <h3 className="text-[#555669] text-2xl font-bold text-center">
              9250
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <h4 className="text-base text-[#72738D] text-center">Your Os Value</h4>
        <div className="flex items-center justify-center gap-4">
          <h3 className="text-2xl font-medium text-[#555669]">$92.8</h3>
          <div className="w-[1px] h-4 bg-[#C9C9D8]" />
          <div className="text-[#8CC63F] flex items-center justify-center gap-2">
            <TriangleIcon />
            <h3 className="text-2xl font-medium">3.4</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Circle;
