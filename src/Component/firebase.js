// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAd08pUAreG7IHNkz4Z5bvobhc8CbHowbs',
	authDomain: 'image-gallery-cfb06.firebaseapp.com',
	projectId: 'image-gallery-cfb06',
	storageBucket: 'image-gallery-cfb06.appspot.com',
	messagingSenderId: '57147481607',
	appId: '1:57147481607:web:971cc09dd8f1e69d62d4a2'
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };