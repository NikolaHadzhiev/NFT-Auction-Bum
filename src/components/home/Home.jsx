import styles from "./Home.module.scss";
import classNames from "classnames";
import Header from "../header/Header.jsx"

export default function HomeComponent() {
  return (
    <div className={classNames(styles.nav)}>
      <div className={classNames(styles.wrapper)}>
        <Header />
      </div>
    </div>
  );
}
