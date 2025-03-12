import css from "./Button.module.css";

const Button = ({ selected = false, type = "button", children, ...otherProps }) => {
  return (
    <button
      className={`${css.btn} ${selected ? css.isSelected : ""}`}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
