import { Link, useMatch } from "react-router-dom";
import { ICustomLink } from "./CustomLink.props";
import styles from "./CustomLink.module.css";
import cn from "classnames"

const CustomLink = ({ children, to }: ICustomLink): JSX.Element => {
  const match = useMatch(to);
  return (
    <Link to={to} className={cn(styles.link, {
        [styles.active] : !match
    })}>
      {children}
    </Link>
  );
};

export default CustomLink;
