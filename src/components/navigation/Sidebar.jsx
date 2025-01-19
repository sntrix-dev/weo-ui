import {
  AddIcon,
  DownloadIcon,
  SearchIcon,
  UploadIcon,
} from "../../design/Icons";

const Sidebar = () => {
  return (
    <aside className="mt-[68px] w-max py-8">
      <div
        className="flex flex-col items-center justify-center gap-8 w-max  py-6 px-4 bg-white rounded-tr-[50px] rounded-br-[50px]"
        style={{
          boxShadow: "0px -1px 10px 0px rgba(205, 213, 229, 1)",
        }}
      >
        <NavButton
          icon={<img src="/images/colors-circle.png" width={18} height={18} />}
        />
        <NavButton icon={<SearchIcon size={0.75} />} />
        <NavButton icon={<DownloadIcon size={0.75} />} />
        <NavButton icon={<AddIcon size={0.75} />} />
        <NavButton icon={<UploadIcon size={0.75} />} />
      </div>
    </aside>
  );
};

const NavButton = ({ icon }) => <button className=" ">{icon}</button>;

export default Sidebar;
