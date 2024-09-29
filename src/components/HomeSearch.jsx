"use client";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

const HomeSearch = () => {
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const router = useRouter();
  const handelSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };
  const randomSearch = async(e) => {
    setRandomSearchLoading(true)
    const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);
      if(!response) return;
      router.push(`/search/web?searchTerm=${response}`);
      setRandomSearchLoading(false)
  };
  return (
    <>
      <form
        onSubmit={handelSubmit}
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
          className="flex-grow focus:outline-none "
        />
        <BsFillMicFill className="text-lg" />
      </form>
      <div className="flex flex-col space-y-2 justify-center sm:flex-row mt-8 sm:space-y-0 sm:space-x-4">
        <button
          onClick={handelSubmit}
          className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 transition-shadow h-10"
        >
          Google Search
        </button>
        <button
        disabled={randomSearchLoading}
          onClick={randomSearch}
          className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 transition-shadow h-10 disabled:opacity-80 disabled:shadow-sm"
        >
          {randomSearchLoading ? "loading.." : "I'm feeling lucky"}
        </button>
      </div>
    </>
  );
};

export default HomeSearch;
