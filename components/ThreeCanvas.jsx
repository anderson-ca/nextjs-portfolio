import { useEffect } from 'react';
import styles from '../styles/ThreeCanvas.module.css';
import ThreeApp from "../threejs/ThreeApp";
import { useThree } from "../hooks/useThree";

const ThreeCanvas = () => {
    const canvas = useThree(ThreeApp);

    // useEffect(() => {
    //     console.log('hey this shit works', canvas);
    // }, []);

    // canvas.play;

    return (
        <div ref={canvas} className={styles.canvas}>
        </div>
    );
}

export default ThreeCanvas