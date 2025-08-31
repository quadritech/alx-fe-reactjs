import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <Router>
      <nav className="bg-blue-600 text-white p-4 flex justify-between">
        <Link to="/" className="font-bold text-xl">
          🍴 Recipe Sharing
        </Link>
        <Link
          to="/add"
          className="bg-white text-blue-600 px-3 py-1 rounded-lg font-medium hover:bg-gray-100"
        >
          ➕ Add Recipe
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/add" element={<AddRecipeForm />} />
      </Routes>
    </Router>
  );
}

export default App;