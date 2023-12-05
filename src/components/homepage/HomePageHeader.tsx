import { Link } from "react-router-dom";

function HomePageHeader() {
  return (
    <div className="flex justify-between items-center px-2 py-2 h-20 ">
      <div>
        <h1 className="text-2xl md:text-4xl font-bold">Top Questions</h1>
      </div>
      <div>
        <Link
          to="/questions/ask"
          className="px-5 py-2 md:px-7 md:py-3 bg-primarycb md:text-lg text-white rounded-sm "
        >
          Ask Question
        </Link>
      </div>
    </div>
  );
}

export default HomePageHeader;
