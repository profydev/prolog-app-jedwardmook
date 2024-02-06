import Link from "next/link";
import { Routes } from "@config/routes";
import styles from "./index.module.scss";
import { useState } from "react";
import { Button } from "@features/ui";

const IssuesPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Implement the modal UI.
  // The "Cancel" button should close the modal and the "Open Email App" should open the user's email client.
  // The modal should open when the user clicks the contact button.
  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={isOpen ? styles.blurDiv : ""}>
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

        <button className={styles.contactButton} onClick={handleModal}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/message.svg" alt="Contact" />
        </button>
      </div>
      {isOpen && (
        <div className={styles.seeThroughDiv}>
          <dialog className={styles.supportModal}>
            <img src="/icons/mail.svg" alt="mail icon" />
            <p className={styles.modalHeader}>Contact Us Via Email</p>
            <p className={styles.modalText}>
              Any questions? Send us an email at prolog@profy.dev. We usually
              answer within 24 hours.
            </p>
            <div className={styles.buttonsContainer}>
              <Button
                size="openEmailApp"
                color="gray"
                onClick={handleModal}
                label="Cancel"
              />
              <a href="mailto:support@prolog-app.com?subject=Support%20Request:">
                <Button
                  size="openEmailApp"
                  color="primary"
                  onClick={handleModal}
                  label="Open Email App"
                />
              </a>
            </div>
          </dialog>
        </div>
      )}
    </div>
  );
};

export default IssuesPage;
