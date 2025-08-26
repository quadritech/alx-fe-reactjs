import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import AdvancedSearch from "./components/AdvancedSearch";
import NotFound from "./components/NotFound";


function App() {
  return (
    <BrowserRouter >
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />}/>
        <Route path="/advanced" element={<AdvancedSearch/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;