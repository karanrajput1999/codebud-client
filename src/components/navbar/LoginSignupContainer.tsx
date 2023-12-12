import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function LoginSignupContainer() {
  return (
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
  );
}

export default LoginSignupContainer;
