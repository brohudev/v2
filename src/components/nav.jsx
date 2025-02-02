import Icon from './react-icon';
import { useState } from 'react';
const navItems = [
	{ name: 'About', href: '/', icon: 'home', color: 'Love' },
	{ name: 'Career', href: '/career', icon: 'career', color: 'Pine' },
	{ name: 'Projects', href: '/projects', icon: 'projects', color: 'Gold' },
	{ name: 'Writing', href: '/writing', icon: 'writing', color: 'Iris' },
	{ name: 'Resume', href: 'https://raw.githubusercontent.com/brohudev/resume/refs/heads/main/Hitarth%20Thanki.pdf', icon: 'resume', color: 'Rose', external: true, },
];

const Aside = ({ activePage }) => {
	return (
		<>
			{/* Mobile navigation: visible on screens smaller than sm */}
			<div className="block max-lg:block lg:hidden">
				<MobileNav activePage={activePage} />
			</div>

			{/* Desktop navigation: hidden on small screens and visible on sm and larger */}
			<div className="hidden lg:block">
				<DesktopNav activePage={activePage} />
			</div>
		</>
	);
};

export default Aside;


const MobileNav = ({ activePage }) => {
	const defaultPage = activePage === '' ? 'About' : activePage;
	const activeItem = navItems.find(item => item.name === defaultPage);
	const iconName = activePage === '' ? 'home' : activePage.toLowerCase();

	return (<div className='flex flex-col items-center lg:hidden gap-[25px] mb-10'>

		<div > <img src="/images/hitarth.jpeg" alt="Profile Picture" className="pfp w-[150px] h-[150px] rounded-[10px]" /> </div>

		<span className={`text-${activeItem.color} text-[36px] font-semibold leading-[20px]`}> ~/Hitarth Thanki</span>

		<div className="mobile-nav flex w-full gap-[5vw]">
			<button
				onClick={() =>
					window.open(
						'https://raw.githubusercontent.com/brohudev/resume/refs/heads/main/Hitarth%20Thanki.pdf',
						'_blank'
					)
				}
				className="flex-1 flex items-center justify-center px-4 py-3 bg-Overlay rounded-xl text-Rose border border-Rose hover:border-trasparent hover:bg-Rose hover:text-Overlay transition-all duration-300"
			>
				<Icon icon="resume" className="h-6 w-6 fill-current" />
				<span className="text-xl font-normal ml-2">Resume</span>
			</button>

			<button className={`flex-1 flex items-center justify-center px-4 py-3 bg-Overlay rounded-xl text-${activeItem?.color} border border-${activeItem?.color} transition-all duration-300 hover:border-${activeItem?.color} hover:bg-${activeItem?.color} hover:text-Overlay `}>
				<Icon icon={iconName} className="h-6 w-6 fill-current" />

				<span className="text-xl font-normal ml-2">{activeItem.name}</span>
			</button>
		</div>
	</div>);
};

const DesktopNav = ({ activePage }) => {
	return (
		<>
			<div className="mb-[25px]">
				<img
					src="/images/hitarth.jpeg"
					alt="Profile Picture"
					className="pfp w-[150px] h-[150px] rounded-[10px]"
				/>
			</div>

			<div className="hidden md:flex flex-col gap-6">
				<a
					href="/"
					className={`taskbar-link w-36 h-12 rounded-lg bg-Overlay text-center flex items-center justify-center gap-2 text-Iris transition-all duration-300 ease-in-out hover:bg-Love hover:text-Overlay ${activePage === '' ? 'border border-Love text-Love' : ''
						}`}
				>
					<Icon icon="home" className="h-6 w-6 fill-current" />
					<span className="text-xl font-normal leading-5">About</span>
				</a>

				<a
					href="/career"
					className={`taskbar-link w-36 h-12 rounded-lg bg-Overlay text-center flex items-center justify-center gap-2 text-Iris transition-all duration-300 ease-in-out hover:bg-Pine hover:text-Overlay ${activePage === 'Career' ? 'border border-Pine text-Pine' : ''
						}`}
				>
					<Icon icon="career" className="h-6 w-6 fill-current" />
					<span className="text-xl font-normal leading-5">Career</span>
				</a>

				<a
					href="/projects"
					className={`taskbar-link w-36 h-12 rounded-lg bg-Overlay text-center flex items-center justify-center gap-2 transition-all duration-300 ease-in-out hover:bg-Gold hover:text-Overlay ${activePage === 'Projects' ? 'border border-Gold text-Gold' : 'text-Iris'}`}
				>
					<Icon icon="projects" className="h-6 w-6 fill-current" />
					<span className="text-xl font-normal leading-5">Projects</span>
				</a>

				<a
					href="/writing"
					className={`taskbar-link w-36 h-12 rounded-lg bg-Overlay text-center flex items-center justify-center gap-2 text-Iris transition-all duration-300 ease-in-out hover:bg-Iris hover:text-Overlay ${activePage === 'Writing' ? 'border border-Iris text-Iris' : ''
						}`}
				>
					<Icon icon="writing" className="h-6 w-6 fill-current" />
					<span className="text-xl font-normal leading-5">Writing</span>
				</a>

				<a
					href="https://raw.githubusercontent.com/brohudev/resume/refs/heads/main/Hitarth%20Thanki.pdf"
					target="_blank"
					rel="noopener noreferrer"
					className={`taskbar-link w-36 h-12 rounded-lg bg-Overlay text-center flex items-center justify-center gap-2 text-Rose transition-all duration-300 ease-in-out hover:bg-Rose hover:text-Overlay `}
				>
					<Icon icon="resume" className="h-6 w-6 fill-current" />
					<span className="text-xl font-normal leading-5">Resume</span>
				</a>
			</div>
		</>
	);
};
