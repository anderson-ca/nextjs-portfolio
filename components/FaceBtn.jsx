import styles from '../styles/FaceBtn.module.css';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const FaceBtn = () => {

    const [click, setClick] = useState(false);


    useEffect(() => {
        console.log('my hook is working 👌')
        console.log('is btn pressed? ', click);
        let element = document.getElementById('#inactive');
        console.log('my element -> ', element);
    }, [click]);

    const handleClick = () => setClick(!click);


    return (
        <div onMouseDown={handleClick} onMouseUp={handleClick} className={click ? `${styles.face_btn_wrapper} ${styles.pressed}` : styles.face_btn_wrapper}>
            <div className={`${styles.btn} ${styles.angry} ${styles.slide_in_blurred_top}`}>
                <Image src='/angry2.svg' alt='faceless btn' height={'250px'} width={'250px'} />
            </div>
            <div className={`${styles.btn} ${styles.inactive}`}>
                <Image src='/btn.svg' alt='faceless btn' height={'250px'} width={'250px'} />
            </div>
            <div className={`${styles.btn} ${styles.active}`}>
                <Image src='/btn-pressed.svg' alt='faceless btn' height={'250px'} width={'250px'} />
            </div>
        </div>
    )
}

export default FaceBtn