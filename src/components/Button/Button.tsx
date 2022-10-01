import styles from "./Button.module.css";
import cn from "classnames"
import { IButtonProps } from "./Button.props";
import { Link } from "react-router-dom";

const Button = ({ children, to, appearance, ...props }: IButtonProps): JSX.Element => {
  return (
    <Link to={to}>
      <button className={cn(styles.button, {
        [styles.orange] : appearance === "orange",
        [styles.green] : appearance === "green"
      })}>
        {children}
      </button>
    </Link>
  );
};

export default Button;
