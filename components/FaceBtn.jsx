import styles from '../styles/FaceBtn.module.css';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const FaceBtn = ({ btnSize, btnDecorationSize }) => {

    const [click, setClick] = useState(false);


    useEffect(() => {
        console.log('my hook is working 👌')
        console.log('is btn pressed? ', click);

    }, [click]);

    const handleClick = () => setClick(!click);


    return (
        <div onMouseDown={handleClick} onMouseUp={handleClick} className={styles.face_btn_wrapper}>
            <div className={`${styles.btn} ${styles.slide_in_blurred_top}`}>
                <Image src='/angry2.svg' alt='faceless btn' height={`${btnDecorationSize}`} width={`${btnDecorationSize}`} />
            </div>
            <div className={click ? styles.btn : `${styles.btn} ${styles.pressed}`}>
                <Image src='/btn.svg' alt='faceless btn' height={`${btnSize}`} width={`${btnSize}`} />
            </div>
            <div className={click ? `${styles.btn} ${styles.pressed}` : styles.btn}>
                <Image src='/btn-pressed.svg' alt='faceless btn' height={`${btnSize}`} width={`${btnSize}`} />
            </div>
        </div>
    )
}

export default FaceBtn