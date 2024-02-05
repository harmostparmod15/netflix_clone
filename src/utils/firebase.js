// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChrqvWnPAQTLAOcOQZ_5qOK9F_KCx0upE",
  authDomain: "netflixclone-a7d7c.firebaseapp.com",
  projectId: "netflixclone-a7d7c",
  storageBucket: "netflixclone-a7d7c.appspot.com",
  messagingSenderId: "128063340540",
  appId: "1:128063340540:web:d7033778d473f1ac473c79",
  measurementId: "G-90HDLTSWBS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
