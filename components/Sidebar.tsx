// components/Sidebar.tsx
'use client';

import { usePathname } from 'next/navigation';
import { Button } from './ui/button'; // Import Button from ShadCN
import Link from 'next/link';

// Interface for Sidebar Props
interface SidebarProps {
	activeTab: string;
	setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export const Sidebar: React.FC<SidebarProps> = ({
	activeTab,
	setActiveTab,
}) => {
	const currentPath = usePathname(); // Use pathname for highlighting active tabs

	// Handle the link click and update the active tab
	const handleLinkClick = (tab: string) => {
		setActiveTab(tab);
	};

	return (
		<div className="w-64 bg-gray-800 h-screen p-4">
			{/* Header */}
			<Link
				href="/"
				className="text-2xl font-semibold text-white text-center mb-6"
			>
				EcoSort Menu
			</Link>

			{/* Sidebar Links */}
			<ul className="space-y-4">
				<li
					className={`p-2 rounded-md transition-all duration-200 ${
						activeTab === 'gallery' || currentPath === '/gallery'
							? 'bg-gray-700 text-white'
							: 'hover:bg-gray-700 hover:text-white'
					}`}
				>
					<Link
						href="/gallery"
						className="block w-full"
						onClick={() => handleLinkClick('gallery')}
					>
						<Button
							variant="link"
							className="w-full text-white text-left"
						>
							Image & Video Gallery
						</Button>
					</Link>
				</li>
				<li
					className={`p-2 rounded-md transition-all duration-200 ${
						activeTab === 'data' || currentPath === '/data'
							? 'bg-gray-700 text-white'
							: 'hover:bg-gray-700 hover:text-white'
					}`}
				>
					<Link
						href="/data"
						className="block w-full"
						onClick={() => handleLinkClick('data')}
					>
						<Button
							variant="link"
							className="w-full text-white text-left"
						>
							Data Display
						</Button>
					</Link>
				</li>
				<li
					className={`p-2 rounded-md transition-all duration-200 ${
						activeTab === 'model' || currentPath === '/model'
							? 'bg-gray-700 text-white'
							: 'hover:bg-gray-700 hover:text-white'
					}`}
				>
					<Link
						href="/model"
						className="block w-full"
						onClick={() => handleLinkClick('model')}
					>
						<Button
							variant="link"
							className="w-full text-white text-left"
						>
							Model Integration
						</Button>
					</Link>
				</li>
				<li
					className={`p-2 rounded-md transition-all duration-200 ${
						activeTab === 'chatbot' || currentPath === '/chatbot'
							? 'bg-gray-700 text-white'
							: 'hover:bg-gray-700 hover:text-white'
					}`}
				>
					<Link
						href="/chatbot"
						className="block w-full"
						onClick={() => handleLinkClick('chatbot')}
					>
						<Button
							variant="link"
							className="w-full text-white text-left"
						>
							Chatbot
						</Button>
					</Link>
				</li>
			</ul>
		</div>
	);
};
