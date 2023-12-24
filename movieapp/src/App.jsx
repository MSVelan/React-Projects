import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from "./Home";
import MovieInfoDisplay from "./components/MovieInfoDisplay";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="movie/:id" element={<MovieInfoDisplay/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
