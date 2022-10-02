import Elipse from "../Ellipse/Ellipse";
import { IProppertyProps } from "./Property.props";
import styles from "./Property.module.css";

const Property = ({ value, text, ...props }: IProppertyProps): JSX.Element => {
  return (
    <div className={styles.container} {...props}>
      <Elipse>{value}</Elipse>
      <div className={styles.paragraph}>{text}</div>
    </div>
  );
};

export default Property;
