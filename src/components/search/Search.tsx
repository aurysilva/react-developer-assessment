import React, { useState } from 'react';
import styles from './SearchStyle.module.css';

interface SearchComponentProps {
  onSearch: (query: string) => void; // Function to handle search query
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState(''); // State to store the search query

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value; // Get the value from the input field
    setSearchQuery(query); // Update the search query state
    onSearch(query); // Call the onSearch function with the query
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search for articles..." // Placeholder text for the input field
      />
    </div>
  );
};

export default SearchComponent;
