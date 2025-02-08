import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
	measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Export the app and database instances
export const db = database;
export default app;

// Your existing data listening code
const dataRef = ref(database, 'Status');

onValue(
	dataRef,
	(snapshot) => {
		const data = snapshot.val();
		console.log('🔄 Updated Data from Firebase:');
		console.log(`FPS: ${data.fps}`);
		console.log(`Recycling: ${data.recycling}`);
		console.log(`Trash: ${data.trash}`);
	},
	(error) => {
		console.error('❌ Error fetching data:', error);
	},
);
