// components
import HomepageMobileNavbar from "./HomepageMobileNavbar";

import { Link } from "react-router-dom";

import { useState } from "react";
import { cn } from "@/lib/utils";

// shadcn
import logo from "../../assets/logo.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// lucid-react
import { ChevronRight, Menu, Search } from "lucide-react";

function Navbar() {
  const [mobileLogInMenuOpen, setMobileLogInMenuOpen] = useState(false);
  const [homepageMobileNavbarOpen, setHomepageMobileNavbarOpen] =
    useState(false);

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

        <div className="login-container sm:flex md:gap-5 sm:gap-2 gap-1 hidden">
          <Link to="/login">
            <Button className="md:text-lg text-base md:w-24 sm:w-20 w-15 bg-primarycb border hover:bg-white hover:text-primarycb hover:border-primarycb">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="md:text-lg text-base md:w-24 w-20 bg-primarycb border hover:bg-white hover:text-primarycb hover:border-primarycb">
              Signup
            </Button>
          </Link>
        </div>

        <div className="mobile-login-menu-container relative sm:hidden flex items-center">
          <button onClick={() => setMobileLogInMenuOpen(!mobileLogInMenuOpen)}>
            <Menu />
          </button>

          <div
            className={cn(
              "mobile-login-menu w-28 border bg-white border-primarycb flex-col absolute right-0 top-6",
              mobileLogInMenuOpen ? "flex" : "hidden"
            )}
          >
            <Link
              to="/login"
              className="text-center font-semibold py-1 border border-b-primarycb"
            >
              Login
            </Link>
            <Link to="/signup" className="text-center font-semibold py-1">
              Signup
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
