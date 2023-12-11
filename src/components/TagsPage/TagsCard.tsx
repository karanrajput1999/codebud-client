function TagsCard() {
  return (
    <>
      <div className="tags-card flex flex-col border justify-center items-baseline gap-2 px-3 py-2 rounded">
        <button>
          <span className="flex items-center px-2 py-[2px] rounded-sm text-white bg-primarycb">
            javascript
          </span>
        </button>
        <span className="text-slate-600">5 Questions</span>
      </div>
      <div className="tags-card flex flex-col border justify-center items-baseline gap-2 px-3 py-2 rounded">
        <button>
          <span className="flex items-center px-2 py-[2px] rounded-sm text-white bg-primarycb">
            html
          </span>
        </button>
        <span className="text-slate-600">5 Questions</span>
      </div>
      <div className="tags-card flex flex-col border justify-center items-baseline gap-2 px-3 py-2 rounded">
        <button>
          <span className="flex items-center px-2 py-[2px] rounded-sm text-white bg-primarycb">
            css
          </span>
        </button>
        <span className="text-slate-600">5 Questions</span>
      </div>
      <div className="tags-card flex flex-col border justify-center items-baseline gap-2 px-3 py-2 rounded">
        <button>
          <span className="flex items-center px-2 py-[2px] rounded-sm text-white bg-primarycb">
            reactjs
          </span>
        </button>
        <span className="text-slate-600">5 Questions</span>
      </div>
      <div className="tags-card flex flex-col border justify-center items-baseline gap-2 px-3 py-2 rounded">
        <button>
          <span className="flex items-center px-2 py-[2px] rounded-sm text-white bg-primarycb">
            nodejs
          </span>
        </button>
        <span className="text-slate-600">5 Questions</span>
      </div>
      <div className="tags-card flex flex-col border justify-center items-baseline gap-2 px-3 py-2 rounded">
        <button>
          <span className="flex items-center px-2 py-[2px] rounded-sm text-white bg-primarycb">
            mongodb
          </span>
        </button>
        <span className="text-slate-600">5 Questions</span>
      </div>
      <div className="tags-card flex flex-col border justify-center items-baseline gap-2 px-3 py-2 rounded">
        <button>
          <span className="flex items-center px-2 py-[2px] rounded-sm text-white bg-primarycb">
            postgresql
          </span>
        </button>
        <span className="text-slate-600">5 Questions</span>
      </div>
    </>
  );
}

export default TagsCard;
