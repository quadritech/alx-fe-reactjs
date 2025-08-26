import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";

const FavouritesList = function () {
  let favorites = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);
  const removeFavourite = useRecipeStore((state) => state.removeFavourite);
  //   const

  favorites = favorites.map((id) => recipes.find((recipe) => recipe.id == id));

  return (
    <div className="favorite pad-y">
      <h2>My Favorites</h2>
      <div style={{display:"flex", justifyContent:"center", flexWrap:'wrap'}}>
        {
            favorites.length ? (
                favorites.map((recipe) => (
          <div className="flex-2 recipe" key={recipe.id}>
            <div>
              <h3>{recipe.title}</h3>
              <p>{recipe.description.slice(0, 30) + " ..."}</p>
            </div>
            <div style={{display:'flex', gap:'.5rem'}}>
              <Link to="/details" state={recipe.id}>
                <button>Details</button>
              </Link>
              <button
                className="delete-btn"
                onClick={() => removeFavourite(recipe.id)}
              >
                Remove Favorite
              </button>
            </div>
          </div>
        ))
            ) : (<p>No Favorite Recipe added yet</p>)
        }
      </div>
    </div>
  );
};

export default FavouritesList;