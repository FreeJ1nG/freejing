import { FC, useState } from "react";
import { PROFICIENCIES, PROJECTS, SOCIALS } from "../constants";
import { Router, useRouter } from "next/router";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { Button } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<div className="flex justify-center px-5">
			<div className="flex flex-col gap-y-20 w-[1200px] py-20">
				<AboutSection />
				<ProjectsSection />
				<ContactSection />
			</div>
		</div>
	);
};

const ContactSection: FC = () => {
	return (
		<div id="contact" className="w-full flex flex-col gap-y-3">
			<div className="font-bold text-3xl px-2 text-center">Get in Touch</div>
			<div className="w-full h-0.5 bg-gray-500"></div>
			<div className="pt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
				{SOCIALS.map((social) => (
					<SocialCard key={social.id} {...social} />
				))}
			</div>
		</div>
	);
};

const SocialCard: FC<{
	title: string;
	imageSrc: string;
	to: string;
}> = ({ title, imageSrc, to }) => {
	return (
		<div className="justify-self-center flex flex-row">
			<a
				href={to}
				target="_blank"
				rel="noreferrer"
				className="relative w-16 h-16 sm:w-20 sm:h-20"
			>
				<Image src={imageSrc} alt={title} layout="fill" />
			</a>
		</div>
	);
};

const ProjectsSection: FC = () => {
	const [slide, setSlide] = useState<number>(0);

	return (
		<div id="projects" className="flex flex-col gap-y-3">
			<div className="font-bold text-3xl px-2 text-center">Projects</div>
			<div className="w-full h-0.5 bg-gray-500"></div>
			<div className="pt-4 relative">
				<div className="absolute z-40 bottom-0 top-0 left-0 flex items-center">
					<button
						onClick={() =>
							setSlide((slide - 1 + PROJECTS.length) % PROJECTS.length)
						}
						className="bg-black text-white p-3"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
							/>
						</svg>
					</button>
				</div>
				<div className="absolute z-40 bottom-0 top-0 right-0 flex items-center">
					<button
						onClick={() => setSlide((slide + 1) % PROJECTS.length)}
						className="bg-black text-white p-3"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
							/>
						</svg>
					</button>
				</div>
				<Carousel
					showStatus={false}
					showArrows={false}
					showThumbs={false}
					selectedItem={slide}
					className="w-full"
				>
					{PROJECTS.map((project) => (
						<ProjectCard key={project.id} {...project} />
					))}
				</Carousel>
			</div>
		</div>
	);
};

const AboutSection: FC = () => {
	const router = useRouter();

	return (
		<div id="about" className="w-full flex flex-col items-center gap-y-20">
			<div className="flex flex-col lg:flex-row items-center gap-y-5 sm:gap-y-10 gap-x-20">
				<div className="relative min-w-[288px] min-h-[288px] sm:min-w-[320px] sm:min-h-[320px] overflow-hidden rounded-full">
					<Image src="/me.png" alt="A Picture of me" layout="fill" />
				</div>
				<div className="w-full flex flex-col justify-center items-center lg:items-start gap-y-5">
					<div className="text-2xl sm:text-3xl md:text-4xl text-center lg:text-left font-black">
						Hi There!
					</div>
					<div className="flex flex-col gap-y-1 items-center lg:items-start">
						<div className="text-sm sm:text-lg md:text-xl xl:text-2xl text-center lg:text-left">
							I{"'"}m an undergraduate in the University of Indonesia
						</div>
						<div className="text-sm sm:text-lg md:text-xl xl:text-2xl text-center lg:text-left">
							I make a lot of fun projects and websites!
						</div>
						<div className="text-sm sm:text-lg md:text-xl xl:text-2xl text-center lg:text-left">
							<div className="flex items-center gap-x-2">
								Openly looking for internships
								<div className="text-yellow-300">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										className="w-6 h-6"
									>
										<path
											fillRule="evenodd"
											d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
											clipRule="evenodd"
										/>
									</svg>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full flex justify-center lg:justify-start">
						<Button
							onClick={() => router.push("/cv")}
							className="w-fit"
							variant="outlined"
						>
							See my CV
						</Button>
					</div>
					<div className="w-full flex justify-center lg:justify-start">
						<div className="flex items-center gap-x-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={2}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z"
								/>
							</svg>
							<div className="font-semibold text-lg">04 June 2003</div>
						</div>
					</div>
				</div>
			</div>
			<EducationSection />
			<ProficienciesSection />
		</div>
	);
};

