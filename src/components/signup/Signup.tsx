import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <main
      className="flex items-center justify-center px-5 pt-5 "
      style={{ minHeight: "calc(100vh - 4rem)" }}
    >
      <section className="w-80 sm:w-96 border border-black p-5 rounded-xl">
        <span className="text-3xl font-bold text-center block mb-5">
          Signup
        </span>

        <form>
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <Input type="text" id="name" className="mb-2" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <Input type="email" id="email" className="mb-2" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <Input type="password" id="password" className="mb-2" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="confirmPassword">Confirm password</label>
            <Input type="password" id="confirmPassword" className="mb-2" />
          </div>
          <div className="flex justify-center mt-3">
            <Button className="bg-transparent h-8 text-primarycb border border-primarycb hover:bg-white">
              Choose Avatar
            </Button>
          </div>

          <div className="flex justify-center mt-5">
            <Button
              type="submit"
              className="bg-primarycb text-lg w-28 hover:bg-primarycb "
            >
              Signup
            </Button>
          </div>
        </form>
        <span className="mt-5 block text-center">
          Already registered ?{" "}
          <Link to="/login" className="underline text-primarycb">
            Login here
          </Link>{" "}
        </span>
      </section>
    </main>
  );
}

export default Signup;
