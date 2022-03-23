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


    // useEffect(() => {
    //     // console.log('🌟 career page state - ', ugly_text_wrapper);
    //     // let rick = uglyRef.current['rick'];
    //     // let linda = uglyRef.current['linda'];
    //     // let steve = uglyRef.current['steve'];
    //     // let ugly_text_wrapper = uglyRef.current['ugly-text'];
    //     // let modal = modalRef.current;

    //     // console.log('👆 click - ', sharedBtnState.click);


    //     if (sharedBtnState.name) {
    //         // console.log('😄 active button -', sharedBtnState.name);
    //         // console.log('🎯 modal state - ', sharedModalState.name);
            
    //         // console.log('project page local modal -> ', modalRef.current.offsetLeft);
            
            
            
    //         // console.log('🛸 hover - ', sharedBtnState.hover);
    //         // console.log('📉 mouse down - ', sharedBtnState.mouseDown);
    //         // ugly_text_wrapper.className = `${styles.ugly_text_wrapper} ${styles.show}`
    //         // rick.className = `${styles.fuck}`;
    //         // linda.className = `${styles.fuck}`;
    //         // steve.className = `${styles.fuck}`;
    //     } else {
    //         // console.log('🚫 no active button...');
    //         // ugly_text_wrapper.className = `${styles.ugly_text_wrapper} ${styles.hide}`
    //         // rick.className = `${styles.hide}`;
    //         // linda.className = `${styles.hide}`;
    //         // steve.className = `${styles.hide}`;
    //     }


    //     switch (sharedBtnState.name) {
    //         case 'beth':
    //             // console.log('beth case...');

    //             // rick.className = `${styles.text_wrapper} ${styles.show}`;
    //             // rick.children[0].className = `${styles.ugly_title}`;
    //             // rick.children[1].className = `${styles.hide}`;
    //             modalRef.current.style.left = `${sharedModalState.x}px`;
    //             modalRef.current.style.top = `${sharedModalState.y}px`;
                
    //             if (sharedBtnState.click) {
    //                 // console.log('click...');
    //                 // modalRef.current.style.transform = 'scale(6)'
    //                 // console.log('project page local modal -> ', modalRef.current.style.left);
    //                 // rick.children[1].className = `${styles.show}`;
    //             }

    //             break;

    //         case 'rick':
    //             // console.log('rick case...');

    //             // steve.className = `${styles.text_wrapper} ${styles.show} ${styles.btn_title}`;
    //             // steve.children[0].className = `${styles.ugly_title}`;
    //             // steve.children[1].className = `${styles.hide}`;
    //             modalRef.current.style.left = `${sharedModalState.x}px`;
    //             modalRef.current.style.top = `${sharedModalState.y}px`;
                
    //             if (sharedBtnState.click) {
    //                 // console.log('click...');
    //                 // modalRef.current.style.transform = 'scale(6)'
    //                 // steve.children[1].className = `${styles.show}`;
    //             }

    //             break;

    //         case 'lucinda':
    //             // console.log(`${sharedBtnState.name)} case...`);

    //             // linda.className = `${styles.text_wrapper} ${styles.show}`;
    //             // linda.children[0].className = `${styles.ugly_title}`;
    //             // linda.children[1].className = `${styles.hide}`;
    //             // console.log(`😎 here's my modal -> ${modal}`);
    //             modalRef.current.style.left = `${sharedModalState.x}px`;
    //             modalRef.current.style.top = `${sharedModalState.y}px`;
                
    //             if (sharedBtnState.click) {
    //                 // console.log('click...');
    //                 // modalRef.current.style.transform = 'scale(6)'
    //                 // linda.children[1].className = `${styles.show}`;
    //             }

    //             break;

    //         case 'lionel':
    //             // console.log(`${sharedBtnState.name)} case...`);

    //             // linda.className = `${styles.text_wrapper} ${styles.show}`;
    //             // linda.children[0].className = `${styles.ugly_title}`;
    //             // linda.children[1].className = `${styles.hide}`;
    //             // console.log(`😎 here's my modal -> ${modal}`);
    //             modalRef.current.style.left = `${sharedModalState.x}px`;
    //             modalRef.current.style.top = `${sharedModalState.y}px`;
    //             // modalRef.current.style.width = `${sharedModalState.width}px`;
    //             // modalRef.current.style.height = `${sharedModalState.height}px`;
    //             if (sharedBtnState.click) {
    //                 // console.log('click...');
    //                 // modalRef.current.style.transform = 'scale(6)'
    //                 // linda.children[1].className = `${styles.show}`;
    //             }

    //             break;
    //     }
    // }, [sharedBtnState])


    return (
        <div className={`${styles.projects}`}>
            <div ref={modalRef} className={`${styles.modal}`}>

            </div>
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