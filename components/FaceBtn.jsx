import styles from '../styles/FaceBtn.module.css';
import { useAppContext } from '../context/state';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const FaceBtn = ({ uglyBtnName, uglyBtnSize, uglyBtnHoverDeco, uglyBtnEyes }) => {

    const mycontext = useAppContext();
    const eyesRef = useRef(null);
    const uglyBtnSetter = mycontext.handleSetUglyBtn;

    const [click, setClick] = useState(false);
    const [hover, setHover] = useState(false);
    const [randNumber, setRandNumber] = useState(((Math.random() * 2) + 1).toFixed(1));


    useEffect(() => {
        console.log('start wink...', randNumber);
        let eyes = eyesRef.current;
        eyes.style.setProperty('--animation-time', randNumber +'s');
    }, []);

    useEffect(() => {
        // console.log('👆 click - ', click)
        uglyBtnSetter(uglyBtnName, hover, click);


    }, [click]);

    useEffect(() => {
        // console.log('🛸 hover - ', hover)
        uglyBtnSetter(uglyBtnName, hover, click);

    }, [hover]);

    // clear ugly button state
    useEffect(() => {
        if (!hover) {
            uglyBtnSetter(null, hover, click)
            // console.log('🧼 scrub the state...');
        }
    }, [hover, click])

    const handleClick = () => setClick(!click);
    const handleHover = () => setHover(!hover);

    return (
        <div onMouseLeave={handleHover} onMouseEnter={handleHover} onMouseDown={handleClick} onMouseUp={handleClick} className={styles.face_btn_wrapper}>
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