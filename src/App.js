import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Navbar from "./Navbar/Navbar";
import './Null.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Navbar />}>
          <Route element={<HomePage />} path='' />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
