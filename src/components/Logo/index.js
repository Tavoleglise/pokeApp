import styles from "./Logo.module.scss";
import { Link } from "wouter";

export default function Logo() {
  return (
    <Link to={"/"}>
      <img
        className={styles.logo}
        src="https://i.imgur.com/6bQVD4p.png"
        alt="Logo"
      />
    </Link>
  );
}
