
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBPDERNZ7JwE8e8MHVTtkFBZ5coYf2qZQ",
  authDomain: "proyectocoder-fa0c6.firebaseapp.com",
  projectId: "proyectocoder-fa0c6",
  storageBucket: "proyectocoder-fa0c6.appspot.com",
  messagingSenderId: "695521302360",
  appId: "1:695521302360:web:49af8c54f4049f5fd8772d"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);