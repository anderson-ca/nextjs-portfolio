// import Link from 'next/link';
import Image from 'next/image';
import FaceBtn from '../components/FaceBtn';
import { useState, useEffect, useRef } from 'react';
import { useAppContext } from '../context/state';
import styles from '../styles/paperCareer.module.css';




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
                    <FaceBtn uglyBtnName={'steve'} uglyBtnSize={166} />
                </li>
                <li className={`${styles.li} ${styles.rick}`}>
                    <Image src='/run-btn.svg' alt='dead btn' height='200px' width='250px' />
                </li>
            </ul>
            <ul className={`${styles.mid_row}`}>
                <li className={`${styles.li} ${styles.linda}`}>
                    <FaceBtn uglyBtnName={'linda'} uglyBtnSize={174} />
                </li>
                <li className={`${styles.li} ${styles.a}`}>
                    <Image src='/cry-btn.svg' alt='dead btn' height='125px' width='145px' />
                </li>
                <li className={`${styles.li} ${styles.b}`}>
                    <FaceBtn uglyBtnName={'linda'} uglyBtnSize={185} />
                </li>
            </ul>
            <ul className={`${styles.bottom_row}`}>
                <li className={`${styles.li} ${styles.c}`}>
                    <FaceBtn uglyBtnName={'linda'} uglyBtnSize={287} />
                </li>
                <li className={`${styles.li} ${styles.d}`}>
                    <Image src='/dead-btn.svg' alt='dead btn' height='225px' width='245px' />
                </li>
                <li className={`${styles.li} ${styles.f}`}>
                    <Image src='/run-btn.svg' alt='dead btn' height='210px' width='345px' />
                </li>
            </ul>
        </div>
    )
}

export default PaperCareer