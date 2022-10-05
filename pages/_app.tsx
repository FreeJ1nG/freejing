import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-vertical-timeline-component/style.min.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { useRef } from "react";

function MyApp({ Component, pageProps }: AppProps) {
	const aboutRef = useRef<HTMLDivElement>(null);
	const projectsRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);
	const blogRef = useRef<HTMLDivElement>(null);

	return (
		<div>
			<Head>
				<title>Andrew Jeremy</title>
				<link rel="icon" href="/logo.png" />
			</Head>
			<div className="relative flex flex-col font-ubuntu">
				<div className="h-16"></div>
				<Navbar />
				<Component {...pageProps} />
			</div>
		</div>
	);
}

export default MyApp;
