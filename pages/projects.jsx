// import Link from 'next/link';
import Image from 'next/image';
import FaceBtn from '../components/FaceBtn';
import { useState, useEffect, useRef } from 'react';
import { useAppContext } from '../context/state';
import styles from '../styles/Projects.module.css';




const Projects = () => {
    const mycontext = useAppContext();
    const modalRef = useRef(null);
    const sharedBtnState = mycontext.uglyBtn;
    const sharedModalState = mycontext.uglyModal;
    const [isModalActive, setIsModalActive] = useState(null);

    return (
        <div className={`${styles.projects}`}>
            <ul className={`${styles.top_row}`}>
                <li className={`${styles.li} ${styles.a}`}>
                    <FaceBtn uglyBtnName={'beth'} uglyBtnSize={75} uglyBtnHoverDeco={'drop.svg'} uglyBtnEyes={'kawai-eyes.svg'} />
                </li>
                <li className={`${styles.li} ${styles.b}`}>
                    <Image src='/sad-btn.svg' alt='dead btn' height='116px' width='116px' />
                </li>
                <li className={`${styles.li} ${styles.c}`}>
                    <Image src='/run-1-btn.svg' alt='dead btn' height='150px' width='200px' />
                </li>
            </ul>
            <ul className={`${styles.top_row}`}>
                <li className={`${styles.li} ${styles.d}`}>
                    <Image src='/run-btn.svg' alt='dead btn' height='200px' width='320px' />
                </li>
                <li className={`${styles.li} ${styles.e}`}>
                    <Image src='/love-btn.svg' alt='dead btn' height='160px' width='160px' />
                </li>
                <li className={`${styles.li} ${styles.f}`}>
                    <Image src='/cute-btn.svg' alt='dead btn' height='125px' width='125px' />
                </li>
                <li className={`${styles.li} ${styles.g}`}>
                    <FaceBtn uglyBtnName={'rick'} uglyBtnSize={310} uglyBtnHoverDeco={'japanese-holy-shit.svg'} uglyBtnEyes={'sus-eyes.svg'} />
                </li>
            </ul>
            <ul className={`${styles.mid_row}`}>
                <li className={`${styles.li} ${styles.linda}`}>
                    <Image src='/runleft-1-btn.svg' alt='dead btn' height='150px' width='190px' />
                </li>
                <li className={`${styles.li} ${styles.linda}`}>
                    <FaceBtn uglyBtnName={'lionel'} uglyBtnSize={174} uglyBtnHoverDeco={'holy-shit3.svg'} uglyBtnEyes={'lazy-eyes.svg'} />
                </li>
                <li className={`${styles.li} ${styles.a}`}>
                    <Image src='/cry-btn.svg' alt='dead btn' height='125px' width='145px' />
                </li>
            </ul>
            <ul className={`${styles.bottom_row}`}>
                <li className={`${styles.li} ${styles.c}`}>
                    <FaceBtn uglyBtnName={'lucinda'} uglyBtnSize={280} uglyBtnHoverDeco={'bakusweat.svg'} uglyBtnEyes={'nani-eyes.svg'} />
                </li>
                <li className={`${styles.li} ${styles.d}`}>
                    <Image src='/dead-btn.svg' alt='dead btn' height='225px' width='245px' />
                </li>
            </ul>
        </div>
    )
}

export default Projects