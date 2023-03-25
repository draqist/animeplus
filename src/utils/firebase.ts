import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZTmnPD4y5aKN3nfzgDRVNYFSbbnlFiJw",
  authDomain: "chatfic-a0dd0.firebaseapp.com",
  projectId: "chatfic-a0dd0",
  storageBucket: "chatfic-a0dd0.appspot.com",
  messagingSenderId: "436702448139",
  appId: "1:436702448139:web:05d2df10761abe72fd150e",
  measurementId: "G-KE8RQV2757",
};
const app = initializeApp(firebaseConfig);
//  Providers for social login
const provider = new GoogleAuthProvider();

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export { auth, provider };
