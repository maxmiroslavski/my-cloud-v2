import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyCnCTlSE1S20osNOZ_E-_dHyOxz02Ec-Q0',
	authDomain: 'my-cloud-d28e1.firebaseapp.com',
	projectId: 'my-cloud-d28e1',
	storageBucket: 'my-cloud-d28e1.appspot.com',
	messagingSenderId: '853777036357',
	appId: '1:853777036357:web:6a2dab06ed2c4c211c5f2c',
	measurementId: 'G-5P3CSE0W2F',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
