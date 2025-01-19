import {
  BellIcon,
  CollectedIcon,
  HeartIcon,
  SearchIcon,
  UserIcon,
} from "../../design/Icons";

const Navbar = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 py-4 px-8 bg-white flex items-center justify-between gap-4">
      <div className="flex-1">
        <h2 className="font-bold text-2xl poppins-bold">WeO</h2>
      </div>
      <div className="bg-[#F3F3F8] min-w-[300px] w-1/4 relative flex items-center rounded-full">
        <div className="absolute left-2">
          <SearchIcon color="#72738D" size={0.7} />
        </div>
        <input
          className="w-full py-2 pl-8 pr-4 bg-transparent outline-none text-sm placeholder:text-[#72738D]"
          placeholder="Search Offers/brands/creators.."
        />
      </div>
      <div className="flex-1 flex items-center justify-end gap-8">
        <NavButton icon={<CollectedIcon size={0.8} />} />
        <NavButton icon={<BellIcon size={0.8} />} />
        <NavButton icon={<HeartIcon size={0.8} />} />
        <NavButton icon={<UserIcon size={0.8} />} />
      </div>
    </header>
  );
};

const NavButton = ({ icon }) => (
  <button className="p-2 rounded-md bg-white text-[#555669] hover:bg-[#8CC63F]/10 hover:text-[#8CC63F] transition-all duration-300 ease-in-out">
    {icon}
  </button>
);

export default Navbar;
