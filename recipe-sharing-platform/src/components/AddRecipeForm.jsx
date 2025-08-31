import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Recipe title is required";
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required";
    } else {
      const ingredientsList = ingredients.split("\n").filter((item) => item.trim() !== "");
      if (ingredientsList.length < 2) {
        newErrors.ingredients = "Please enter at least 2 ingredients";
      }
    }

    if (!steps.trim()) {
      newErrors.steps = "Instructions are required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!validate()) {
      setError("⚠️ Please fix the errors below before submitting.");
      return;
    }

    const newRecipe = {
      id: Date.now(),
      title,
      description: steps.substring(0, 60) + "...",
      image: "https://source.unsplash.com/400x300/?food",
      ingredients: ingredientsList,
      steps: steps.split("\n").filter((step) => step.trim() !== ""),
    };

    console.log("✅ New Recipe Added:", newRecipe);

    setTitle("");
    setIngredients("");
    setSteps("");
    setError("");
    setErrors({});
    alert("🎉 Recipe submitted successfully!");
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen flex justify-center items-start">
      <div className="w-full max-w-md sm:max-w-lg lg:max-w-2xl shadow-lg bg-white rounded-lg p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-center text-gray-800">Add New Recipe</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-3 py-2 sm:px-4 sm:py-3 rounded shadow-sm">
              {error}
            </div>
          )}
          
          <div>
            <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
              Recipe Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-md transition-shadow ${
                errors.title ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter recipe title"
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-600">{errors.title}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
              Ingredients (one per line)
            </label>
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              rows={4}
              className={`w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-md transition-shadow resize-none ${
                errors.ingredients ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter ingredients, one per line"
            />
            {errors.ingredients && (
              <p className="mt-1 text-sm text-red-600">{errors.ingredients}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
              Instructions (one step per line)
            </label>
            <textarea
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              rows={6}
              className={`w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-md transition-shadow resize-none ${
                errors.steps ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter cooking steps, one per line"
            />
            {errors.steps && (
              <p className="mt-1 text-sm text-red-600">{errors.steps}</p>
            )}
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 sm:py-3 sm:px-6 text-sm sm:text-base font-medium rounded-md shadow-md hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 active:transform active:scale-95"
          >
            Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;