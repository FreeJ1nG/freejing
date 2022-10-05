import Document, { Head, Html, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta property="custom" content="Freejing's Site" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
				</Head>
				<body>
					<Main />
				</body>
				<NextScript />
			</Html>
		);
	}
}
