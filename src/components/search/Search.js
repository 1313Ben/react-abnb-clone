import './Search.scss';

const Search = ({ handleSearch }) => {
  
  return (
    <input onKeyUp={(e) => handleSearch(e.target.value)} className="search" placeholder="Enter your search text"  />
  )
}

export default Search
