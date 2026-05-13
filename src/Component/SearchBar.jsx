function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="w-full mb-6">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full border rounded-xl px-4 py-3 outline-none"
      />
    </div>
  );
}

export default SearchBar;
