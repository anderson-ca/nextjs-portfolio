import styles from '../styles/Layout.module.css';
import Image from 'next/image';

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            {/* <Image src='/paper-bg.svg' alt='bg' layout='fill' objectFit='cover' /> */}
            <div className={styles.main}>
                {children}  
            </div>
        </div>
    )
}

export default Layout;