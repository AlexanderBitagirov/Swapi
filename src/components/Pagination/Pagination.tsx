import styles from "./Pagination.module.css";
import ArrowIcon from "./arrow.svg";
import cn from "classnames";
import { IPaginationProps } from "./Pagination.props";
import { fetchCharacters } from "../../store/reducers/ActionCreators";
import { useAppDispatch } from "../../hooks/redux";

const Pagination = ({
  previous,
  next,
  className,
  ...props
}: IPaginationProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const getData = (url: string) => {
    dispatch(fetchCharacters(url));
  };

  return (
    <div className={cn(styles.pagination, className)} {...props}>
      <button
        onClick={() => previous && getData(previous)}
        className={cn(styles.button, {
          [styles.disable]: !previous,
          [styles.able]: previous
        })}
      >
        <ArrowIcon className={styles.previous} />
      </button>
      <button
        onClick={() => next && getData(next)}
        className={cn(styles.button, {
          [styles.disable]: !next,
          [styles.able]: next
        })}
      >
        <ArrowIcon />
      </button>
    </div>
  );
};

export default Pagination;
