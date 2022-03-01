import styles from '../styles/About.module.css';
import Image from 'next/image';
import Divider from '../components/Divider';

const about = () => {
  return (
    <div className={styles.about}>
      <Divider />
      <div className={`${styles.text_wrapper}`}>
        <div className={`${styles.text_bg}`}>

        </div>
        <h2>Hey there</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, vitae at? Laboriosam iste esse hic. Eos tempore ratione atque amet sed, labore placeat ad possimus iure dolorem necessitatibus molestiae accusantium!</p>
      </div>
      <div className={`${styles.svg_wrapper}`}>
        <Image src='/fuckfuck.svg' alt='my head' height={'400rem'} width={'400rem'} />
        <div className={`${styles.svg_body_wrapper}`}>
          <Image src='/fuckyou-body.svg' alt='my head' height={'600rem'} width={'600rem'} />
        </div>
      </div>
    </div>
  )
}

export default about