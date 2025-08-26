import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import { Routes, Route, BrowserRouter  } from "react-router-dom";
import Navbar from "./components/NavLink";
import Footer from "./components/Footer";
import AllRecipe from "./components/AllRecipe";
import "./index.css";
import HomePage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/list" element={<RecipeList />} />
            <Route path="/details" element={<RecipeDetails />} />
            <Route path="/add" element={<AddRecipeForm />} />
            <Route path="/all" element={<AllRecipe />} />
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;