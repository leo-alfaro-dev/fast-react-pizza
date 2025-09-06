import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const SearchOrder = ({ disabled }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      navigate(`/order/${query}`);
      setQuery('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="w-28 rounded-full px-4 py-2 text-sm ring-opacity-50 transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring-yellow-500 sm:w-64 sm:focus:w-72"
        placeholder="Order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        disabled={disabled}
      ></input>
    </form>
  );
};

export default SearchOrder;
