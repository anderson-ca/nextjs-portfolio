import styles from '../styles/Home.module.css'
import ThreeCanvas from "../components/ThreeCanvas";

const Home = () => {

  return (
    <div className={styles.hero}>
      <div className={`${styles.text_wrapper}`}>
        <h2 className={`${styles.hero_title}`}>Hi, I'm Anderson</h2>
        <p className={`${styles.hero_subtitle}`}>I'm a inventive software developer who loves creating delightful experiences on the web🦴</p>
      </div>
      <ThreeCanvas />
    </div>
  );
}

export default Home;