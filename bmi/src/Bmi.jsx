import React, { useState } from "react";
import "./Bmi.css";

const Bmi = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const calculateBMI = () => {
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);

    if (isValidHeight && isValidWeight) {
      const heightinMeter = height / 100;
      const bmiValue = weight / (heightinMeter * heightinMeter);
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5) {
        setBmiStatus("Under Weight");
      } else if (bmiValue > 18.5 && bmiValue < 24.9) {
        setBmiStatus("Normal Weight");
      } else if (bmiValue > 25 && bmiValue < 29.9) {
        setBmiStatus("Over Weight");
      } else {
        setBmiStatus("Obese");
      }
      setErrorMessage("");
    } else {
      setBmi(null);
      setBmiStatus("");
      setErrorMessage(" Please enter valid numeric values for hright & Weight");
    }
  };
  const clearvalues = () => {
    setHeight("");
    setWeight("");
    setBmiStatus("");
    setBmi(null);
    setErrorMessage("");
  };
  return (
    <div className="bmi-container">
      <div className="bmiwrapper">
        <img
          src="https://img.freepik.com/premium-vector/transformation-male-body-slimming-dieting-before-after-playing-sports-fat-sporty-man-concept-healthy-proper-nutrition-cartoon-style_165429-938.jpg"
          alt="BMI"
          className="imageBMI"
        />
        <div className="bmidata">
          <h1>BMI Calculator</h1>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <div className="input-container">
            <label htmlFor="height">Height(cm)</label>
            <input
              type="text"
              value={height}
              onChange={(e) => {
                setHeight(e.target.value);
              }}
              id="height"
            />
          </div>
          <div className="input-container">
            <label htmlFor="Weight">Weight(kg)</label>
            <input
              type="text"
              value={weight}
              onChange={(e) => {
                setWeight(e.target.value);
              }}
              id="Weight"
            />
          </div>
          <div className="btns">
            <button className="calculate" onClick={calculateBMI}>
              Calculate BMI
            </button>
            <button className="clear" onClick={clearvalues}>
              Clear
            </button>
          </div>
          {bmi && (
            <div className="result">
              <p>Your BMI is :{bmi}</p>
              <p>
                Status:<span className="bmiresult">{bmiStatus}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bmi;
