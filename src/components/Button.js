import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="btn"
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelBlue",
};

Button.propsType = {
  color: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
