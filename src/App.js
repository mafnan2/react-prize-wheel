import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";

const data = [
  { option: "0", style: { backgroundColor: "green", textColor: "white" } },
  { option: "1", style: { backgroundColor: "red", textColor: "white" } },
  { option: "3", style: { backgroundColor: "blue", textColor: "white" } },
  { option: "4", style: { backgroundColor: "pink", textColor: "white" } },
  { option: "5", style: { backgroundColor: "orrange", textColor: "white" } },
  { option: "6", style: { backgroundColor: "gray", textColor: "white" } },
  { option: "7", style: { backgroundColor: "black", textColor: "white" } },
  { option: "8", style: { backgroundColor: "red", textColor: "white" } },
];

function App() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);

    console.log(prizeNumber);
  };
  const onStopSpinning = () => {
    setMustSpin(false);
    alert(data[prizeNumber].option);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => {
          setMustSpin(false);
          onStopSpinning();
        }}
      />
      <button className="px-4 py-2 bg-blue-500 text-white mt-2 rounded-md" onClick={handleSpinClick}>SPIN</button>
    </div>
  );
}

export default App;
