import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar: FC = () => {
	const router = useRouter();
	const hoverClassName =
		"hover:bg-red-500 h-full px-4 transition-all duration-200";
	return (
		<div className="fixed z-50 bg-black text-white h-16 w-full flex flex-row justify-between items-center px-3 sm:px-5">
			<button
				onClick={() => router.push("/")}
				className="flex flex-row items-center gap-x-4 text-white"
			>
				<div className="relative w-10 h-10 rounded-full overflow-hidden">
					<Image src="/logo.png" layout="fill" alt="Logo" />
				</div>
				<div className="font-bold text-xl">Andrew Jeremy</div>
			</button>
			<button className="md:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={2}
					stroke="currentColor"
					className="w-8 h-8"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
			<div className="h-full hidden md:flex flex-row text-white font-semibold">
				<button
					onClick={async () => {
						await router.push("/");
						if (document.getElementById("about")) {
							window.scrollTo({
								top: 0,
								behavior: "smooth",
							});
						}
					}}
					className={hoverClassName}
				>
					About
				</button>
				<button
					onClick={async () => {
						await router.push("/");
						const projects: HTMLElement | null =
							document.getElementById("projects");
						if (projects) {
							window.scrollTo({
								top: projects.offsetTop - 120,
								behavior: "smooth",
							});
						}
					}}
					className={hoverClassName}
				>
					Projects
				</button>
				<button
					onClick={async () => {
						await router.push("/");
						const contacts: HTMLElement | null =
							document.getElementById("contact");
						if (contacts) {
							window.scrollTo({
								top: contacts.offsetTop,
								behavior: "smooth",
							});
						}
					}}
					className={hoverClassName}
				>
					Contact
				</button>
				<button className={hoverClassName}>Blog</button>
			</div>
		</div>
	);
};

export default Navbar;
