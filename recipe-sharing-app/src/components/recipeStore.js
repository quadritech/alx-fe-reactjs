import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: JSON.parse(localStorage.getItem("recipes") || "[]"),

  favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),

  recommendations: [],

  addFavorite: (recipeId) =>
    set((state) => {
      const newFavorites = [...state.favorites, recipeId];
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      alert("Added to Favorite");
      return { favorites: newFavorites };
    }),

  removeFavourite: (recipeId) =>
    set((state) => {
      let newFavorites = state.favorites.filter((id) => id != recipeId);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return { favorites: newFavorites };
    }),

  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),

  searchTerm: "",
  setSearchTerm: function (term) {
    set({ searchTerm: term });
  },

  filteredRecipes: [],
  filterRecipes: function () {
    set((state) => {
      let searchedRecipes = state.recipes;
      searchedRecipes = searchedRecipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
      return { filteredRecipes: searchedRecipes };
    });
  },

  addRecipe: function (newRecipe) {
    set((state) => {
      let newRecipes = [...state.recipes, newRecipe];
      localStorage.setItem("recipes", JSON.stringify(newRecipes));
      alert("Recipe Added Successfully")
      return { recipes: newRecipes };
    });
  },

  setRecipes: (recipes) => set({ recipes: recipes }),

  deleteRecipe: function (id) {
    console.log(id);
    set((state) => {
      let newRecipes = state.recipes;
      newRecipes = newRecipes.filter((recipe) => recipe.id != id);
      localStorage.setItem("recipes", JSON.stringify(newRecipes));

      return { recipes: newRecipes };
    });
  },

  updateRecipe: function (id, recipeUpdate) {
    set((state) => {
      let newRecipes = state.recipes;
      newRecipes = newRecipes.map((recipe) =>
        recipe.id == id ? { ...recipe, ...recipeUpdate } : recipe
      );
      localStorage.setItem("recipes", JSON.stringify(newRecipes));
      return { recipes: newRecipes };
    });
  },
}));

export default useRecipeStore;