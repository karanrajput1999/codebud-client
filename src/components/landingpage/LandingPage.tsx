import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <main
      className="xl:px-48 lg:px-32 md:px-28 sm:px-14 px-4 flex items-center flex-col 2xl:mt-32 lg:mt-10 md:mt-14 sm:mt-24 min-[400px]:mt-14 mt-6"
      style={{ height: "calc(100vh - 13rem)" }}
    >
      <div className="hero-text">
        <h1 className="xl:text-[96px]/[1.3] lg:text-[88px] md:text-[85px] sm:text-[75px]/[1.3] min-[400px]:text-[60px]  text-[45px] font-bold text-center ">
          Find the <span className="text-primarycb">Best</span> answers to your{" "}
          <span className="text-primarycb">Technical</span> questions
        </h1>
        <h6 className="lg:text-[25px]/[5] text-[20px]/[3] font-bold text-center">
          Start helping others with your knowledge too.
        </h6>
      </div>

      <div className="hero-links flex sm:gap-10 gap-4 lg:mt-6 md:mt-10 sm:mt-8 mt-6 sm:flex-row flex-col">
        <Link
          to="/signup"
          className="xl:px-20 lg:px-6 px-4 py-4 xl:text-3xl lg:text-2xl text-xl bg-primarycb text-white font-bold rounded-lg text-center"
        >
          {" "}
          Join the community
        </Link>
        <Link
          to="/login"
          className="xl:px-10 lg:px-6 px-4 py-4 xl:text-3xl lg:text-2xl text-xl font-bold border border-black rounded-lg text-primarycb text-center "
        >
          {" "}
          Login here
        </Link>
        <Link
          to="/homepage"
          className="xl:px-10 lg:px-6 px-4 py-4 xl:text-3xl lg:text-2xl text-xl font-bold border border-black rounded-lg text-primarycb text-center "
        >
          {" "}
          Temporary home page
        </Link>
      </div>
    </main>
  );
}

export default LandingPage;
