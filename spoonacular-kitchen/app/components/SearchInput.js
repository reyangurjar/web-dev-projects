"use client";
import { useRouter } from "next/navigation";
import NProgress from "nprogress";
import Link from "next/link";
import { useState, useEffect } from "react";
const SearchInput = ({ className }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const router = useRouter();

  const handleKeyDown = (event) => {
    console.log("key pressed");
    if (searchTerm !== "" && event.key === "Enter") {
      // TO make the next-top loading bar work with router.push
      NProgress.start();
      router.push(`/search/recipe/${searchTerm}`);
    }
  };

  // To make the request only after the user has stopped typing to save resources and api
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const handleInputChange = debounce((e) => {
    setSearchTerm(e.target.value);
  }, 300); // Adjust delay as needed (e.g., 300ms)

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm) {
        const response = await fetch(
          `/api/search/recipe/autocomplete/${searchTerm}`
        );
        const data = await response.json();
        setData(data);
      } else {
        setData([]);
      }
    };

    fetchData();
  }, [searchTerm]);
  return (
    <div className="flex items-center gap-4">
      <div className="relative group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className=" absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
            clipRule="evenodd"
          />
        </svg>

        <input
          className={`${className}  rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 placeholder:text-gray-300`}
          placeholder="Search for recipes..."
          type="search"
          onChange={(e) => handleInputChange(e)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <div
          className={`${className} hidden  group-focus-within:block absolute flex-col  rounded-lg  w-full z-10 text-white font-medium`}
        >
          {data.length !== 0
            ? data.map((data) => (
                <div
                  key={data.id}
                  className="searchResult py-2 border-t  text-center "
                >
                  <Link href={`/recipe/${data.id}`}>{data.title}</Link>
                </div>
              ))
            : searchTerm == 0
            ? ""
            : "No results found"}
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
