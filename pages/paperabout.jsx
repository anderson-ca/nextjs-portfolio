// import Link from 'next/link';
import Image from 'next/image';
import FaceBtn from '../components/FaceBtn';
import { useState, useEffect, useRef } from 'react';
import { useAppContext } from '../context/state';
import styles from '../styles/paperAbout.module.css';




const PaperAbout = () => {
  const mycontext = useAppContext();
  const uglyRef = useRef({})
  const sharedBtnState = mycontext.uglyBtn;

  console.log('😉 about context ', sharedBtnState);

  useEffect(() => {
    console.log('hover - ', sharedBtnState.hover)
    console.log('click - ', sharedBtnState.click)

    switch (sharedBtnState.name) {
      case 'rick':
        console.log('rick case...');
  
        break;
      case 'steve':
        console.log('steve case...');
        
        if (sharedBtnState.hover) {
          // console.log('show paragraph here 🔽');
          // uglyRef.current.className = `${styles.li_text_wrapper} ${styles.active}`;
          // console.log(uglyRef.current.className)
          // uglyRef.current.children[0].className = `${styles.ugly_title} ${styles.show}`;
          // uglyRef.current.children[1].className = `${styles.ugly_paragraph}`;
          // console.log(uglyRef.current.children[0].className)
          // console.log(uglyRef.current.children[0])
          // console.log(uglyRef.current.children[1].className)
          // console.log(uglyRef.current.children[1])
        }  else {
          // console.log('remove paragraph now 😡');

        }
        
        if (sharedBtnState.hover) {
          // uglyRef.current.className = `${styles.li_text_wrapper}`;
          // uglyRef.current.children[0].className = `${styles.ugly_title} ${styles.no_show}`;
        }
        break;
      case 'linda':
        console.log('linda case...');
        break;
    }
  }, [sharedBtnState])


  return (
    <div className={`${styles.about}`}>
      <div className={`${styles.section} ${styles.top}`}>
        <h1 className={`${styles.title}`}>HOWDY!</h1>
        <ul className={`${styles.ul}`}>
          <li className={`${styles.li} ${styles.c}`}>
            <FaceBtn uglyBtnName={'linda'} />
            <div className={`${styles.li_text_wrapper}`}>
              <h3>Who am I?</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestiae iusto, odit voluptates necessitatibus dicta consequuntur, deserunt repellat quibusdam nemo natus? Neque hic sunt maiores rerum labore ipsam, aspernatur architecto.</p>
            </div>
          </li>
          <li className={`${styles.li} ${styles.b}`}>
            <FaceBtn uglyBtnName={'steve'} />
            <div ref={uglyRef} className={`${styles.li_text_wrapper}`}>
              <h3>Who am I?</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestiae iusto, odit voluptates necessitatibus dicta consequuntur, deserunt repellat quibusdam nemo natus? Neque hic sunt maiores rerum labore ipsam, aspernatur architecto.</p>
            </div>
          </li>
          <li className={`${styles.li} ${styles.a}`}>
            <FaceBtn uglyBtnName={'rick'} />
            <div className={`${styles.li_text_wrapper}`}>
              <h3>Who am I?</h3>
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