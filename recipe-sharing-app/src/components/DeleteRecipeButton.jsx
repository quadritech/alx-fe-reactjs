import useRecipeStore from "./recipeStore";
import { useNavigate } from "react-router-dom";


function DeleteRecipe ({recipeId}) {

    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
    const navigate = useNavigate();

    function deleteFn(id) {
      deleteRecipe(id);
      alert('Deleted Successfully')
      navigate("/list");
    }

    return (
      <button className="delete-btn" onClick={() => deleteFn(recipeId)}>
        Delete Recipe
      </button>
    );


}

export default DeleteRecipe;