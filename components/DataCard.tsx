'use client';

import React, { useEffect, useState } from 'react';
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
} from '../components/ui/card'; // Import ShadCN card components

interface Data {
	recycling: number;
	trash: number;
}

const DataCard: React.FC = () => {
	const [data, setData] = useState<Data | null>(null);
	const [loading, setLoading] = useState(true);

	// Fetch data from Firebase Realtime Database
	const fetchDataFromFirebase = async (path: string) => {
		const response = await fetch(
			`https://ecosort-c044a-default-rtdb.firebaseio.com/${path}.json`,
		);
		if (!response.ok) {
			throw new Error(`Failed to fetch data from ${path}`);
		}
		return response.json();
	};

	useEffect(() => {
		const fetchDataFromFirebaseService = async () => {
			setLoading(true);
			try {
				// Fetch recycling and trash data from Firebase
				const recyclingData = await fetchDataFromFirebase('recycling');
				const trashData = await fetchDataFromFirebase('trash');

				// Log data to see what we are getting
				console.log('Recycling Data:', recyclingData);
				console.log('Trash Data:', trashData);

				// Assuming the data structure is simple values like { value: 100 }
				setData({
					recycling: recyclingData ?? 0, // Default to 0 if value is undefined or null
					trash: trashData ?? 0, // Default to 0 if value is undefined or null
				});
			} catch (error) {
				console.error('Error fetching data:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchDataFromFirebaseService();
	}, []);

	if (loading) {
		return <div className="text-center">Loading...</div>;
	}

	return (
		<Card className="max-w-sm rounded-lg bg-white p-6 m-4">
			<CardHeader>
				<CardTitle className="text-3xl font-bold text-center text-gray-800">
					Data Status
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="text-gray-700 text-lg">
					<div className="mb-4">
						<strong className="text-xl">Recycling:</strong>{' '}
						<span className="font-semibold text-green-600">
							{data?.recycling}
						</span>
					</div>
					<div className="mb-4">
						<strong className="text-xl">Trash:</strong>{' '}
						<span className="font-semibold text-red-600">
							{data?.trash}
						</span>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default DataCard;
