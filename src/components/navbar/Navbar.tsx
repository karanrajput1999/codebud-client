// components
import HomepageMobileNavbar from "./HomepageMobileNavbar";

import { Link } from "react-router-dom";

import { useState } from "react";

// shadcn
import logo from "../../assets/logo.svg";
import { Input } from "@/components/ui/input";

// lucid-react
import { ChevronRight, Search } from "lucide-react";
import LoginSignupContainer from "./LoginSignupContainer";
import HomepageUserNavbar from "./HomepageUserNavbar";
import LoginSignupContainerMobile from "./LoginSignupContainerMobile";
import HomepageUserMobileNavbar from "./HomepageUserMobileNavbar";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

function Navbar() {
  const [mobileLogInMenuOpen, setMobileLogInMenuOpen] = useState(false);
  const [homepageMobileNavbarOpen, setHomepageMobileNavbarOpen] =
    useState(false);

  const { data } = useSelector((state: RootState) => state.user);

  return (
    <header className="relative">
      <nav className="h-[4rem] flex items-center justify-around border-b border-primarycb px-2">
        <HomepageMobileNavbar
          isOpen={homepageMobileNavbarOpen}
          setIsOpen={setHomepageMobileNavbarOpen}
        />

        <button
          className="sm:hidden"
          onClick={() => setHomepageMobileNavbarOpen(!homepageMobileNavbarOpen)}
        >
          <ChevronRight />
        </button>

        <Link to="/">
          <div className="logo flex md:gap-5 gap-3 items-center mr-2 overflow-hidden px-1  ">
            <img src={logo} alt="logo" />
            <span className="text-2xl sm:text-[2rem] min-[650px]:block hidden font-bold ">
              Codebud
            </span>
          </div>
        </Link>
        <div className="searchbar sm:w-2/5 w-3/5 mx-2 sm:block max-[450px]:w-3/4 relative ">
          <Input
            className="border border-primarycb "
            placeholder="Search your query..."
          />
          <Search
            className="absolute right-3 top-[10px] text-primarycb"
            size={20}
          />
        </div>

        {/* login signup buttons */}
        {data ? <HomepageUserNavbar /> : <LoginSignupContainer />}

        {data ? (
          <HomepageUserMobileNavbar
            mobileLogInMenuOpen={mobileLogInMenuOpen}
            setMobileLogInMenuOpen={setMobileLogInMenuOpen}
          />
        ) : (
          <LoginSignupContainerMobile
            mobileLogInMenuOpen={mobileLogInMenuOpen}
            setMobileLogInMenuOpen={setMobileLogInMenuOpen}
          />
        )}
      </nav>
    </header>
  );
}

export default Navbar;
