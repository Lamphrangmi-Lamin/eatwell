import './App.css'
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import { useState, useEffect } from 'react'
import { PulseLoader } from "react-spinners";

function App() {
  const [query, setQuery] = useState('chicken');
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = (val) => {
    setQuery(val);
    console.log(val);
  };
  // console.log("Recipes", recipes)

  // fetching data from API
  useEffect(() => {
    async function getRecipes() {
      setIsLoading(true);
      const endpoint = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
      try {
        const response = await fetch(`${endpoint}${query}`);
        if(!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setRecipes(data.meals);
        setIsLoading(false);
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
      {isLoading?
      <div className='fixed inset-0 flex justify-center items-center bg-black/40 backdrop-blur z-10'>
        <PulseLoader size={12} color="#FFBA08" />
      </div>
      : <RecipeList data={recipes} isLoading={isLoading} />
      }
    </>
  )
}

export default App
