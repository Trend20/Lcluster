import React from "react";

interface SearchProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ value, onChange }: SearchProps) => {
  return (
    <div className="flex w-full">
      <input
        type="text"
        placeholder="Search.."
        value={value}
        onChange={onChange}
        className="border bg-transparent rounded-lg outline-none px-3 py-3 mt-3 mb-5 w-full"
      />
    </div>
  );
};

export default Search;