const EducationSection: FC = () => {
	const router = useRouter();

	return (
		<VerticalTimeline lineColor="black" className="drop-shadow-lg">
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
				contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
				iconStyle={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "black",
				}}
				icon={
					<div className="relative w-8 h-8 sm:w-12 sm:h-12">
						<Image src="/UI.png" alt="UI" layout="fill" />
					</div>
				}
			>
				<h2 className="vertical-timeline-element-title font-bold text-white pb-2">
					University of Indonesia
				</h2>
				<h3 className="vertical-timeline-element-subtitle pb-1">
					Depok, West Java
				</h3>
				<h4 className="vertical-timeline-element-subtitle">Undergraduate</h4>
				<p>2021 - Present</p>
				<div className="flex flex-col text-xs sm:text-sm md:text-base">
					<div>- Learned how to code python 🐍</div>
					<div>
						- Learned a lot of Web Development Frameworks (React.js, Next.js,
						Django, and{" "}
						<button
							onClick={() => router.push("/cv")}
							className="text-green-500 font-bold"
						>
							more
						</button>
						) ⌨️
					</div>
					<div>
						- Participated in a few Dota 2 tournaments representing the
						University of Indonesia 🇮🇩
					</div>
				</div>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				iconStyle={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "black",
				}}
				icon={
					<div className="relative w-8 h-8 sm:w-12 sm:h-12">
						<Image src="/penabur.png" alt="Penabur" layout="fill" />
					</div>
				}
			>
				<h2 className="vertical-timeline-element-title font-bold pb-2">
					Brilliant Class SMAK Penabur Gading Serpong
				</h2>
				<h3 className="vertical-timeline-element-subtitle pb-1">
					Gading Serpong, Banten
				</h3>
				<h4 className="vertical-timeline-element-subtitle">High School</h4>
				<p>2018 - 2021</p>
				<div className="flex flex-col text-xs sm:text-sm md:text-base">
					<div>- Silver Medalist of the 20th Nationals of Informatics 🥈</div>
					<div>
						- Top 16 Candidates for Internationals on Informatics selection
					</div>
					<div>- 3rd placement on Falcon Programming Contest (UPH) 🥉</div>
					<div>- 3rd placement on Dcode10 Academy 🥉</div>
					<div>- Learned how to code C++ ⌨</div>
					<div>
						- Made a website made out of HTML and CSS for a school competition
					</div>
				</div>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				iconStyle={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "black",
				}}
				icon={
					<div className="relative w-8 h-8 sm:w-12 sm:h-12">
						<Image src="/penabur.png" alt="Penabur" layout="fill" />
					</div>
				}
			>
				<h2 className="vertical-timeline-element-title font-bold pb-2">
					SMPK Penabur Cirebon
				</h2>
				<h3 className="vertical-timeline-element-subtitle pb-1">
					Cirebon, West Java
				</h3>
				<h4 className="vertical-timeline-element-subtitle">
					Junior High School
				</h4>
				<p>2015 - 2018</p>
				<div className="flex flex-col text-xs sm:text-sm md:text-base">
					<div>- Represented my school on local math competitions ➕</div>
					<div>- Learned how to play the guitar 🎸</div>
					<div>- Learned minecraft redstone 🟥</div>
					<div>- Learned minecraft command block 😎</div>
				</div>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				iconStyle={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "black",
				}}
				icon={
					<div className="relative w-8 h-8 sm:w-12 sm:h-12">
						<Image src="/penabur.png" alt="Penabur" layout="fill" />
					</div>
				}
			>
				<h2 className="vertical-timeline-element-title font-bold pb-2">
					SD Plus Penabur Cirebon
				</h2>
				<h3 className="vertical-timeline-element-subtitle pb-1">
					Cirebon, West Java
				</h3>
				<h4 className="vertical-timeline-element-subtitle">Primary School</h4>
				<p>2012 - 2015</p>
				<div className="flex flex-col text-xs sm:text-sm md:text-base">
					<div>- Played a lot of soccer ⚽</div>
					<div>- Swam a lot 🏊</div>
					<div>- Played Point Blank 🔫</div>
					<div>- Learned how to play the drum 🥁</div>
				</div>
			</VerticalTimelineElement>
		</VerticalTimeline>
	);
};

const ProficienciesSection: FC = () => {
	return (
		<div className="w-full flex flex-col gap-y-3">
			<div className="font-bold text-3xl px-2 text-center">Proficiencies</div>
			<div className="w-full h-0.5 bg-gray-500"></div>
			<div className="pt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{PROFICIENCIES.map((proficiency) => (
					<SkillCard key={proficiency.id} {...proficiency} />
				))}
			</div>
		</div>
	);
};

const ProjectCard: FC<{
	imageSrc: string;
	title: string;
	description: string;
	to: string;
}> = ({ imageSrc, title, description, to }) => {
	return (
		<a href={to} target="_blank" rel="noreferrer">
			<div className="relative w-full aspect-video">
				<Image src={imageSrc} alt={title} layout="fill" />
			</div>
		</a>
	);
};

const SkillCard: FC<{ imageSrc: string; title: string; to: string }> = ({
	imageSrc,
	title,
	to,
}) => {
	return (
		<a
			href={to}
			target="_blank"
			rel="noreferrer"
			className="justify-self-center outline-none p-1 flex flex-col items-center justify-center gap-y-3 w-28 h-28 sm:w-44 sm:h-44 hover:bg-green-300/70 transition-all duration-300 rounded-xl drop-shadow-sm good-shadow"
		>
			<div className="relative w-16 h-16 sm:w-24 sm:h-24">
				<Image src={imageSrc} alt={title} layout="fill" />
			</div>
			<div className="font-bold text-xs sm:text-sm text-center">{title}</div>
		</a>
	);
};

export default Home;
