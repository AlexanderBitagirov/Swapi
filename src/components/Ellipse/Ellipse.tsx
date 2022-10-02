import { IElipseProps } from "./Elipse.props"
import styles from "./Ellipse.module.css"

const Elipse = ({children, ...props}:IElipseProps):JSX.Element => {
    return (
        <div className={styles.elipse} {...props}>
            {children}
        </div>
    )
}

export default Elipse