'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { Sidebar } from '../components/Sidebar'; // ✅ Ensure correct import
import React, { useState } from 'react'; // ✅ Import useState

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'EcoSort',
	description:
		'Hackathon project for identifying trash using machine learning',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// ✅ Add state for activeTab
	const [activeTab, setActiveTab] = useState('gallery');

	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="flex h-screen bg-gray-100">
					{/* ✅ Pass activeTab and setActiveTab to Sidebar */}
					<Sidebar
						activeTab={activeTab}
						setActiveTab={setActiveTab}
					/>
					<div className="flex-1 overflow-auto p-8">{children}</div>
				</div>
			</body>
		</html>
	);
}
