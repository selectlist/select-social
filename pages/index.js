import Head from "next/head";
import Post from "../components/post";

export default function Home() {
	return (
		<>
			<Head>
				<title>Home - Select Social</title>
			</Head>

			<Post
				username="Select"
				profile_picture={null}
				badges={[]}
				desc="Test"
				image={null}
			/>
		</>
	);
}
