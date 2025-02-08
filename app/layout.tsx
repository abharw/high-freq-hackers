import './globals.css';
import { Inter } from 'next/font/google';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="flex flex-col items-center justify-center h-screen bg-gray-100">
					{/* Title and Logo Section */}
					<div className="w-full max-w-lg p-8 text-center">
						<h1 className="text-5xl font-bold text-green-700">
							EcoSort
						</h1>
						{/* Logo placeholder */}
						<div className="mt-4"></div>
					</div>

					{/* Main content (DataCard) */}
					<div className="flex flex-col items-center justify-center bg-white rounded-lg">
						{children}
					</div>
				</div>
			</body>
		</html>
	);
}
