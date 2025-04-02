import { useState } from "react";

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
    <div className="max-w-md mx-auto space-y-6">
      <h5 className="text-2xl font-bold text-center text-gray-800">
        Convert mins to hours
      </h5>

      <div className="flex justify-center">
        <button
          onClick={onFlip}
          className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
        >
          {!flipped ? "mins to hours?" : "hours to mins?"}
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="minutes" className="text-gray-700 mb-1">
            Minutes:
          </label>
          <input
            onChange={onChange}
            value={flipped ? time : time * 60}
            id="minute"
            placeholder="Minutes"
            type="number"
            disabled={!flipped}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:bg-gray-100"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="hours" className="text-gray-700 mb-1">
            Hours:
          </label>
          <input
            onChange={onChange}
            value={flipped ? Math.round(time / 60) : time}
            id="hours"
            placeholder="Hours"
            type="number"
            disabled={flipped}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:bg-gray-100"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={reset}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default TimeConvert;
