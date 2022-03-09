// import Link from 'next/link';
import Image from 'next/image';
import FaceBtn from '../components/FaceBtn';
import { useState, useEffect, useRef } from 'react';
import { useAppContext } from '../context/state';
import styles from '../styles/paperAbout.module.css';




const PaperAbout = () => {
  const mycontext = useAppContext();
  const uglyRef = useRef({});
  const sharedBtnState = mycontext.uglyBtn;
  let rick = uglyRef.current['rick'];
  let linda = uglyRef.current['linda'];
  let steve = uglyRef.current['steve'];

  console.log('🌟 about page state - ', sharedBtnState);

  useEffect(() => {



    if (sharedBtnState.name) {
      console.log('😄 active button -', sharedBtnState.name);
      console.log('🛸 hover - ', sharedBtnState.hover);
      console.log('👆 click - ', sharedBtnState.click);
      // rick.className = `${styles.fuck}`;
      // linda.className = `${styles.fuck}`;
      // steve.className = `${styles.fuck}`;
    } else {
      console.log('🚫 no active button...');
      rick.className = `${styles.hide}`;
      linda.className = `${styles.hide}`;
      steve.className = `${styles.hide}`;
    }


    switch (sharedBtnState.name) {
      case 'rick':
        console.log('rick case...');

        rick.className = `${styles.text_wrapper} ${styles.show}`;
        // rick.children[0].className = `${styles.fuck}`;
        rick.children[1].className = `${styles.hide}`;

        break;

      case 'steve':
        console.log('steve case...');

        steve.className = `${styles.text_wrapper} ${styles.show}`;
        // steve.children[0].className = `${styles.fuck}`;
        // steve.children[1].className = `${styles.hide}`;

        break;

      case 'linda':
        console.log('linda case...');

        linda.className = `${styles.text_wrapper} ${styles.show}`;
        // linda.children[0].className = `${styles.fuck}`;
        linda.children[1].className = `${styles.hide}`;

        break;
    }
  }, [sharedBtnState])


  return (
    <div className={`${styles.about}`}>
      <div className={`${styles.section} ${styles.top}`}>
        <h1 className={`${styles.title}`}>HOWDY!</h1>
        <ul className={`${styles.ul}`}>
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
      </div>
      <div className={`${styles.section} ${styles.bottom}`}>
        <div className={`${styles.p}`}>
          <q>
            The creation of a single world comes from a huge number of fragments and chaos.
          </q>
          <h3 className={`${styles.h3}`}>&mdash; Hayao Miyazaki</h3>
        </div>
        <div className={`${styles.guy_wrapper}`}>
          <Image src='/guy.svg' alt='blah' height={'250px'} width={'250px'} />
        </div>
      </div>
    </div>
  )
}

export default PaperAbout