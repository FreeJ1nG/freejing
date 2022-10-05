import { FC } from "react";

const CV: FC = () => {
	return (
		<div className="w-full h-[calc(100vh-64px)] flex justify-center items-center py-10">
			<iframe
				className="w-[800px] h-full flex justify-center"
				src="https://docs.google.com/document/d/e/2PACX-1vQ7WyobAiWMpN8WNjWAa3kSNyU7DtAh-s82fv6n_ie9UFaoacCIOKMGaxN8r3deCF2yAs4het0rdDSK/pub?embedded=true"
			></iframe>
		</div>
	);
};

export default CV;
