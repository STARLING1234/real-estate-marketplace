import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCK4guQUBSA42kmm42UV2B_ky-6mcJY_P0",
  authDomain: "homenest-c79c8.firebaseapp.com",
  projectId: "homenest-c79c8",
  storageBucket: "homenest-c79c8.firebasestorage.app",
  messagingSenderId: "783159617174",
  appId: "1:783159617174:web:98a3cb7ecc1452bba304b7"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;