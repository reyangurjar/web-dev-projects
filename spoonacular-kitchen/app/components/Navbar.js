import Link from "next/link";
import SearchInput from "./SearchInput";
import Logo from "./Logo";
const Navbar = () => {
  return (
    <div>
      <nav className=" fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
         <Logo/>
         <div className="flex">
          <SearchInput className="bg-gray-800" />
         </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
