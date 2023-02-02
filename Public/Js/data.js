// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDkyehVM8jsl_EUYoPnKavmvpNNJ9UmyUw",
    authDomain: "courseonline-3dbe5.firebaseapp.com",
    databaseURL: "https://courseonline-3dbe5-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "courseonline-3dbe5",
    storageBucket: "courseonline-3dbe5.appspot.com",
    messagingSenderId: "1013138771970",
    appId: "1:1013138771970:web:a23fc0e45fcc053984971b"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);  

var Categories = document.querySelector('#list-course');
var database = firebase.database();
var data = firebase.database().ref().child('Course');

data.on('value', (snap) => {
    var course = snap.val(); 
    for (const key in course) {
        Categories.innerHTML += 
        `<div class="main-content_box-content-inContent-home-listCourse">
            <div class="main-content_box-content-inContent-home-listCourse-pic">
                <img src="${course[key].img}" alt="">
            </div>
            <div class="main-content_box-content-inContent-home-listCourse-title">
                ${course[key].nameCourse}
            </div>
            <div class="main-content_box-content-inContent-home-listCourse-user">
                <div class="main-content_box-content-inContent-home-listCourse-user-icon">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="users" class="svg-inline--fa fa-users " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path fill="currentColor" d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z"></path>
                    </svg>
                </div>
                <span>${course[key].numberOfUser}</span>
            </div>
        </div>`;
    }
});