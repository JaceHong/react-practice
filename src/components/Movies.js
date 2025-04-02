import { Routes, Route } from "react-router-dom";
import Homemovie from "../routes/Homemovie";
import Detail from "../routes/Detail";

function Movies() {
  return (
    <Routes>
      <Route path="/" element={<Homemovie />} />
      <Route path="/movie/:id" element={<Detail />} />
    </Routes>
  );
}

export default Movies;
