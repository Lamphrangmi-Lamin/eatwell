import './App.css'
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import { useState } from 'react'
import dummyJSON from './mockApi';

function App() {
  const [query, setQuery] = useState('');
  const handleClick = (val) => {
    setQuery(val);
    console.log(val);
  };
  return (
    <>
      <SearchBar onClick={handleClick} />
      <RecipeList jsonData={dummyJSON} />
    </>
  )
}

export default App
