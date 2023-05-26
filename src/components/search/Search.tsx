import React, { useState } from 'react';
import styles from './SearchStyle.module.css';

interface SearchComponentProps {
  onSearch: (query: string) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search for articles..."
      />
    </div>
  );
};

export default SearchComponent;
