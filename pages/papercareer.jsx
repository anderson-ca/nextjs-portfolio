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
        console.log('🌟 career page state - ', ugly_text_wrapper);
        let rick = uglyRef.current['rick'];
        let linda = uglyRef.current['linda'];
        let steve = uglyRef.current['steve'];
        let ugly_text_wrapper = uglyRef.current['ugly-text'];



        if (sharedBtnState.name) {
            console.log('😄 active button -', sharedBtnState.name);
            console.log('🛸 hover - ', sharedBtnState.hover);
            console.log('👆 click - ', sharedBtnState.click);
            ugly_text_wrapper.className = `${styles.ugly_text_wrapper} ${styles.show}`
            // rick.className = `${styles.fuck}`;
            // linda.className = `${styles.fuck}`;
            // steve.className = `${styles.fuck}`;
        } else {
            console.log('🚫 no active button...');
            ugly_text_wrapper.className = `${styles.ugly_text_wrapper} ${styles.hide}`
            rick.className = `${styles.hide}`;
            linda.className = `${styles.hide}`;
            steve.className = `${styles.hide}`;
        }


        switch (sharedBtnState.name) {
            case 'rick':
                console.log('rick case...');

                rick.className = `${styles.text_wrapper} ${styles.show}`;
                rick.children[0].className = `${styles.ugly_title}`;
                rick.children[1].className = `${styles.hide}`;

                if (sharedBtnState.click) {
                    console.log('click...');
                    rick.children[1].className = `${styles.show}`;
                }

                break;

            case 'steve':
                console.log('steve case...');

                steve.className = `${styles.text_wrapper} ${styles.show} ${styles.btn_title}`;
                steve.children[0].className = `${styles.ugly_title}`;
                steve.children[1].className = `${styles.hide}`;

                if (sharedBtnState.click) {
                    console.log('click...');
                    steve.children[1].className = `${styles.show}`;
                }

                break;

            case 'linda':
                console.log('linda case...');

                linda.className = `${styles.text_wrapper} ${styles.show}`;
                linda.children[0].className = `${styles.ugly_title}`;
                linda.children[1].className = `${styles.hide}`;

                if (sharedBtnState.click) {
                    console.log('click...');
                    linda.children[1].className = `${styles.show}`;
                }

                break;
        }
    }, [sharedBtnState])


    return (
        <div className={`${styles.career}`}>
            <div ref={el => uglyRef.current['ugly-text'] = el} className={`${styles.ugly_text_wrapper}`}></div>
            <ul className={`${styles.ul} ${styles.top}`}>
                <li className={`${styles.li} ${styles.c}`}>
                    <div className={`${styles.btn_wrapper}`}>
                        <FaceBtn uglyBtnName={'linda'} />
                    </div>
                    <div ref={el => uglyRef.current['linda'] = el} className={`${styles.text_wrapper}`}>
                        <h3>Where am I from?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestiae iusto, odit voluptates necessitatibus dicta consequuntur, deserunt repellat quibusdam nemo natus? Neque hic sunt maiores rerum labore ipsam, aspernatur architecto.</p>
                    </div>
                </li>
                <li className={`${styles.li} ${styles.b}`}>
                    <div className={`${styles.btn_wrapper}`}>
                        <FaceBtn uglyBtnName={'steve'} />
                    </div>
                    <div ref={el => uglyRef.current['steve'] = el} className={`${styles.text_wrapper}`}>
                        <h3>Who am I?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestiae iusto, odit voluptates necessitatibus dicta consequuntur, deserunt repellat quibusdam nemo natus? Neque hic sunt maiores rerum labore ipsam, aspernatur architecto.</p>
                    </div>
                </li>
                <li className={`${styles.li} ${styles.a}`}>
                    <div className={`${styles.btn_wrapper}`}>
                        <FaceBtn uglyBtnName={'rick'} />
                    </div>
                    <div ref={el => uglyRef.current['rick'] = el} className={`${styles.text_wrapper}`}>
                        <h3>What do I do?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestiae iusto, odit voluptates necessitatibus dicta consequuntur, deserunt repellat quibusdam nemo natus? Neque hic sunt maiores rerum labore ipsam, aspernatur architecto.</p>
                    </div>
                </li>
            </ul>
            <div className={`${styles.bottom}`}>
                <Image src='/career-bg-alt.svg' alt='something' height={`100%`} width={`100%`} />
            </div>
        </div>
    )
}

export default PaperCareer