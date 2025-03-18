import './App.css'
import SearchBar from './components/SearchBar';
import { useState } from 'react'

function App() {
  const [query, setQuery] = useState('');
  const handleClick = (val) => {
    setQuery(val);
    console.log(val);
  };
  return (
    <>
      <SearchBar onClick={handleClick} />
    </>
  )
}

export default App
