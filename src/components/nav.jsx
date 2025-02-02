import React from 'react';
import Icon from './react-icon';

const Aside = () => {

	return (
		<>
			<div class="mb-[25px]">
				<img src="/images/hitarth.jpeg" alt="Profile Picture" className="pfp w-[150px] h-[150px] rounded-[10px]" />
			</div>

			<div className="hidden md:flex flex-col gap-6">
				<a href="/" className="taskbar-link w-36 h-12 rounded-lg bg-Overlay text-center flex items-center justify-center gap-2 text-Iris transition-all duration-300 ease-in-out hover:bg-Love hover:text-Overlay">
					<Icon icon="home" className="h-6 w-6 fill-current" />
					<span className="text-xl font-normal leading-5">Home</span>
				</a>

				<a href="/career" className="taskbar-link w-36 h-12 rounded-lg bg-Overlay text-center flex items-center justify-center gap-2 text-Iris transition-all duration-300 ease-in-out hover:bg-Pine hover:text-Overlay">
					<Icon icon="career" className="h-6 w-6 fill-current" />
					<span className="text-xl font-normal leading-5">Career</span>
				</a>

				<a href="/projects" className="taskbar-link w-36 h-12 rounded-lg bg-Overlay text-center flex items-center justify-center gap-2 text-Iris transition-all duration-300 ease-in-out hover:bg-Gold hover:text-Overlay">
					<Icon icon="projects" className="h-6 w-6 fill-current" />
					<span className="text-xl font-normal leading-5">Projects</span>
				</a>

				<a href="/writing" className="taskbar-link w-36 h-12 rounded-lg bg-Overlay text-center flex items-center justify-center gap-2 text-Iris transition-all duration-300 ease-in-out hover:bg-Iris hover:text-Overlay">
					<Icon icon="writing" className="h-6 w-6 fill-current" />
					<span className="text-xl font-normal leading-5">Writing</span>
				</a>

				<a
					href="https://raw.githubusercontent.com/brohudev/resume/refs/heads/main/Hitarth%20Thanki.pdf"
					target="_blank"
					rel="noopener noreferrer"
					className="taskbar-link w-36 h-12 rounded-lg bg-Overlay text-center flex items-center justify-center gap-2 text-Rose transition-all duration-300 ease-in-out hover:bg-Rose hover:text-Overlay"
				>
					<Icon icon="resume" className="h-6 w-6 fill-current" />
					<span className="text-xl font-normal leading-5">Resume</span>
				</a>
			</div>
		</>
	);
};

export default Aside;
