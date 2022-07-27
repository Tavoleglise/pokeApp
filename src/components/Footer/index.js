import Logo from "../Logo";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Logo />
    </div>
  );
}
