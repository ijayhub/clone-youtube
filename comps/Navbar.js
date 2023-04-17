import { RxHamburgerMenu } from 'react-icons/rx';
import styles from '@/styles/Home.module.css';
import Input from '@/comps/Input';
import { MdOutlineVideoCall, MdOutlineNotificationsNone } from 'react-icons/md';
import { useState } from 'react';
import Image from 'next/image';
import yt from '../public/youtube.svg'



const Navbar = () => {
  const [search, setSearch] = useState('');
	return (
		<nav className={styles.navContainer}>
			<div className='flex items-center '>
				<RxHamburgerMenu className={styles.RxHamburgerMenu} />
				<Image src={yt} alt='youtube logo' className={styles.Image} />
				<h1 className={styles.text}>YouTube</h1>
				<sup className={styles.sup}>NG</sup>
			</div>
			<Input search={search} setSearch={setSearch} />
			<div className={styles.navNotification}>
				<MdOutlineVideoCall className={styles.navVideo} />
				<div className={styles.navNot}>
					<MdOutlineNotificationsNone className={styles.not} />
					<div className={styles.navNot1}>20+</div>
				</div>
				<div className={styles.user}>Ij</div>
			</div>
		</nav>
	);
};

export default Navbar;
