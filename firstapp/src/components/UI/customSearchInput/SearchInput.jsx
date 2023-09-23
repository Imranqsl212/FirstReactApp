import classes from "./searchInput.module.css";

const SearchInput = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      className={classes.searchInput}
      type="text"
      placeholder="Search Cards"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};

export default SearchInput;
