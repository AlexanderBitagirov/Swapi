import styles from "./Card.module.css";
import { ICardProps } from "./Card.props";
import cn from "classnames"

const Card = ({ children, className, ...props }: ICardProps): JSX.Element => {
  return (
    <div className={cn(styles.card, className)} {...props}>
      {children}
    </div>
  );
};

export default Card;
