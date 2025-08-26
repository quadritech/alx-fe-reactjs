import { useState } from "react";
import useRecipeStore from "./recipeStore";
import { useNavigate } from "react-router-dom";

function EditRecipe ({ recipe }) {


    const updateRecipe = useRecipeStore((state) => state.updateRecipe);
    const [updateTitle, setUpdateTitle] = useState("");
    const [updateDescription, setUpdateDescription] = useState("");
    const navigate = useNavigate();

    function update(event) {
      event.preventDefault();
      if (updateDescription || updateTitle) {
        updateRecipe(recipe.id, {
          title: updateTitle,
          description: updateDescription,
        });
      }
      navigate("/list");
    }

    return (
        <form onSubmit={(e) => update(e)} className="flex-col recipe">
      <label htmlFor="title">Update Title</label>
      <input
        id="title"
        type="text"
        placeholder={`Enter a new title for ${recipe.title}`}
        onChange={(e) => setUpdateTitle(e.target.value)}
        value={updateTitle}
        className="input-field"
      />

      <label htmlFor="description">Update Description</label>
      <textarea
        name=""
        id="description"
        placeholder={`Update the description for ${recipe.title}`}
        onChange={(e) => setUpdateDescription(e.target.value)}
        value={updateDescription}
        className="input-field"
        rows={10}
        cols={40}
      ></textarea>

      <button type='submit'>Submit Update</button>
    </form>
    )
}

export default EditRecipe;