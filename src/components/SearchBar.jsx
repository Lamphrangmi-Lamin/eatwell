import { useState } from "react";

function SearchBar({ onClick }) {
    const [query, setQuery] = useState('');
    const handleKeyDown = (e) => {
        if (e.key == 'Enter') {
            onClick(query);
        }
    }
    return (
        <div className="flex justify-center items-center mt-1">
            <input
                type="text"
                value={query}
                name="search-input"
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search recipe"
                className="bg-amber-50 text-black p-2 rounded-s-sm focus:outline-none"
            />
            <i role="button" onClick={() => onClick(query)} className="fa-solid fa-magnifying-glass inline-flex justify-center items-center h-full bg-[#D00000] p-3 rounded-e-sm"></i>
        </div>
    )
}

export default SearchBar