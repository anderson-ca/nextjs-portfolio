import styles from '../styles/ThreeCanvas.module.css';
import ThreeApp from "../threejs/ThreeApp";
import { useThree } from "../hooks/useThree";

const ThreeCanvas = () => {
    const canvas = useThree(ThreeApp);

    return (
        <div ref={canvas} className={styles.canvas_wrapper}>
        </div>
    );
}

export default ThreeCanvas