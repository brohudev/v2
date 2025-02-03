import Icon from './react-icon';
import { useState } from 'react';
const navItems = [
	{ name: 'About', href: '/', icon: 'home', color: 'Love' },
	{ name: 'Career', href: '/career', icon: 'career', color: 'Pine' },
	{ name: 'Projects', href: '/projects', icon: 'projects', color: 'Gold' },
	{ name: 'Writing', href: '/writing', icon: 'writing', color: 'Iris' },

];

const Aside = ({ activePage }) => {
	return (<>{/* Mobile navigation: visible on screens smaller than sm */}
		<div className="block max-lg:block lg:hidden"> <MobileNav activePage={activePage} /> </div>

		{/* Desktop navigation: hidden on small screens and visible on sm and larger */}
		<div className="hidden lg:block"> <DesktopNav activePage={activePage} /> </div>
	</>);
};

export default Aside;


const MobileNav = ({ activePage }) => {
	const defaultPage = activePage === '' ? 'About' : activePage;
	const activeItem = navItems.find(item => item.name === defaultPage);
	const iconName = activePage === '' ? 'home' : activePage.toLowerCase();

	return (
		<div className="flex flex-col items-center lg:hidden gap-6 mb-10 w-full">
			<div> <img src="/images/hitarth.jpeg" alt="Profile Picture" className="pfp w-[150px] h-[150px] rounded-[10px]" /> </div>
			<span className={`text-${activeItem.color} text-[36px] font-semibold leading-[20px]`}>~/Hitarth Thanki</span>
			<div className="w-full">
				<div className="flex w-full gap-4">
					{/* Resume Button */}
					<button onClick={() => window.open('https://resume.hitarth.dev', '_blank')}
						className="flex-1 flex items-center justify-center px-4 h-12 bg-Surface rounded-xl text-Rose border border-Rose hover:border-transparent hover:bg-Rose hover:text-Surface transition-all duration-300" >

						<Icon icon="resume" className="h-6 w-6 fill-current" />
						<span className="text-xl font-normal ml-2">Resume</span>
					</button>
					{/* Active Nav Button with Modal */}
					<NavBar activePage={activePage} activeItem={activeItem} iconName={iconName} />
				</div>
			</div>
		</div>
	);
};

const NavBar = ({ activePage, activeItem, iconName }) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleOverlay = () => setIsOpen(!isOpen);

	return (
		<div className="relative flex-1 flex">
			{/* Active Button */}
			<button onClick={toggleOverlay}
				className={` flex-1 flex items-center justify-center px-4 h-12 bg-Overlay rounded-xl text-${activeItem.color} border border-${activeItem.color} transition-all duration-300 hover:border-${activeItem.color} hover:bg-${activeItem.color} hover:text-Overlay`}>

				<Icon icon={iconName} className="h-6 w-6 fill-current" />
				<span className="text-xl font-normal ml-2">{activeItem.name}</span>
			</button>

			{/* Modal below the active button */}
			{isOpen && (<>
				{/* Backdrop Overlay */}
				<div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm animate-fadeIn" onClick={toggleOverlay}> </div>
				{/* Modal Container */}
				<div className="absolute left-0 right-0 top-12 mt-2 z-50 animate-fadeInDown" onClick={(e) => e.stopPropagation()} >
					<nav className="bg-base rounded-lg flex flex-col gap-2">
						{navItems.filter(item => item.name !== activeItem.name).map((item) => (
							<a key={item.name} href={item.href}
								className={` flex items-center justify-center px-4 h-12 bg-Surface rounded-xl text-${item.color} border border-${item.color} transition-all duration-300 hover:border-${item.color} hover:bg-${item.color} hover:text-Surface`}
								{...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
								onClick={() => setIsOpen(false)} >
								<Icon icon={item.icon} className="h-6 w-6 fill-current" />
								<span className="text-xl font-normal ml-2">{item.name}</span> </a>))}
					</nav>
				</div>
			</>
			)}
		</div>
	);
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
					className={`taskbar-link w-36 h-12 rounded-lg text-center flex items-center justify-center gap-2 text-Iris transition-all duration-300 ease-in-out hover:bg-Love hover:text-Surface ${activePage === '' ? 'border bg-Overlay border-Love text-Love' : 'bg-Surface '
						}`}
				>
					<Icon icon="home" className="h-6 w-6 fill-current" />
					<span className="text-xl font-normal leading-5">About</span>
				</a>

				<a
					href="/career"
					className={`taskbar-link w-36 h-12 rounded-lg  text-center flex items-center justify-center gap-2 text-Iris transition-all duration-300 ease-in-out hover:bg-Pine hover:text-Surface ${activePage === 'Career' ? 'border border-Pine bg-Overlay text-Pine' : 'bg-Surface'
						}`}
				>
					<Icon icon="career" className="h-6 w-6 fill-current" />
					<span className="text-xl font-normal leading-5">Career</span>
				</a>

				<a
					href="/projects"
					className={`taskbar-link w-36 h-12 rounded-lg text-center flex items-center justify-center gap-2 transition-all duration-300 ease-in-out hover:bg-Gold hover:text-Surface ${activePage === 'Projects' ? 'border border-Gold bg-Overlay text-Gold' : 'text-Iris bg-Surface '}`}
				>
					<Icon icon="projects" className="h-6 w-6 fill-current" />
					<span className="text-xl font-normal leading-5">Projects</span>
				</a>

				<a
					href="/writing"
					className={`taskbar-link w-36 h-12 rounded-lg text-center flex items-center justify-center gap-2 text-Iris transition-all duration-300 ease-in-out hover:bg-Iris hover:text-Surface ${activePage === 'Writing' ? 'border bg-Overlay border-Iris text-Iris' : ' bg-Surface '
						}`}
				>
					<Icon icon="writing" className="h-6 w-6 fill-current" />
					<span className="text-xl font-normal leading-5">Writing</span>
				</a>

				<a
					href="https://resume.hitarth.dev"
					target="_blank"
					rel="noopener noreferrer"
					className={`taskbar-link w-36 h-12 rounded-lg bg-Surface text-center flex items-center justify-center gap-2 text-Rose transition-all duration-300 ease-in-out hover:bg-Rose hover:text-Surface `}
				>
					<Icon icon="resume" className="h-6 w-6 fill-current" />
					<span className="text-xl font-normal leading-5">Resume</span>
				</a>
			</div>
		</>
	);
};
