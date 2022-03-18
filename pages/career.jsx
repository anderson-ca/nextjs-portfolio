// import Link from 'next/link';
import Image from 'next/image';
import FaceBtn from '../components/FaceBtn';
import { useState, useEffect, useRef } from 'react';
import { useAppContext } from '../context/state';
import styles from '../styles/Career.module.css';




const PaperCareer = () => {
    const mycontext = useAppContext();
    const uglyRef = useRef({});
    const sharedBtnState = mycontext.uglyBtn;


    useEffect(() => {
        // console.log('🌟 career page state - ', ugly_text_wrapper);
        let rick = uglyRef.current['rick'];
        let linda = uglyRef.current['linda'];
        let steve = uglyRef.current['steve'];
        let ugly_text_wrapper = uglyRef.current['ugly-text'];



        if (sharedBtnState.name) {
            console.log('😄 active button -', sharedBtnState.name);
            console.log('🛸 hover - ', sharedBtnState.hover);
            console.log('👆 click - ', sharedBtnState.click);
            // ugly_text_wrapper.className = `${styles.ugly_text_wrapper} ${styles.show}`
            // rick.className = `${styles.fuck}`;
            // linda.className = `${styles.fuck}`;
            // steve.className = `${styles.fuck}`;
        } else {
            console.log('🚫 no active button...');
            // ugly_text_wrapper.className = `${styles.ugly_text_wrapper} ${styles.hide}`
            // rick.className = `${styles.hide}`;
            // linda.className = `${styles.hide}`;
            // steve.className = `${styles.hide}`;
        }


        switch (sharedBtnState.name) {
            case 'rick':
                console.log('rick case...');

                // rick.className = `${styles.text_wrapper} ${styles.show}`;
                // rick.children[0].className = `${styles.ugly_title}`;
                // rick.children[1].className = `${styles.hide}`;

                if (sharedBtnState.click) {
                    console.log('click...');
                    // rick.children[1].className = `${styles.show}`;
                }

                break;

            case 'steve':
                console.log('steve case...');

                // steve.className = `${styles.text_wrapper} ${styles.show} ${styles.btn_title}`;
                // steve.children[0].className = `${styles.ugly_title}`;
                // steve.children[1].className = `${styles.hide}`;

                if (sharedBtnState.click) {
                    console.log('click...');
                    // steve.children[1].className = `${styles.show}`;
                }

                break;

            case 'linda':
                console.log('linda case...');

                // linda.className = `${styles.text_wrapper} ${styles.show}`;
                // linda.children[0].className = `${styles.ugly_title}`;
                // linda.children[1].className = `${styles.hide}`;

                if (sharedBtnState.click) {
                    console.log('click...');
                    // linda.children[1].className = `${styles.show}`;
                }

                break;
        }
    }, [sharedBtnState])


    return (
        <div className={`${styles.career}`}>
            <ul className={`${styles.top_row}`}>
                <li className={`${styles.li} ${styles.steve}`}>
                    <FaceBtn uglyBtnName={'beth'} uglyBtnSize={75} uglyBtnHoverDeco={'drop.svg'} uglyBtnEyes={'kawai-eyes.svg'} />
                </li>
                <li className={`${styles.li} ${styles.steve}`}>
                    <Image src='/sad-btn.svg' alt='dead btn' height='116px' width='116px' />
                </li>
            </ul>
            <ul className={`${styles.top_row}`}>
                <li className={`${styles.li} ${styles.steve}`}>
                    <Image src='/run-btn.svg' alt='dead btn' height='200px' width='320px' />
                </li>
                <li className={`${styles.li} ${styles.steve}`}>
                    <Image src='/love-btn.svg' alt='dead btn' height='160px' width='160px' />
                </li>
                <li className={`${styles.li} ${styles.rick}`}>
                    <Image src='/cute-btn.svg' alt='dead btn' height='125px' width='125px' />
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
                <li className={`${styles.li} ${styles.b}`}>
                    <FaceBtn uglyBtnName={'rick'} uglyBtnSize={215} uglyBtnHoverDeco={'japanese-holy-shit.svg'} uglyBtnEyes={'sus-eyes.svg'} />
                </li>
            </ul>
            <ul className={`${styles.bottom_row}`}>
                <li className={`${styles.li} ${styles.c}`}>
                    <FaceBtn uglyBtnName={'lucinda'} uglyBtnSize={320} uglyBtnHoverDeco={'bakusweat.svg'} uglyBtnEyes={'nani-eyes.svg'} />
                </li>
                <li className={`${styles.li} ${styles.d}`}>
                    <Image src='/dead-btn.svg' alt='dead btn' height='225px' width='245px' />
                </li>
                <li className={`${styles.li} ${styles.f}`}>
                    <Image src='/run-1-btn.svg' alt='dead btn' height='300px' width='300px' />
                </li>
            </ul>
        </div>
    )
}

export default PaperCareer