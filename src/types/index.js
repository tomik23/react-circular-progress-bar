import PropTypes from "prop-types";

const { bool, number, string, array } = PropTypes;

const CircleType = {
  percent: number.isRequired,
  colorSlice: string,
  colorCircle: string,
  round: bool,
  opacity: number,
  number: bool,
  size: number,
  speed: number,
  cut: number,
  rotation: number,
  unit: string,
  textPosition: string,
  fontSize: string,
  fill: string,
  fontWeight: number,
  stroke: number,
  strokeBottom: number,
  strokeDasharray: string,
  fontColor: string,
  linearGradient: array
};

const CircleDefaultProps = {
  id: 0,
  colorSlice: "#00a1ff",
  round: false,
  number: true,
  stroke: 10,
  opacity: 10,
  size: 200,
  speed: 1000,
  cut: 0,
  rotation: -90,
  unit: "%",
  textPosition: ".35em",
  fontSize: "1.6rem",
  fontColor: "#000",
  fill: "none",
  fontWeight: 400
};

export { CircleType, CircleDefaultProps };
