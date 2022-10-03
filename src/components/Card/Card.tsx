import styles from "./Card.module.css";
import { ICardProps } from "./Card.props";
import cn from "classnames";

const Card = ({
  children,
  color,
  size,
  clickable,
  className,
  ...props
}: ICardProps): JSX.Element => {
  return (
    <div
      className={cn(styles.card, className, {
        [styles.s]: size === "s",
        [styles.m]: size === "m",
        [styles.l]: size === "l",
        [styles.white]: color === "white",
        [styles.gray]: color === "gray",
        [styles.clickable]: clickable === true
      })}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
