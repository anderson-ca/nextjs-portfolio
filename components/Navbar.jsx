import { CgBorderBottom, CgBorderLeft, CgBorderRight, CgDistributeVertical } from "react-icons/cg";
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
    return (
        <>
            <ul className={`${styles.ul}`}>
                <li className={`${styles.li}`}>
                    <Link href='/' passHref>
                        <a className={`${styles.nav_link}`}>
                            <span className={`${styles.link_icon}`}><CgBorderLeft /></span>
                            <span className={`${styles.link_text}`}>Coffe</span>
                        </a>
                    </Link>
                </li>
                <li className={`${styles.li}`}>
                    <Link href='/experience' passHref>
                        <a className={`${styles.nav_link}`}>
                            <span className={`${styles.link_icon}`}><CgBorderLeft /></span>
                            <span className={`${styles.link_text}`}>Experience</span>
                        </a>
                    </Link>
                </li>
                <li className={`${styles.li}`}>
                    <Link href='/projects' passHref>
                        <a className={`${styles.nav_link}`}>
                            <span className={`${styles.link_icon}`}><CgBorderLeft /></span>
                            <span className={`${styles.link_text}`}>Projects</span>
                        </a>
                    </Link>
                </li>
                <li className={`${styles.li}`}>
                    <Link href='/about' passHref>
                        <a className={`${styles.nav_link}`}>
                            <span className={`${styles.link_icon}`}><CgBorderLeft /></span>
                            <span className={`${styles.link_text}`}>About</span>
                        </a>
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Navbar