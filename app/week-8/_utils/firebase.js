// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
 
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBEFhmTlSEF4nxiWYzKQU0m3VRpc7AgxuU",
    authDomain: "cprg-306-assignments-ecb09.firebaseapp.com",
    projectId: "cprg-306-assignments-ecb09",
    storageBucket: "cprg-306-assignments-ecb09.appspot.com",
    messagingSenderId: "269303594064",
    appId: "1:269303594064:web:4c9db8a8300f1e3ad96555",
    measurementId: "G-8M7C0BLL92"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);