import styles from '../styles/ThreeCanvas.module.css';
import ThreeApp from "../threejs/ThreeApp";
import { useLayoutEffect } from "react";
import { useThree } from "../hooks/useThree";

const ThreeCanvas = () => {
    const canvas = useThree(ThreeApp);

    return (
        <>
            <div ref={canvas} style={{ height: "100vh" }} />
        </>
    )
}

export default ThreeCanvas