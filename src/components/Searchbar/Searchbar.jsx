import { IoIosSearch } from "react-icons/io";

const Searchbar = (props) => {
  const setSearchQuery = props.setSearchQuery;
  const searchQueryHandler = props.searchQueryHandler;
  const searchQuery = props.searchQuery;
  return (
    <div>
      <div className="group flex items-center">
        <div className="flex h-10 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl md:group-focus-within:ml-5 md:group-focus-within:pl-0">
          <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
            <IoIosSearch className="text-white text-xl" />
          </div>
          <input
            type="text"
            className="bg-gray-900 outline-none text-gray-300 text-xl p-2 pr-5  pl-5 md:pl-0 w-44 md:group-focus-within:pl-0md:w-64 lg:w-[500px] rounded-full max-lg:bg-gray-700"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            placeholder="Search"
            value={searchQuery}
          />
        </div>
        <button
          className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]"
          onClick={() => searchQueryHandler("searchButton")}
        >
          <IoIosSearch className="text-white text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
