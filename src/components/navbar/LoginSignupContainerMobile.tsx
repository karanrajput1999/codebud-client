import { cn } from "@/lib/utils";
import { MoreVertical } from "lucide-react";
import { Link } from "react-router-dom";

interface LoginSignupContainerTypes {
  mobileLogInMenuOpen: boolean;
  setMobileLogInMenuOpen: (mobileLogInMenuOpen: boolean) => void;
}

function LoginSignupContainerMobile({
  mobileLogInMenuOpen,
  setMobileLogInMenuOpen,
}: LoginSignupContainerTypes) {
  return (
    <div className="mobile-login-menu-container relative sm:hidden flex items-center">
      <button onClick={() => setMobileLogInMenuOpen(!mobileLogInMenuOpen)}>
        <MoreVertical />
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
  );
}

export default LoginSignupContainerMobile;
