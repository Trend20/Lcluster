"use client";
import LibraryCard from "@/components/LibraryCard";
import Search from "@/components/Search";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

const javascriptOptions = [
  {
    id: 1,
    name: "paginate",
    value: "paginate",
  },
  {
    id: 2,
    name: "authentication",
    value: "authentication",
  },
  {
    id: 3,
    name: "carousel",
    value: "carousel",
  },
  {
    id: 4,
    name: "markdown",
    value: "markdown",
  },
  {
    id: 5,
    name: "scroll",
    value: "scroll",
  },
  {
    id: 6,
    name: "toast",
    value: "toast",
  },
  {
    id: 7,
    name: "alert",
    value: "alert",
  },
  {
    id: 8,
    name: "notification",
    value: "notification",
  },
  {
    id: 9,
    name: "encrypt",
    value: "encrypt",
  },
  {
    id: 10,
    name: "json",
    value: "json",
  },
  {
    id: 11,
    name: "modal",
    value: "modal",
  },
  {
    id: 12,
    name: "convert",
    value: "convert",
  },
  {
    id: 13,
    name: "token",
    value: "token",
  },
  {
    id: 14,
    name: "cors",
    value: "cors",
  },
  {
    id: 15,
    name: "http",
    value: "http",
  },
  {
    id: 16,
    name: "middleware",
    value: "middleware",
  },
  {
    id: 16,
    name: "react",
    value: "react",
  },
  {
    id: 17,
    name: "vue",
    value: "vue",
  },
  {
    id: 18,
    name: "angular",
    value: "angular",
  },
  {
    id: 19,
    name: "testing",
    value: "testing",
  },
  {
    id: 20,
    name: "spinner",
    value: "spinner",
  },
];

const Javascript = () => {
  const [selectedOption, setSelectedOption] = useState("paginate");
  const [selectedLibs, setSelectedLibs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { data: session } = useSession();

  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    async function getSelectedLibs() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.npms.io/v2/search?q=keywords:${selectedOption}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        console.log(data);
        setSelectedLibs(data.results);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    getSelectedLibs();
  }, [selectedOption]);

  console.log(selectedLibs);

  // const filteredRepos = selectedLibs.filter((lib: any) =>
  //   lib.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  const handleSelectChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedOption(event.target.value);
  };

  if (!session) {
    return redirect("/auth/signin");
  }

  return (
    <div className="flex flex-col mt-20 w-full px-4 md:px-6 lg:px-36 py-10 md:py-16 lg:py-24 justify-center items-center">
      <h3 className="font-bold text-lg md:text-xl lg:text-2xl">
        Find Javascript Libraries for your project.
      </h3>
      <div className="flex items-center mt-6 md:mt-8 w-full">
        <div className="flex w-full flex-col lg:flex-row justify-between items-start lg:items-center">
          <div className="flex lg:ml-2 md:ml-5 w-full md:w-1/2 flex-col">
            <label htmlFor="" className="flex text-base md:text-lg font-medium">
              Select Requirement
            </label>
            <select
              value={selectedOption}
              onChange={handleSelectChange}
              className="flex outline-none w-full md:w-3/4 mt-2 md:mt-3 rounded-md p-2 md:p-3 border bg-transparent"
            >
              <option value="default">Default</option>
              {javascriptOptions.map((item) => (
                <option key={item.id} value={item.value}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex w-full md:w-1/2 justify-end items-center lg:mt-13">
            <Search value={searchQuery} onChange={handleSearchChange} />
          </div>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 py-8 md:py-10 lg:py-12">
        {selectedLibs.map((lib: any) => (
          <LibraryCard key={lib.name} library={lib} />
        ))}
      </div>
    </div>
  );
};

export default Javascript;
