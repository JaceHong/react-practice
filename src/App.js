import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Posting from "./components/Posting";
import TimeConvert from "./components/TimeConvert";
import EffectPractice from "./components/EffectPractice";
import Todo from "./components/Todo";
import Coins from "./components/Coins";
import Movies from "./components/Movies";

function App() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 py-6 px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          React Practice
        </h1>

        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <button
            onClick={() => setSelectedComponent("posting")}
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
              selectedComponent === "posting"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-blue-50"
            } border border-blue-600 shadow-sm`}
          >
            Show Posting
          </button>

          <button
            onClick={() => setSelectedComponent("timeconvert")}
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
              selectedComponent === "timeconvert"
                ? "bg-green-600 text-white"
                : "bg-white text-gray-700 hover:bg-green-50"
            } border border-green-600 shadow-sm`}
          >
            Show TimeConvert
          </button>

          <button
            onClick={() => setSelectedComponent("effectPract")}
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
              selectedComponent === "effectPract"
                ? "bg-purple-600 text-white"
                : "bg-white text-gray-700 hover:bg-purple-50"
            } border border-purple-600 shadow-sm`}
          >
            Effect Practice
          </button>

          <button
            onClick={() => setSelectedComponent("toDo")}
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
              selectedComponent === "toDo"
                ? "bg-pink-600 text-white"
                : "bg-white text-gray-700 hover:bg-pink-50"
            } border border-pink-600 shadow-sm`}
          >
            Todo
          </button>

          <button
            onClick={() => setSelectedComponent("coins")}
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
              selectedComponent === "coins"
                ? "bg-yellow-600 text-white"
                : "bg-white text-gray-700 hover:bg-yellow-50"
            } border border-yellow-600 shadow-sm`}
          >
            Coins
          </button>

          <button
            onClick={() => setSelectedComponent("movies")}
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
              selectedComponent === "movies"
                ? "bg-red-600 text-white"
                : "bg-white text-gray-700 hover:bg-red-50"
            } border border-red-600 shadow-sm`}
          >
            Movies
          </button>

          <button
            onClick={() => setSelectedComponent(null)}
            className="px-4 py-2 rounded-lg bg-gray-600 text-white hover:bg-gray-700 transition-colors duration-200 shadow-sm"
          >
            Hide All
          </button>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
          {selectedComponent === "posting" && <Posting />}
          {selectedComponent === "timeconvert" && <TimeConvert />}
          {selectedComponent === "effectPract" && <EffectPractice />}
          {selectedComponent === "toDo" && <Todo />}
          {selectedComponent === "coins" && <Coins />}
          {selectedComponent === "movies" && <Movies />}
        </div>
      </div>
    </Router>
  );
}

export default App;
