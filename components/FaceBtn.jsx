import styles from '../styles/FaceBtn.module.css';
import { useAppContext } from '../context/state';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const FaceBtn = ({ uglyBtnName, uglyBtnSize, uglyBtnHoverDeco, uglyBtnEyes }) => {
    const eyesRef = useRef(null);
    const btnRef = useRef(null);
    const mycontext = useAppContext();
    const uglyBtnSetter = mycontext.handleSetUglyBtn;
    const uglyModalSetter = mycontext.handleSetUglyModal;

    const [hover, setHover] = useState(null);
    const [click, setClick] = useState(null);
    const [randNumber, setRandNumber] = useState(((Math.random() * 2) + 1).toFixed(1));


    // -- propagate values to shared application context.
    useEffect(() => {
        let eyes = eyesRef.current;
        eyes.style.setProperty('--animation-time', randNumber + 's');

    }, []);

    useEffect(() => {
        if (hover === null) {
            console.log('hover is null');
        } else {
            console.log('btn position ----> ', btnRef.current.offsetTop);
            console.log('btn position ----> ', btnRef.current.offsetLeft);



            uglyBtnSetter(uglyBtnName, hover, click, btnRef.current.offsetLeft, btnRef.current.offsetTop);
        }

    }, [hover])

    useEffect(() => {
        if (click === null) {
            console.log('click is null');
        } else {
            uglyBtnSetter(uglyBtnName, hover, click)
        }

        if (click) {
            btnRef.current.className = `${styles.face_btn_wrapper} ${styles.active_btn}`;
        } else if (!click) {
            btnRef.current.className = `${styles.face_btn_wrapper}`;
        }

    }, [click]);

    // -- event handlers
    const handleMouseEnter = () => {
        setHover(true);
    };
    const handleMouseLeave = () => {
        setHover(false)
    }
    const handleClick = () => {
        setClick(!click);
    };

    return (
        <div ref={btnRef} onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={styles.face_btn_wrapper}>
            <div className={hover ? `${styles.btn_hover} ${styles.slide_in_blurred_top}` : styles.btn_hover}>
                <Image src={`/${uglyBtnHoverDeco}`} alt='faceless btn' height={`${uglyBtnSize / 3}px`} width={`${uglyBtnSize / 3}px`} />
            </div>
            {
                click ? (
                    <div className={`${styles.face_btn}`}>
                        <div className={styles.btn}>
                            <Image src='/btn-pressed.svg' alt='faceless btn' height={`${uglyBtnSize}px`} width={`${uglyBtnSize}px`} />
                        </div>
                    </div>) : (<div className={`${styles.face_btn}`}>
                        <div ref={eyesRef} className={`${styles.btn_eyes} ${styles.blink}`}>
                            <Image src={`/${uglyBtnEyes}`} alt='faceless btn' height={`${uglyBtnSize / 2}px`} width={`${uglyBtnSize / 2}px`} />
                        </div>
                        <div className={styles.btn}>
                            <Image src='/btn.svg' alt='faceless btn' height={`${uglyBtnSize}px`} width={`${uglyBtnSize}px`} />
                        </div>
                    </div>)
            }
        </div>
    )
}

export default FaceBtn