import Image from 'next/image';
import react from 'react';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import styles from '../styles/paperAbout.module.css';

const PaperAbout = () => {

  const [click, setClick] = useState(false);

  
  useEffect(() => {
    console.log('my hook is working 👌')
    console.log('is btn pressed? ', click);
    let element = document.getElementById('#inactive');
    console.log('my element -> ', element);
  }, [click]);
  
  const handleClick = () => setClick(!click);

  return (
    <div className={`${styles.about}`}>
      <div onMouseDown={handleClick} onMouseUp={handleClick} className={click ? `${styles.faceless_btn_wrapper} ${styles.pressed}` : styles.faceless_btn_wrapper}>
        <div className={`${styles.btn} ${styles.angry}`}>
          <Image src='/angry2.svg' alt='faceless btn' height={'250px'} width={'250px'} />
        </div>
        <div className={`${styles.btn} ${styles.inactive}`}>
          <Image src='/btn.svg' alt='faceless btn' height={'250px'} width={'250px'} />
        </div>
        <div className={`${styles.btn} ${styles.active}`}>
          <Image src='/btn-pressed.svg' alt='faceless btn' height={'250px'} width={'250px'} />
        </div>
      </div>
    </div>
  )
}

export default PaperAbout