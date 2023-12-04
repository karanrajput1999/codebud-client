import { Input } from "../ui/input";
import { Button } from "../ui/button";

function Login() {
  return (
    <main
      className="flex items-center justify-center px-5"
      style={{ height: "calc(100vh - 13rem)" }}
    >
      <section className="w-80 sm:w-96 border border-black p-5 rounded-xl">
        <span className="text-3xl font-bold text-center block mb-5">Login</span>

        <form>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <Input type="email" id="email" className="mb-2" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <Input type="password" id="password" className="mb-2" />
          </div>

          <div className="flex justify-center mt-5">
            <Button
              type="submit"
              className="bg-primarycb text-lg w-28 hover:bg-primarycb "
            >
              Login
            </Button>
          </div>
        </form>
        <span className="mt-5 block text-center ">
          Visiting for the first time ?{" "}
          <a href="#" className="underline text-primarycb">
            Signup here
          </a>{" "}
        </span>
      </section>
    </main>
  );
}

export default Login;
