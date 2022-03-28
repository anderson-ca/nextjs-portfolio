import { useWindowDimensions } from '../hooks/useWindowDimension';
import styles from '../styles/UglyModal.module.css';
import { useState, useEffect, useRef } from 'react';
import { useAppContext } from '../context/state';
import Image from 'next/image';

const UglyModal = () => {
    const { width, height } = useWindowDimensions();
    const modalRef = useRef(null);
    const hoverRef = useRef(null);
    const clickRef = useRef(null);
    const mycontext = useAppContext();
    const sharedBtnState = mycontext.uglyBtn;

    const handleHoverAnimation = (sharedBtn) => {

        // console.log('😄 btn position -> ', sharedBtn.x, sharedBtn.y);
        // console.log('window height--> ', height);
        // console.log('window width --> ', width);



        if (sharedBtn.hover) {
            modalRef.current.className = `${styles.show}`;
            hoverRef.current.className = `${styles.hover_mode}`;

            // place modal in quadrant
            if (sharedBtn.x > (width / 2)) {
                hoverRef.current.classList.add(`${styles.left}`);

            } else if (sharedBtn.x <= (width / 2)) {
                hoverRef.current.classList.add(`${styles.right}`);
            }

            if (sharedBtn.y > (height / 2)) {
                hoverRef.current.classList.add(`${styles.top}`);

            } else if (sharedBtn.y <= (height / 2)) {
                hoverRef.current.classList.add(`${styles.bottom}`);
            }


        } else if (!sharedBtn.hover && sharedBtn.hover !== null) {
            hoverRef.current.className = `${styles.hide}`;
        }
    }

    const handleClickAnimation = (sharedBtn) => {
        if (sharedBtn.click) {
            modalRef.current.className = `${styles.show}`;
            clickRef.current.className = `${styles.scale_in_ver_top}`;
        } else if (!sharedBtn.click && sharedBtn.click !== null) {
            modalRef.current.className = `${styles.show}`;
            clickRef.current.className = `${styles.fade_out_top}`;
        }
    }

    useEffect(() => {
        modalRef.current.className = `${styles.hide}`;

        handleHoverAnimation(sharedBtnState);
        handleClickAnimation(sharedBtnState);

    }, [sharedBtnState]);

    return (
        <div ref={modalRef} className={`${styles.ugly_modal_wrapper}`}>
            <div ref={hoverRef}>
                <div className={`${styles.image_wrapper}`}>
                    <Image src='/angry.svg' alt='dialogue box' height='50px' width='50px' />
                </div>
                <div className={`${styles.text_wrapper}`}>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint velit, autem numquam reprehenderit, recusandae suscipit sed sunt a doloribus rerum excepturi ab facilis nesciunt voluptates animi! Esse pariatur atque excepturi?
                    </p>
                </div>
            </div>
            <div ref={clickRef} className={`${styles.ugly_click}`}></div>
        </div>
    )
}

export default UglyModal