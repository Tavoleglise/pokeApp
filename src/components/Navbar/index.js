import styles from "./Navbar.module.scss";
import Logo from "../Logo";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div>
        <Logo />
      </div>
    </div>
  );
}
