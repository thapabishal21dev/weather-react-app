import React, { useRef } from "react";

const Search = (props) => {
  const inputSearch = useRef();
  return (
    <div>
      <input
        className=" bg-[#343f56] p-2.5 w-[300px] rounded"
        type="'text"
        value={props.searchData}
        placeholder="Search Here"
        onChange={() => props.eventHandler(inputSearch.current.value)}
        ref={inputSearch}
      />
      <button
        className="bg-[#42a0db] font-bold  rounded p-2.5 ml-5 w-[100px]  hover:bg-sky-600  hover:transition 1"
        type="button"
        onClick={props.searchWeather}
      >
        Look up
      </button>
    </div>
  );
};

export default Search;
