import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdfXHKLKERbWkVIcr6NZQUVb6oSHVJisM",
  authDomain: "coding-challenge-2022.firebaseapp.com",
  projectId: "coding-challenge-2022",
  storageBucket: "coding-challenge-2022.appspot.com",
  messagingSenderId: "150496575059",
  appId: "1:150496575059:web:760f00612e969cd7d5d0a6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
