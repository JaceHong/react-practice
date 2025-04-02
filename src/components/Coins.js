import { useState, useEffect } from "react";

function Coins() {
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
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-center text-gray-800">
        Coins! ({coins.length})
      </h1>

      {loading ? (
        <div className="text-center">
          <strong className="text-blue-600">Loading...</strong>
        </div>
      ) : null}

      <ul className="space-y-2">
        {coins.map((coin) => (
          <li
            key={coin.id}
            className="p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <span className="font-medium">{coin.name}</span>
            <span className="text-gray-500"> ({coin.symbol})</span>
            <span className="ml-2 text-green-600">
              ${coin.quotes.USD.price.toFixed(2)} USD
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Coins;
