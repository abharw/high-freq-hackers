'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { Sidebar } from '../components/Sidebar';
import React, { useState } from 'react';
import Head from 'next/head'; // Import Head from Next.js

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [activeTab, setActiveTab] = useState('gallery');

	return (
		<html lang="en">
			<Head>
				<title>EcoSort</title>
				<meta
					name="description"
					content="Hackathon project for identifying trash using machine learning"
				/>
			</Head>
			<body className={inter.className}>
				<div className="flex h-screen bg-gray-100">
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
