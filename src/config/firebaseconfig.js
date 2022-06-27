import firebase from "firebase"
import "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyC1k3v6QBacqeeM5mB5dk_c0svE2CjoDYs",
    authDomain: "base-dados-39c72.firebaseapp.com",
    databaseURL: "https://base-dados-39c72-default-rtdb.firebaseio.com",
    projectId: "base-dados-39c72",
    storageBucket: "base-dados-39c72.appspot.com",
    messagingSenderId: "1056017265419",
    appId: "1:1056017265419:web:69ebf2985142763a4e680e",
    measurementId: "G-L2REEDKG22"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = firebase.firestore();
  export default database