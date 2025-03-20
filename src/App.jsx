import './App.css'
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import { useState, useEffect } from 'react'
// import dummyJSON from './mockApi';

function App() {
  const [query, setQuery] = useState('chicken');
  const [recipes, setRecipes] = useState([]);
  const handleClick = (val) => {
    setQuery(val);
    console.log(val);
  };
  // console.log("Recipes", recipes)

  // fetching data from API
  useEffect(() => {
    async function getRecipes() {
      const endpoint = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
      try {
        const response = await fetch(`${endpoint}${query}`);
        if(!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();
        setRecipes(data.meals);
        // console.log("Meals", data.meals)
      } catch (error) {
        console.log(`Failed to fetch recipes: ${error.message}`);
      }
    }
    // call getRecipes
    getRecipes();
  }, [query])
  return (
    <>
      <SearchBar onClick={handleClick} />
      <RecipeList data={recipes} />
    </>
  )
}

export default App
