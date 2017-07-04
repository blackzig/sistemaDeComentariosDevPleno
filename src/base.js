const Rebase = require('re-base');
const firebase = require('firebase/app');
const database = require('firebase/database');

const app = firebase.initializeApp({
    apiKey: "",
    authDomain: "sistemacomentarios.firebaseapp.com",
    databaseURL: "https://sistemacomentarios.firebaseio.com",
    projectId: "sistemacomentarios",
    storageBucket: "sistemacomentarios.appspot.com",
    messagingSenderId: "216578923653"
});

const db = database(app);
const base = Rebase.createClass(db);

export default base
