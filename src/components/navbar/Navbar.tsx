import { useState } from "react";
import { cn } from "@/lib/utils";

// shadcn
import logo from "../../assets/logo.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// lucid-react
import { Menu } from "lucide-react";

function Navbar() {
  const [mobileLogInMenuOpen, setMobileLogInMenuOpen] = useState(false);

  return (
    <header>
      <nav className="h-[4rem] flex items-center justify-around border-b border-primarycb px-2">
        <div className="logo flex md:gap-5 gap-3 items-center mr-2 overflow-hidden px-1 ">
          <img src={logo} alt="logo" />
          <span className="text-[2rem] min-[450px]:block hidden font-bold ">
            Codebud
          </span>
        </div>

        <div className="searchbar sm:w-2/5 w-3/5 mx-2 sm:block max-[450px]:w-3/4 ">
          <Input
            className="border border-primarycb"
            placeholder="Search your query..."
          />
        </div>

        <div className="login-container sm:flex md:gap-5 sm:gap-2 gap-1 hidden">
          <Button className="md:text-lg text-base md:w-24 sm:w-20 w-15 bg-primarycb border hover:bg-white hover:text-primarycb hover:border-primarycb">
            Login
          </Button>
          <Button className="md:text-lg text-base md:w-24 w-20 bg-primarycb border hover:bg-white hover:text-primarycb hover:border-primarycb">
            Signup
          </Button>
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
            <a
              href="#"
              className="text-center font-semibold py-1 border border-b-primarycb"
            >
              Login
            </a>
            <a href="#" className="text-center font-semibold py-1">
              Signup
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
