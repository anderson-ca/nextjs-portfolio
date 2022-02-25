import styles from '../styles/Home.module.css'
import ThreeCanvas from "../components/ThreeCanvas";

const Home = () => {

  return (
    <div className={styles.home}>
      <div className={`${styles.text_wrapper}`}>
        <h2>Hello my name is Anderson</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ullam vitae cum, officia id?</p>
      </div>
      <ThreeCanvas />
    </div>
  );
}

export default Home;