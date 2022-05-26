import "./App.css";
import HomePage from "./page/Home";
import Navbar from "./component/Navbar";
import Favorite from "./page/Favorite";
import Details from "./page/Details";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/favorite" element={<Favorite />}></Route>
        <Route path="/:id" element={<Details />}></Route>
      </Routes>
    </div>
  );
}

export default App;
