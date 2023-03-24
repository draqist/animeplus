import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4-ZVYuiu4oCgefBqp67KhHu-klOicf8s",
  authDomain: "chatanime-b26c6.firebaseapp.com",
  projectId: "chatanime-b26c6",
  storageBucket: "chatanime-b26c6.appspot.com",
  messagingSenderId: "717296318166",
  appId: "1:717296318166:web:3b3b74724e8bbe4a81bb77",
  measurementId: "G-S119G23EZ7",
};
const app = initializeApp(firebaseConfig);
//  Providers for social login
const provider = new GoogleAuthProvider();

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export { auth, provider };
