import React from "react";
import { Button } from "../ui/button";

function LandingPage() {
  return (
    <main
      className="px-60 flex items-center flex-col mt-36"
      style={{ height: "calc(100vh - 13rem)" }}
    >
      <div className="hero-text">
        <h1 className="text-[96px] font-bold text-center">
          Find the <span className="text-primarycb">Best</span> answers to your{" "}
          <span className="text-primarycb">Technical</span> questions
        </h1>
        <h6 className="text-[25px] font-bold text-center">
          Start helping others with your knowledge too.
        </h6>
      </div>

      <div className="hero-links flex gap-10 mt-14">
        <a
          href="#"
          className="border px-20 py-5 text-3xl bg-primarycb text-white font-bold rounded-lg"
        >
          {" "}
          Join the community
        </a>
        <a
          href="#"
          className="px-10 py-5 text-3xl font-bold border border-black rounded-lg text-primarycb "
        >
          {" "}
          Login here
        </a>
      </div>
    </main>
  );
}

export default LandingPage;
