import { useState } from "react";

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
  let logo = "Posting";
  let [listTitle, setListTitle] = useState([
    "first project",
    "second project",
    "third project",
    "fourth project",
  ]);
  let [timeLine, setTimeLine] = useState(["Jan 15th", "Jan 22nd", "Jan 23rd"]);
  let [likes, setLikes] = useState(0);

  const incrementLikes = () => {
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
      <div className="text-center">
        <h3 className="text-3xl font-bold text-gray-800">{logo}</h3>
      </div>
      <button
        onClick={sortList}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        sort alphabetically
      </button>
      <div className="list">
        <h4>
          {listTitle[0]}
          <span
            onClick={incrementLikes}
            className="cursor-pointer text-2xl hover:scale-200 transition-transform"
          >
            😍
          </span>
          <span className="text-lg text-pink-500">{likes}</span>
        </h4>
        <button
          onClick={changeTitle}
          className="mt-2 px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
        >
          change Title
        </button>
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

export default Posting;
