import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { NotionRenderer } from "react-notion";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { useEffect, useState } from "react";
import Loader from "./Loader";

// UI component for main post content
export default function PostContent({ post }) {
  console.log(post);
	const [contentData, setcontentData] = useState(false);
	const createdAt =
		typeof post?.createdAt === "number"
			? new Date(post.createdAt)
			: post.createdAt.toDate();

	useEffect(() => {
		fetch(
			"https://blog.alifzulkifeli.workers.dev/v1/page/"+ post.content
		)
			.then((response) => response.json())
			.then((data) => {
				setcontentData(data);
			});
	}, []);

	return (
		<div>
			<div className="card">
				<h1>{post?.title}</h1>
				<span className="text-sm ">
					Written by{" "}
					<Link href={`/${post.username}/`}>
						<a className="text-info">@{post.username}</a>
					</Link>
					on {createdAt.toISOString()}
				</span>
				<div className="pt-10" >
					{contentData ? (
						<NotionRenderer blockMap={contentData} />
					) : (
						<Loader show={true} />
					)}
				</div>
			</div>
		</div>
	);
}
