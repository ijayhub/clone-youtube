import Head from 'next/head'
import Image  from 'next/image';
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import Navbar from '@/comps/Navbar';
import { useState } from 'react';
import { getStaticProps } from 'next';
// import { useRouter } from 'next/router';



const Youtube = ({ videos }) => {
		const [search, setSearch] = useState('');
  return (
		<>
			<Head>
				<title>home</title>
				<meta
					name='description'
					content='Youtube web app created using next app'
				/>
				<meta name='keywords' content='Next.js' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar search={search} handleChange={(e)=>setSearch(e.target.value)} />

			<main className={styles.main}>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 mx-4 lg:mx-0 '>
					{videos.items.map((video) => (
						<div key={video.id.videoId} className={styles.card}>
							<div>
								<img
									src={video.snippet.thumbnails.high.url}
									className='w-full h-40 p-4 rounded-3xl hover:rounded-none'
									alt='pic'
								/>
							</div>
							
							<div className='p-2 flex items-center'>
								<img
									src={video.snippet.thumbnails.default.url}
									alt='thumbnail'
									controls
									className=' h-8 w-8 rounded-full mr-3'
								/>
								<h2 className='text-white text-sm'>
									{video.snippet.title}
								</h2>
							</div>
						</div>
					))}
				</div>
			</main>
		</>
	);
};

export default Youtube;
