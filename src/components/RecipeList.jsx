import RecipeCard from "./RecipeCard";
// import { PulseLoader } from "react-spinners";

function RecipeList({data, isLoading}) {
    return (
        <div className="mt-7">
          {
            data.map(meal => (
                <RecipeCard key={meal.idMeal} src={meal.strMealThumb} name={meal.strMeal} area={meal.strArea} />
            ))
          }
        </div>
    )
}

export default RecipeList;