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
    <div className="flex flex-col w-full px-50 py-40 justify-center items-center">
      <h3 className="font-bold text-2xl">
        Find Javascript Libraries based on your requirement.
      </h3>
      <div className="flex items-center mt-8 w-full">
        <div className="flex w-full justify-between items-center">
          <div className="flex ml-5 w-1/4">
            <select
              value={selectedOption}
              onChange={handleSelectChange}
              className="flex outline-none rounded-md p-3 border bg-transparent"
            >
              <option value="default">Default</option>
              {javascriptOptions.map((item) => (
                <option key={item.id} value={item.value}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex w-1/4 justify-end items-center">
            <Search value={searchQuery} onChange={handleSearchChange} />
          </div>
        </div>
      </div>
      <div className="grid w-full grid-cols-2 gap-8 py-10">
        {selectedLibs.map((lib: any) => (
          <LibraryCard key={lib.name} library={lib} />
        ))}
      </div>
    </div>
  );
};

export default Javascript;
