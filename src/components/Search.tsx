import React from 'react';

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Поиск продуктов..."
      onChange={(e) => onSearch(e.target.value)}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
    />
  );
};

export default Search;