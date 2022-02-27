import { CgBorderBottom, CgBorderLeft, CgBorderRight, CgDistributeVertical } from "react-icons/cg";
import styles from '../styles/Navbar.module.css';
import ReactPlayer from 'react-player';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className={`${styles.nav}`}>
            <ul className={`${styles.ul}`}>
                <li className={`${styles.logo}`}>
                    <Link href='/' passHref>
                        <a className={`${styles.nav_link}`}>
                            <span className={`${styles.link_text} ${styles.logo_text}`}>Home</span>
                            <span className={`${styles.link_icon}`}><Image src='/share.png' alt='rocket icons - two tone' width={'50%'} height={'50%'} /></span>
                        </a>
                    </Link>
                </li>
                <li className={`${styles.li}`}>
                    <Link href='/experience' passHref>
                        <a className={`${styles.nav_link}`}>
                            <span className={`${styles.link_icon}`}><Image src='/job-search.png' alt='rocket icons - two tone' width={'50%'} height={'50%'} /></span>
                            <span className={`${styles.link_text}`}>Career</span>
                        </a>
                    </Link>
                </li>
                <li className={`${styles.li}`}>
                    <Link href='/projects' passHref>
                        <a className={`${styles.nav_link}`}>
                            <span className={`${styles.link_icon}`}><Image src='/creativity.png' alt='rocket icons - two tone' width={'50%'} height={'50%'} /></span>
                            <span className={`${styles.link_text}`}>My Projects</span>
                        </a>
                    </Link>
                </li>
                <li className={`${styles.li}`}>
                    <Link href='/about' passHref>
                        <a className={`${styles.nav_link}`}>
                            <span className={`${styles.link_icon}`}><Image src='/votes.png' alt='rocket icons - two tone' width={'50%'} height={'50%'} /></span>
                            <span className={`${styles.link_text}`}>About Me</span>
                        </a>
                    </Link>
                </li>
                {/* <li className={`${styles.li}`}>
                    <Link href='/' passHref>
                        <a className={`${styles.nav_link}`}>
                            <span className={`${styles.link_icon}`}><Image src='/sun.png' alt='rocket icons - two tone' width={'50%'} height={'50%'} /></span>
                        </a>
                    </Link>
                </li> */}
            </ul>
        </nav>
    )
}

export default Navbar