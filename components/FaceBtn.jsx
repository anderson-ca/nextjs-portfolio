import styles from '../styles/FaceBtn.module.css';
import { useAppContext } from '../context/state';
import { useState, useEffect, useContext } from 'react';
import Image from 'next/image';

const FaceBtn = ({ uglyBtnName }) => {

    const mycontext = useAppContext();
    const uglyBtnSetter = mycontext.handleSetUglyBtn;

    const [click, setClick] = useState(false);
    const [hover, setHover] = useState(false);

    useEffect(() => {
        console.log('👆 click - ', click)
        uglyBtnSetter(uglyBtnName, hover, click);


    }, [click]);

    useEffect(() => {
        console.log('🛸 hover - ', hover)
        uglyBtnSetter(uglyBtnName, hover, click);

    }, [hover]);

    const handleClick = () => setClick(!click);
    const handleHover = () => setHover(!hover);

    return (
        <div onMouseLeave={handleHover} onMouseEnter={handleHover} onMouseDown={handleClick} onMouseUp={handleClick} className={styles.face_btn_wrapper}>
            <div className={`${styles.btn} ${styles.slide_in_blurred_top}`}>
                <Image src='/angry2.svg' alt='faceless btn' height={`100%`} width={`100%`} />
            </div>
            <div className={click ? styles.btn : `${styles.btn} ${styles.pressed}`}>
                <Image src='/btn.svg' alt='faceless btn' height={`100%`} width={`100%`} />
            </div>
            <div className={click ? `${styles.btn} ${styles.pressed}` : styles.btn}>
                <Image src='/btn-pressed.svg' alt='faceless btn' height={`100%`} width={`100%`} />
            </div>
        </div>
    )
}

export default FaceBtn