
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC8CuradMYu1HTZP81DsYfxuu_PP9OjJnU",
    authDomain: "nebula-67e1d.firebaseapp.com",
    projectId: "nebula-67e1d",
    storageBucket: "nebula-67e1d.appspot.com",
    messagingSenderId: "922037261381",
    appId: "1:922037261381:web:58d6f6ec125b2db6267f2c",
    measurementId: "G-JE88JKV2MM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{ db, auth};
