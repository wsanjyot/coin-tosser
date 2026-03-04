import { useState } from 'react';
import './App.css';


function App() {
  const coinOptions = ['Heads', 'Tails'];
  const [result, setResult] = useState(null);
  const [tossCount, setTossCount] = useState(0);
  const [headsCount, setHeadsCount] = useState(0);
  const [tailsCount, setTailsCount] = useState(0);
  const [rotation, setRotation] = useState(0);

  function generateRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  function handleToss() {
    const selectedSide = generateRandomElement(coinOptions);
   

    const randomSpin = Math.floor(Math.random() * 360) + 1080; // Random spin between 1080 and 1440 degrees
    const spinAmount = randomSpin* 360;

    const finalFace = selectedSide === "Heads" ? "0" : "180";
    const newRotation = spinAmount + finalFace;

    setRotation(newRotation);
    


  setTimeout(() => {
    setResult(selectedSide);

    if (selectedSide === "Heads") {
      setHeadsCount(prev => prev + 1);
    } else {
      setTailsCount(prev => prev + 1);
    }

    setTossCount(prev => prev + 1);
  }, 800);


  }

  const headsPercentage = tossCount === 0 ? 0 : ((headsCount / tossCount) * 100).toFixed(2);
  const tailsPercentage = tossCount === 0 ? 0 : ((tailsCount / tossCount) * 100).toFixed(2);

  return (
    <div className="container">

      <h1 className="title">Coin Tosser</h1>

      <div className="coin-section">

        {/* Result Above Coin */}
        {result && (
          <div
            className={`result-text ${result === "Heads" ? "heads" : "tails"
              }`}
          >
            {result}
          </div>
        )}

        {/* Coin */}
        <div className="coin-wrapper" onClick={handleToss}>
          <div
            className="coin"
            style={{ transform: `rotateY(${rotation}deg)` }}
          >
            <div className="side front">H</div>
            <div className="side back">T</div>
          </div>
        </div>

      </div>

      {/* Stats Section */}
      <div className="stats">
        <p>Total: {tossCount}</p>
        <p>Heads: {headsCount} ({headsPercentage}%)</p>
        <p>Tails: {tailsCount} ({tailsPercentage}%)</p>
      </div>

    </div>
  )
};

export default App;