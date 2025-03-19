import RecipeCard from "./RecipeCard";

function RecipeList({jsonData}) {
    return (
        <div className="mt-7">
          {
            jsonData.data.map(item => (
                <RecipeCard key={item.id} src={item.url} name={item.name} />
            ))
          }
        </div>
    )
}

export default RecipeList;