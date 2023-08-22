import PropTypes from "prop-types";
import "./index.css";

export default function Temperature(props) {
  const { min, max, value, onChangeValue, step } = props; //destructuring assignment to extract properties 

  const handleChange = (event) => {
    onChangeValue(event);  //calls onchangeValue passed as a prop with the event as an argument
  };

  return (
    <>
      <h1> Temperature Colour Display</h1>
      <div className="temperature-container">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
          step={step}
          className="range-slider"
        />
        <div className="value-display">{`${value} °C`}</div>
      </div>
    </>
  );
}

Temperature.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
};
