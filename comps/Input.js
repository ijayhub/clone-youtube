import { AiOutlineSearch } from 'react-icons/ai';
import { HiMicrophone } from 'react-icons/hi';
import styles from '@/styles/Input.module.css';
import { useState } from 'react';
// import { useRouter } from 'next/router';

const Input = ({ search, setSearch }) => {
	console.log(search);
	//   const [search, setSearch] = useState('');

	const handleSearch = (e) => {
		// const router = useRouter();
		e.preventDefault();
		// const search = encodeURIComponent(searchQuery);
		// router.push(`/search?query=${search}`);
		// 	// router.push(`/search/${searchQuery}`);
		setSearch(search);
	};
	return (
		<>
			<form className={styles.btnContainer} onSubmit={handleSearch}>
				<input
					type='text'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					placeholder='Search for Videos...'
					className={styles.input}
					autoComplete='off'
				/>
				<button className={styles.search}>
					<AiOutlineSearch className={styles.search1} />
				</button>
				<span className={styles.mic}>
					<button className={styles.move}>
						<HiMicrophone className={styles.move1} />
					</button>
				</span>
			</form>
		</>
	);
};

export default Input;
