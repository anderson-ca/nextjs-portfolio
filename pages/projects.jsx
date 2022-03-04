import styles from '../styles/Projects.module.css';
import Image from 'next/image';

const projects = () => {
  return (
    <div className={styles.projects}>
      <div className={`${styles.svg_wrapper}`}>
        <Image src='/face-middle-final.svg' alt='' height={"80rem"} width={"80rem"} />
      </div>
      <ul className={`${styles.ul}`}>
        <li className={`${styles.li}`}>
          <h2>blah</h2>
          <p>hey there this is just soime bullshit to fill the area.</p>
        </li>
        <li className={`${styles.li}`}>
          <h2>blah</h2>
          <p>hey there this is just soime bullshit to fill the area.</p>
        </li>
        <li className={`${styles.li}`}>
          <h2>blah</h2>
          <p>hey there this is just soime bullshit to fill the area.</p>
        </li>
        <li className={`${styles.li}`}>
          <h2>blah</h2>
          <p>hey there this is just soime bullshit to fill the area.</p>
        </li>
        <li className={`${styles.li}`}>
          <h2>blah</h2>
          <p>hey there this is just soime bullshit to fill the area.</p>
        </li>
        <li className={`${styles.li}`}>
          <h2>blah</h2>
          <p>hey there this is just soime bullshit to fill the area.</p>
        </li>
        <li className={`${styles.li}`}>
          <h2>blah</h2>
          <p>hey there this is just soime bullshit to fill the area.</p>
        </li>
        <li className={`${styles.li}`}>
          <h2>blah</h2>
          <p>hey there this is just soime bullshit to fill the area.</p>
        </li>
        <li className={`${styles.li}`}>
          <h2>blah</h2>
          <p>hey there this is just soime bullshit to fill the area.</p>
        </li>
        <li className={`${styles.li}`}>
          <h2>blah</h2>
          <p>hey there this is just soime bullshit to fill the area.</p>
        </li>
      </ul>
    </div>
  )
}

export default projects