import { TagProps } from "./Tag.props";
import styles from "./Tag.module.css";
import cn from "classnames";

export const Tag = ({
  children,
  gender,
  birthYear,
  className,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.green]: gender === "male",
        [styles.orange]: gender === "hermaphrodite",
        [styles.purple]: gender === "female",
        [styles.blue]: birthYear
      })}
      {...props}
    >
      {children}
    </div>
  );
};
