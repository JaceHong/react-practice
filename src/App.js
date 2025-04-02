/* eslint-disable*/
// eslint-disable-next-line no-unused-vars

import "./App.css";
import { useState, useEffect, useSyncExternalStore } from "react";
import Movie from "./components/Movie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homemovie from "./routes/Homemovie";
import Detail from "./routes/Detail";
import meowImage from "./img/meow.png";

function Posting() {
  console.log("posting was rendered");
  const Modal = () => {
    return (
      <div className="modal">
        <h4>mini_title</h4>
        <p>contents</p>
        <p>date</p>
      </div>
    );
  };
  let logo = "React Practice"; //hard coding for the logo which barely changed
  let [listTitle, setListTitle] = useState([
    "first project",
    "second project",
    "third project",
    "fourth project",
  ]);
  let [timeLine, setTimeLine] = useState(["Jan 15th", "Jan 22nd", "Jan 23rd"]);
  let [likes, setLikes] = useState(0);
  const incrementLikes = () => {
    //setLikes(likes + 1); same below
    setLikes((current) => current + 1);
    console.log(likes);
  };
  const sortList = () => {
    setListTitle([...listTitle].sort());
  };
  const changeTitle = () => {
    setListTitle((prevTitles) => {
      const newTitles = [...prevTitles];
      newTitles[0] = "first new project";
      return newTitles;
    });
  };
  return (
    <div>
      <div className="title-test">
        <h3 style={{ fontSize: "33px" }}>{logo}</h3>
      </div>

      <button onClick={sortList}>sort alphabetically</button>
      <div className="list">
        <h4>
          {listTitle[0]}
          <span
            onClick={incrementLikes}
            style={{ fontSize: "30px", cursor: "pointer" }}
          >
            😍
          </span>
          <span style={{ fontSize: "22px" }}>{likes}</span>
        </h4>
        <button onClick={changeTitle}>change Title</button>
        <p>{timeLine[0]}</p>
      </div>

      <div className="list">
        <h4>{listTitle[1]}</h4>
        <p>{timeLine[1]}</p>
      </div>

      <div className="list">
        <h4>{listTitle[2]}</h4>
        <p>{timeLine[2]}</p>
      </div>

      <div className="list">
        <h4>{listTitle[3]}</h4>
        <p>{timeLine[3]}</p>
      </div>
      <Modal />
    </div>
  );
}
function TimeConvert() {
  console.log("TimeConvert was rendered");
  const [time, setTime] = useState(0);
  const onChange = (event) => {
    setTime(event.target.value);
    console.log(time);
  };
  const [flipped, setFlipped] = useState(true);
  const reset = () => {
    setTime(0);
  };
  const onFlip = () => {
    setFlipped((current) => !current);
    reset();
  };

  return (
    <div>
      <h5 className="h55"> Convert mins to hours</h5>
      <div className="flip">
        <button onClick={onFlip}>
          {!flipped ? "mins to hours?" : "hours to mins?"}
        </button>
      </div>
      <div>
        <label htmlFor="minutes">Minutes:</label>
        <input
          onChange={onChange}
          value={flipped ? time : time * 60}
          id="minute"
          placeholder="Minutes"
          type="number"
          disabled={!flipped}
        />
      </div>

      <div>
        <label htmlFor="hours">Hours:</label>
        <input
          onChange={onChange}
          value={flipped ? Math.round(time / 60) : time}
          id="hours"
          placeholder="Hours"
          type="number"
          disabled={flipped}
        />
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
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
      />
      <hr />
      <div>
        {showImg ? <CuteImg /> : null}
        <button onClick={() => setShowImg((prev) => !prev)}>
          {showImg ? "hide" : "show"}
        </button>
      </div>
    </div>
  );
}
const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodos((currentArr) => [todo, ...currentArr]);
    setTodo("");
  };
  return (
    <div>
      <h2>To Do ({todos.length})</h2>
      <form onSubmit={onSubmit}>
        <input
          onChange={(event) => setTodo(event.target.value)}
          value={todo}
          type="text"
          placeholder="Write ur Todo"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      {todos.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </div>
  );
};
const Coins = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Coins! ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coins.map((coin) => (
          <li>
            {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
          </li>
        ))}
      </ul>
    </div>
  );
};
const Movies = () => {
  return (
    <Routes>
      <Route path="/" element={<Homemovie />} />
      <Route path="/movie/:id" element={<Detail />} />
    </Routes>
  );
};

function App() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  return (
    <Router>
      <div>
        <h1>React Practice</h1>

        {/* 버튼 클릭 시 해당 컴포넌트 선택 */}
        <button onClick={() => setSelectedComponent("posting")}>
          Show Posting
        </button>
        <button onClick={() => setSelectedComponent("timeconvert")}>
          Show TimeConvert
        </button>
        <button onClick={() => setSelectedComponent("effectPract")}>
          Effect Practice
        </button>
        <button onClick={() => setSelectedComponent("toDo")}>Todo</button>
        <button onClick={() => setSelectedComponent("coins")}>Coins</button>
        <button onClick={() => setSelectedComponent("movies")}>Movies</button>

        <button onClick={() => setSelectedComponent(null)}>Hide All</button>

        {/* 선택된 컴포넌트만 표시 */}
        {selectedComponent === "posting" && <Posting />}
        {selectedComponent === "timeconvert" && <TimeConvert />}
        {selectedComponent === "effectPract" && <EffectPractice />}
        {selectedComponent === "toDo" && <Todo />}
        {selectedComponent === "coins" && <Coins />}

        {selectedComponent === "movies" && <Movies />}
      </div>
    </Router>
  );
}

export default App;
