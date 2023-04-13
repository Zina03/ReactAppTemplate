import  {initializeApp} from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBpMqVuOsY8iUSmtKXtbd1qK4xoM272kCk",
    authDomain: "bookcenter-9f2e6.firebaseapp.com",
    projectId: "bookcenter-9f2e6",
    storageBucket: "bookcenter-9f2e6.appspot.com",
    messagingSenderId: "105130139396",
    appId: "1:105130139396:web:2cb3f1f47ff5b05469ba51"
};

const app = initializeApp(firebaseConfig);

export {app};