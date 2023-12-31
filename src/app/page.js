import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/navbar';

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <header className={styles.header}>
        <div>
          <h1>
            <span>
              Hello<span className={styles.yellowText}>.</span>
            </span>
            <br />
            <span>
              <span>I am</span>
            </span>
            <br />
            <span>Josh Carlson</span>
          </h1>
        </div>
      </header>
      <section className={styles.infoSection}>
        <img
          src="/Imagen-para-el-website.png"
          alt="Imagen"
          className={styles.image}
        />
        <div className={styles.infoContainer}>
          <span className={styles.title + " " + styles.yellowText}>Josh</span>
          <br />
          <span className={styles.title}>Carlson</span>

          <div className={styles.list}>
            <ul>
              <li>
                <span className={styles.grayText}>Age: </span> 27
              </li>
              <li>
                <span className={styles.grayText}>Nationality: </span> German
              </li>
              <li>
                <span className={styles.grayText}>Skill set: </span>Project Management and Financal Performance
              </li>
              <li>
                <span className={styles.grayText}>Languages:</span> English, German
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
