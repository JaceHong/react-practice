import { useState, useEffect } from "react";
import meowImage from "../img/meow.png";

function EffectPractice() {
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("Search for", keyword);
  }, [keyword]);

  const [showImg, setShowImg] = useState(false);
  const CuteImg = () => {
    useEffect(() => {
      console.log(" hi :) ");
      return () => console.log("bye :(");
    });
    return (
      <div>
        <img src={meowImage} alt="cat" />
      </div>
    );
  };

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="see console"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <hr />
      <div>
        {showImg ? <CuteImg /> : null}
        <button
          onClick={() => setShowImg((prev) => !prev)}
          className="px-4 py-2 bg-purple-400 text-white rounded-lg hover:bg-pink-600 transition-colors"
        >
          {showImg ? "hide" : "show"}
        </button>
      </div>
    </div>
  );
}

export default EffectPractice;
