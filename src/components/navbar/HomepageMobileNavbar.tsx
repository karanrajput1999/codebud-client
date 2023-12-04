import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import { isElementOfType } from "react-dom/test-utils";

function HomepageMobileNavbar({ isOpen, setIsOpen }) {
  return (
    <section
      className={cn(
        "home-mobile-navbar h-[100vh] w-52 bg-white border-r border-primarycb flex-[25%] absolute top-0 left-0  md:hidden transition-all duration-300",
        isOpen ? "translate-x-[0rem]" : "translate-x-[-13rem]"
      )}
    >
      <div className="h-[4rem] flex items-center ml-2">
        <button onClick={() => setIsOpen(false)}>
          <ChevronLeft />
        </button>
      </div>

      <nav>
        <ul>
          <li>Home</li>
          <li>Questions</li>
          <li>Users</li>
        </ul>
      </nav>
    </section>
  );
}

export default HomepageMobileNavbar;
