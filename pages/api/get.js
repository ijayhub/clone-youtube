export const getStaticProps = async (context) => {
	
	console.log(context);

	const res = await fetch(
		`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${context}&key=${process.env.NEXT_APP_YOUTUBE_API_KEY}&maxResults=20`
	);
	const data = await res.json();
	console.log(data);

	return {
		props: { videos: data },
	};
};
