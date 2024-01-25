import Link from "next/link";
import { Routes } from "@config/routes";
import styles from "./index.module.scss";

const IssuesPage = () => {
  // Implement the header based on the designs.
  // The navigation links should point to /, /products, /documentation, and /pricing.
  // The "Open Dashboard" link already exists but needs to be adjusted to match the designs.

  return (
    <div>
      <header className={styles.header}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/logo-large.svg" alt="Prolog logo" />
        <nav className={styles.nav}>
          <Link className={styles.navLink} href={Routes.home}>
            Home
          </Link>
          <Link className={styles.navLink} href={Routes.products}>
            Products
          </Link>
          <Link className={styles.navLink} href={Routes.documentation}>
            Documentation
          </Link>
          <Link className={styles.navLink} href={Routes.pricing}>
            Pricing
          </Link>
        </nav>
        <a className={styles.dashboardButton} href={Routes.projects}>
          Open Dashboard
        </a>
      </header>
      <button
        className={styles.contactButton}
        onClick={() =>
          alert(
            "Implement this in Challenge 2 - Modal:\n\nhttps://profy.dev/rjs-challenge-modal",
          )
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </button>
    </div>
  );
};

export default IssuesPage;
